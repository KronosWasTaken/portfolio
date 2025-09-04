import { useState, useEffect, useMemo } from 'react';
import { Music, Pause, Play, ExternalLink, User, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Badge } from '@/components/ui/badge';

interface Track {
  name: string;
  artist: {
    '#text': string;
  };
  album: {
    '#text': string;
  };
  duration?: string;
  '@attr'?: {
    nowplaying: string;
  };
  image?: Array<{
    '#text': string;
    size: string;
  }>;
}

interface RecentTracksResponse {
  recenttracks: {
    track: Track[];
    '@attr': {
      user: string;
      totalPages: string;
      page: string;
      perPage: string;
      total: string;
    };
  };
}

const NowPlaying = () => {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [recentTracks, setRecentTracks] = useState<Track[]>([]);
  const [userInfo, setUserInfo] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastTrackId, setLastTrackId] = useState<string | null>(null);
  const [isNewTrack, setIsNewTrack] = useState(false);
  const [isMusicActive, setIsMusicActive] = useState(false);
  const [pollInterval, setPollInterval] = useState(10000);
  const [lastUpdateTime, setLastUpdateTime] = useState<number>(0);
  const [trackStartTime, setTrackStartTime] = useState<number>(0);
  const [currentProgress, setCurrentProgress] = useState<number>(0);
  const [isHoverCardOpen, setIsHoverCardOpen] = useState(false);
  const [trackDuration, setTrackDuration] = useState<number>(180);
  const [isDurationValid, setIsDurationValid] = useState<boolean>(false);
  const [isFetchingDuration, setIsFetchingDuration] = useState<boolean>(false);
  const [albumImageCache, setAlbumImageCache] = useState<Map<string, string>>(new Map());
  const [currentImageUrls, setCurrentImageUrls] = useState<Map<string, string>>(new Map());

  const fetchAlbumInfo = async (artist: string, album: string, albumKey: string) => {
    try {
      const apiKey = import.meta.env.VITE_LASTFM_API_KEY;
      if (!apiKey) {
        return null;
      }

      const response = await fetch(
        `https://ws.audioscrobbler.com/2.0/?method=album.getinfo&artist=${encodeURIComponent(artist)}&album=${encodeURIComponent(album)}&api_key=${apiKey}&format=json`,
        {
          headers: {
            'User-Agent': 'Portfolio-NowPlaying/1.0'
          }
        }
      );

      if (response.ok) {
        const data = await response.json();
        
        if (data.album?.image) {
          const images = Array.isArray(data.album.image) ? data.album.image : [data.album.image];
          const imageUrl = images.find(img => img.size === 'large')?.['#text'] ||
                          images.find(img => img.size === 'medium')?.['#text'] ||
                          images.find(img => img.size === 'small')?.['#text'] ||
                          images[0]?.['#text'];
          
          if (imageUrl && imageUrl.trim() !== '') {
            setAlbumImageCache(prev => new Map(prev).set(albumKey, imageUrl));
            setCurrentImageUrls(prev => new Map(prev).set(albumKey, imageUrl));
            
            const cacheKey = `album_image_${albumKey}`;
            localStorage.setItem(cacheKey, JSON.stringify({
              imageUrl: imageUrl,
              timestamp: Date.now()
            }));
            
            return imageUrl;
          }
        }
      }
    } catch (err) {
    }
    return null;
  };

  const getAlbumImage = useMemo(() => {
    return (track: Track) => {
      if (!track.artist?.['#text'] || !track.album?.['#text']) {
        return null;
      }
      
      const albumKey = `${track.artist['#text']}-${track.album['#text']}`;
      
      if (currentImageUrls.has(albumKey)) {
        return currentImageUrls.get(albumKey);
      }
      
      if (track.image) {
        const imageUrl = track.image.find(img => img.size === 'small')?.['#text'] || 
                         track.image.find(img => img.size === 'medium')?.['#text'] ||
                         track.image.find(img => img.size === 'large')?.['#text'] ||
                         track.image[0]?.['#text'];
        
        if (imageUrl && imageUrl.trim() !== '') {
          setAlbumImageCache(prev => new Map(prev).set(albumKey, imageUrl));
          setCurrentImageUrls(prev => new Map(prev).set(albumKey, imageUrl));
          
          const cacheKey = `album_image_${albumKey}`;
          localStorage.setItem(cacheKey, JSON.stringify({
            imageUrl: imageUrl,
            timestamp: Date.now()
          }));
          
          return imageUrl;
        }
      }
      
      if (!albumImageCache.has(albumKey)) {
        fetchAlbumInfo(track.artist['#text'], track.album['#text'], albumKey);
      }
      return null;
    };
  }, [currentImageUrls, albumImageCache]);

  const cleanupExpiredCache = () => {
    const keysToRemove = [];
    const now = Date.now();
    
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && (key.startsWith('lastfm_') || key.startsWith('album_image_'))) {
        try {
          const cached = localStorage.getItem(key);
          if (cached) {
            const { timestamp } = JSON.parse(cached);
            let maxAge = 0;
            
            if (key.includes('user_')) {
              maxAge = 3600000; // 1 hour
            } else if (key.includes('tracks_')) {
              maxAge = 30000; // 30 seconds
            } else if (key.includes('duration_')) {
              maxAge = 86400000; // 24 hours
            } else if (key.includes('progress_')) {
              maxAge = 300000; // 5 minutes
            } else if (key.includes('album_image_')) {
              maxAge = 604800000; // 7 days
            }
            
            if (now - timestamp > maxAge) {
              keysToRemove.push(key);
            }
          }
        } catch (err) {
          keysToRemove.push(key);
        }
      }
    }
    
    keysToRemove.forEach(key => localStorage.removeItem(key));
  };

  const loadAlbumImageCache = () => {
    const cache = new Map<string, string>();
    const currentUrls = new Map<string, string>();
    const username = import.meta.env.VITE_LASTFM_USERNAME;
    
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('album_image_')) {
        try {
          const cached = localStorage.getItem(key);
          if (cached) {
            const { imageUrl, timestamp } = JSON.parse(cached);
            if (Date.now() - timestamp < 604800000) {
              const albumKey = key.replace('album_image_', '');
              cache.set(albumKey, imageUrl);
              currentUrls.set(albumKey, imageUrl);
            }
          }
        } catch (err) {
        }
      }
    }
    
    setAlbumImageCache(cache);
    setCurrentImageUrls(currentUrls);
  };

  const fetchImagesForRecentTracks = (tracks: Track[]) => {
    tracks.forEach(track => {
      if (track.artist?.['#text'] && track.album?.['#text']) {
        const albumKey = `${track.artist['#text']}-${track.album['#text']}`;
        
        if (!currentImageUrls.has(albumKey) && !albumImageCache.has(albumKey)) {
          fetchAlbumInfo(track.artist['#text'], track.album['#text'], albumKey);
        }
      }
    });
  };

  const fetchTrackInfo = async (artist: string, track: string, trackId: string) => {
    try {
      const apiKey = import.meta.env.VITE_LASTFM_API_KEY;
      if (!apiKey) {
        return;
      }


      const durationCacheKey = `lastfm_duration_${trackId}`;
      const cachedDuration = localStorage.getItem(durationCacheKey);
      if (cachedDuration) {
        const { duration, timestamp } = JSON.parse(cachedDuration);
        if (Date.now() - timestamp < 86400000) {
          setTrackDuration(duration);
          setIsDurationValid(true);
          setIsFetchingDuration(false);
          return;
        }
      }

      setIsFetchingDuration(true);
      
      const tryFetchTrackInfo = async (trackName: string) => {
        const response = await fetch(
          `https://ws.audioscrobbler.com/2.0/?method=track.getinfo&artist=${encodeURIComponent(artist)}&track=${encodeURIComponent(trackName)}&api_key=${apiKey}&autocorrect=1&format=json`,
          {
            headers: {
              'User-Agent': 'Portfolio-NowPlaying/1.0'
            }
          }
        );

        if (response.ok) {
          const data = await response.json();
          
          if (data.track?.duration) {
            const durationMs = parseInt(data.track.duration);
            const durationSeconds = Math.floor(durationMs / 1000);
            
            if (!isNaN(durationSeconds) && durationSeconds > 0 && durationSeconds < 3600) {
              setTrackDuration(durationSeconds);
              setIsDurationValid(true);
              
              localStorage.setItem(durationCacheKey, JSON.stringify({
                duration: durationSeconds,
                timestamp: Date.now()
              }));
              return true;
            } else {
            }
          }
        }
        return false;
      };

      let found = await tryFetchTrackInfo(track);
      
      if (!found) {
        const variations = [
          track.split('(')[0].trim(),
          track.replace(/\s*\([^)]*explicit[^)]*\)/gi, '').trim(),
          track.replace(/\s*\([^)]*album[^)]*\)/gi, '').trim(),
          track.replace(/\s*\([^)]*version[^)]*\)/gi, '').trim(),
        ];
        
        const uniqueVariations = [...new Set(variations)].filter(v => v.length > 0 && v !== track);
        
        
        for (const variation of uniqueVariations) {
          found = await tryFetchTrackInfo(variation);
          if (found) {
            break;
          }
        }
      }
      
      if (!found) {
        setTrackDuration(180);
        setIsDurationValid(false);
      }
    } catch (err) {
      setTrackDuration(180);
      setIsDurationValid(false);
    } finally {
      setIsFetchingDuration(false);
    }
  };

  const fetchUserInfo = async () => {
    try {
      const apiKey = import.meta.env.VITE_LASTFM_API_KEY;
      const username = import.meta.env.VITE_LASTFM_USERNAME;

      if (!apiKey || !username) return;

      const cacheKey = `lastfm_user_${username}`;
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        const { data, timestamp } = JSON.parse(cached);
        if (Date.now() - timestamp < 3600000) {
          setUserInfo(data);
          return;
        }
      }

      const response = await fetch(
        `https://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=${username}&api_key=${apiKey}&format=json`,
        {
          headers: {
            'User-Agent': 'Portfolio-NowPlaying/1.0'
          }
        }
      );

      if (response.ok) {
        const data = await response.json();
        setUserInfo(data.user);
        localStorage.setItem(cacheKey, JSON.stringify({
          data: data.user,
          timestamp: Date.now()
        }));
      }
    } catch (err) {
    }
  };

  const fetchCurrentTrack = async () => {
    try {
      const apiKey = import.meta.env.VITE_LASTFM_API_KEY;
      const username = import.meta.env.VITE_LASTFM_USERNAME;

      if (!apiKey || !username) {
        setError('Last.fm API credentials not configured');
        setIsLoading(false);
        setIsInitialLoad(false);
        return;
      }

      const progressCacheKey = `lastfm_progress_${username}`;
      const cachedProgress = localStorage.getItem(progressCacheKey);
      if (cachedProgress) {
        const { trackId, startTime, lastUpdateTime: cachedLastUpdate } = JSON.parse(cachedProgress);
        if (trackId && startTime && cachedLastUpdate) {
          const timeSinceLastUpdate = Date.now() - cachedLastUpdate;
          if (timeSinceLastUpdate < 300000) {
            setTrackStartTime(startTime);
            setLastTrackId(trackId);
            const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
            setCurrentProgress(elapsedSeconds);
          }
        }
      }

      const cacheKey = `lastfm_tracks_${username}`;
      const cached = localStorage.getItem(cacheKey);
      if (cached && !isInitialLoad) {
        const { data, timestamp } = JSON.parse(cached);
        if (Date.now() - timestamp < 30000) {
          if (data.recenttracks?.track) {
            const tracks = Array.isArray(data.recenttracks.track) 
              ? data.recenttracks.track 
              : [data.recenttracks.track];
            setRecentTracks(tracks.slice(0, 5));
            fetchImagesForRecentTracks(tracks.slice(0, 5));
            
            const currentTrackData = tracks[0];
            const trackId = `${currentTrackData.artist['#text']}-${currentTrackData.name}`;
            const isNowPlaying = currentTrackData['@attr']?.nowplaying === 'true';
            
            if (isNowPlaying && trackId !== lastTrackId) {
              setCurrentTrack(currentTrackData);
              setLastTrackId(trackId);
            }
          }
          setIsLoading(false);
          setIsInitialLoad(false);
          return;
        }
      }

      const response = await fetch(
        `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json&limit=6`,
        {
          headers: {
            'User-Agent': 'Portfolio-NowPlaying/1.0'
          }
        }
      );

      if (!response.ok) {
        if (response.status === 429) {
          setPollInterval(60000);
          throw new Error('Rate limit exceeded - slowing down requests');
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: RecentTracksResponse = await response.json();
      
      localStorage.setItem(cacheKey, JSON.stringify({
        data: data,
        timestamp: Date.now()
      }));
      
      if (data.recenttracks?.track) {
        const tracks = Array.isArray(data.recenttracks.track) 
          ? data.recenttracks.track 
          : [data.recenttracks.track];
        
        setRecentTracks(tracks.slice(0, 5));
        fetchImagesForRecentTracks(tracks.slice(0, 5));
        
        const currentTrackData = tracks[0];
        const trackId = `${currentTrackData.artist['#text']}-${currentTrackData.name}`;
        
        const isNowPlaying = currentTrackData['@attr']?.nowplaying === 'true';
        
        if (isNowPlaying !== isMusicActive) {
          setIsMusicActive(isNowPlaying);
          setPollInterval(isNowPlaying ? 10000 : 30000);
        }
        
        if (isNowPlaying) {
          if (trackId !== lastTrackId) {
            setCurrentTrack(currentTrackData);
            setLastTrackId(trackId);
            setError(null);
            setIsNewTrack(true);
            setLastUpdateTime(Date.now());
            
            const progressCacheKey = `lastfm_progress_${username}`;
            const existingProgress = localStorage.getItem(progressCacheKey);
            let shouldUseCachedProgress = false;
            
            if (existingProgress) {
              const { trackId: cachedTrackId, startTime: cachedStartTime } = JSON.parse(existingProgress);
              if (cachedTrackId === trackId && cachedStartTime) {
                const timeSinceStart = Date.now() - cachedStartTime;
                if (timeSinceStart < 300000) {
                  setTrackStartTime(cachedStartTime);
                  setCurrentProgress(Math.floor(timeSinceStart / 1000));
                  shouldUseCachedProgress = true;
                }
              }
            }
            
            if (!shouldUseCachedProgress) {
              setTrackStartTime(Date.now());
              setCurrentProgress(0);
            }
            
            setIsDurationValid(false);
            setIsFetchingDuration(true);
            
            localStorage.setItem(progressCacheKey, JSON.stringify({
              trackId: trackId,
              startTime: shouldUseCachedProgress ? JSON.parse(existingProgress).startTime : Date.now(),
              lastUpdateTime: Date.now()
            }));
            
            if (currentTrackData.duration && parseInt(currentTrackData.duration) > 0) {
              const durationSeconds = Math.floor(parseInt(currentTrackData.duration) / 1000);
              if (durationSeconds > 0 && durationSeconds < 3600) {
                setTrackDuration(durationSeconds);
                setIsDurationValid(true);
                setIsFetchingDuration(false);
                
                const durationCacheKey = `lastfm_duration_${trackId}`;
                localStorage.setItem(durationCacheKey, JSON.stringify({
                  duration: durationSeconds,
                  timestamp: Date.now()
                }));
              } else {
                fetchTrackInfo(currentTrackData.artist['#text'], currentTrackData.name, trackId);
              }
            } else {
              fetchTrackInfo(currentTrackData.artist['#text'], currentTrackData.name, trackId);
            }
            
            setTimeout(() => setIsNewTrack(false), 2000);
          } else {
            const progressCacheKey = `lastfm_progress_${username}`;
            const cachedProgress = localStorage.getItem(progressCacheKey);
            if (cachedProgress) {
              const progressData = JSON.parse(cachedProgress);
              if (progressData.trackId === trackId) {
                localStorage.setItem(progressCacheKey, JSON.stringify({
                  ...progressData,
                  lastUpdateTime: Date.now()
                }));
              }
            }
          }
        } else {
          if (currentTrack !== null) {
            setCurrentTrack(null);
            setLastTrackId(null);
            setIsNewTrack(false);
            const progressCacheKey = `lastfm_progress_${username}`;
            localStorage.removeItem(progressCacheKey);
          }
        }
      } else {
        if (currentTrack !== null) {
          setCurrentTrack(null);
          setLastTrackId(null);
          const progressCacheKey = `lastfm_progress_${username}`;
          localStorage.removeItem(progressCacheKey);
        }
        setRecentTracks([]);
      }
    } catch (err) {
      setError('Failed to fetch current track');
      setCurrentTrack(null);
    } finally {
      setIsLoading(false);
      setIsInitialLoad(false);
    }
  };

  useEffect(() => {
    cleanupExpiredCache();
    loadAlbumImageCache();
    fetchUserInfo();
    fetchCurrentTrack();
    
    const cleanupInterval = setInterval(cleanupExpiredCache, 3600000);
    return () => clearInterval(cleanupInterval);
  }, []);

  useEffect(() => {
    const getSmartInterval = () => {
      if (!isMusicActive || !trackStartTime) return pollInterval;
      
      const timeSinceStart = Date.now() - trackStartTime;
      const minutesSinceStart = timeSinceStart / (1000 * 60);
      
      if (minutesSinceStart > 3) {
        return 8000;
      }
      
      return pollInterval;
    };
    
    const interval = setInterval(() => {
      if (!document.hidden) {
        fetchCurrentTrack();
      }
    }, getSmartInterval());
    
    return () => clearInterval(interval);
  }, [pollInterval, isMusicActive, trackStartTime]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        fetchCurrentTrack();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  useEffect(() => {
    if (!isMusicActive || !trackStartTime) return;

    const interval = setInterval(() => {
      const elapsed = Date.now() - trackStartTime;
      const elapsedSeconds = Math.floor(elapsed / 1000);
      setCurrentProgress(elapsedSeconds);
    }, 1000);

    return () => clearInterval(interval);
  }, [isMusicActive, trackStartTime]);

  useEffect(() => {
    if (isHoverCardOpen) {
      const preventScroll = (e: Event) => {
        e.preventDefault();
        e.stopPropagation();
      };

      document.addEventListener('wheel', preventScroll, { passive: false });
      document.addEventListener('touchmove', preventScroll, { passive: false });

      return () => {
        document.removeEventListener('wheel', preventScroll);
        document.removeEventListener('touchmove', preventScroll);
      };
    }
  }, [isHoverCardOpen]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const formatDuration = (duration?: string) => {
    if (!duration) return '--:--';
    const seconds = parseInt(duration);
    if (isNaN(seconds)) return '--:--';
    return formatTime(seconds);
  };

  const getTrackDuration = (track?: Track) => {
    if (!track?.duration) return 180;
    const seconds = parseInt(track.duration);
    return isNaN(seconds) ? 180 : seconds;
  };

  const getMusicIcon = () => {
    if (isInitialLoad) return null;
    if (isLoading) return <Music className="h-4 w-4 animate-pulse" />;
    if (error) return <Music className="h-4 w-4" />;
    if (!currentTrack) return <Pause className="h-4 w-4" />;
    return <Play className={`h-4 w-4 ${isNewTrack ? 'animate-bounce' : 'animate-pulse'}`} />;
  };

  const getIconColor = () => {
    if (isInitialLoad) return 'text-transparent';
    if (isLoading || error) return 'text-muted-foreground';
    if (!currentTrack) return 'text-muted-foreground';
    return 'text-green-500';
  };

  return (
    <HoverCard onOpenChange={setIsHoverCardOpen}>
      <HoverCardTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className={`relative ${isNewTrack ? 'bg-highlight/10' : ''}`}
        >
          <div className={`transition-colors duration-300 ${getIconColor()}`}>
            {getMusicIcon()}
          </div>
          {isNewTrack && (
            <div className="absolute -top-1 -right-1 h-2 w-2 bg-green-500 rounded-full animate-pulse" />
          )}
        </Button>
      </HoverCardTrigger>
      <HoverCardContent 
        className="w-80 p-4" 
        side="bottom" 
        align="end"
        onWheel={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        onTouchMove={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        {isInitialLoad ? (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="h-4 w-4 bg-muted animate-pulse rounded" />
                <div className="h-4 w-12 bg-muted animate-pulse rounded" />
              </div>
              <div className="flex items-center space-x-1">
                <div className="h-6 w-6 bg-muted animate-pulse rounded" />
                <div className="h-8 w-8 bg-muted animate-pulse rounded-full" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="h-4 w-4 bg-muted animate-pulse rounded" />
                <div className="h-4 w-20 bg-muted animate-pulse rounded" />
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-12 w-12 bg-muted animate-pulse rounded" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-32 bg-muted animate-pulse rounded" />
                  <div className="h-3 w-24 bg-muted animate-pulse rounded" />
                </div>
              </div>
            </div>
          </div>
        ) : (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Music className="h-4 w-4 text-highlight" />
              <span className="text-sm font-medium text-foreground">Music</span>
            </div>
            <div className="flex items-center space-x-1">
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-6 w-6 p-0"
                onClick={() => fetchCurrentTrack()}
                title="Refresh now"
              >
                <RefreshCw className="h-3 w-3" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-8 w-8 p-0 rounded-full overflow-hidden hover:ring-2 hover:ring-highlight/50 transition-all"
                onClick={() => {
                  const username = import.meta.env.VITE_LASTFM_USERNAME;
                  if (username) {
                    window.open(`https://www.last.fm/user/${username}`, '_blank', 'noopener,noreferrer');
                  }
                }}
              >
                {userInfo?.image?.[2]?.['#text'] ? (
                  <img 
                    src={userInfo.image[2]['#text']} 
                    alt="Profile" 
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                ) : null}
                <User className={`h-4 w-4 ${userInfo?.image?.[2]?.['#text'] ? 'hidden' : ''}`} />
              </Button>
            </div>
          </div>

          {currentTrack ? (
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Play className="h-4 w-4 text-green-500" />
                <span className="text-sm font-medium text-highlight">Now Playing</span>
              </div>
              
              <div className="bg-card border border-border/50 rounded-lg p-4 space-y-3 shadow-sm">
                <div className="flex items-center space-x-3">
                  {getAlbumImage(currentTrack) ? (
                    <img 
                      src={getAlbumImage(currentTrack)} 
                      alt={`${currentTrack.artist['#text']} - ${currentTrack.name}`}
                      className="h-12 w-12 rounded object-cover"
                      onError={(e) => {
                        const img = e.target as HTMLImageElement;
                        img.style.display = 'none';
                        const fallback = img.nextElementSibling as HTMLElement;
                        if (fallback) {
                          fallback.classList.remove('hidden');
                        }
                      }}
                      onLoad={(e) => {
                        const img = e.target as HTMLImageElement;
                        const fallback = img.nextElementSibling as HTMLElement;
                        if (fallback) {
                          fallback.classList.add('hidden');
                        }
                      }}
                    />
                  ) : null}
                  <div className={`h-12 w-12 rounded bg-muted flex items-center justify-center ${getAlbumImage(currentTrack) ? 'hidden' : ''}`}>
                    <Music className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0 space-y-1">
                    <div 
                      className="font-bold text-card-foreground text-sm uppercase tracking-wide truncate cursor-pointer hover:text-highlight transition-colors"
                      onClick={() => window.open(`https://www.last.fm/music/${encodeURIComponent(currentTrack.artist['#text'])}/_/${encodeURIComponent(currentTrack.name)}`, '_blank', 'noopener,noreferrer')}
                    >
                      {currentTrack.name}
                    </div>
                    <div 
                      className="text-xs text-muted-foreground truncate cursor-pointer hover:text-foreground transition-colors"
                      onClick={() => window.open(`https://www.last.fm/music/${encodeURIComponent(currentTrack.artist['#text'])}`, '_blank', 'noopener,noreferrer')}
                    >
                      by {currentTrack.artist['#text'] || 'Unknown Artist'}
                    </div>
                    {currentTrack.album['#text'] && (
                      <div className="text-xs text-muted-foreground truncate">
                        on {currentTrack.album['#text']}
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="w-full bg-muted rounded-full h-0.5">
                    <div 
                      className="bg-highlight h-0.5 rounded-full transition-all duration-1000"
                      style={{ 
                        width: `${Math.min((currentProgress / trackDuration) * 100, 100)}%`
                      }}
                    ></div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{formatTime(currentProgress)}</span>
                    <span>
                      {isFetchingDuration ? (
                        <span className="flex items-center space-x-0.5">
                          <span className="w-1 h-1 bg-muted-foreground rounded-full" style={{ 
                            animation: 'wave 1.2s ease-in-out infinite',
                            animationDelay: '0ms'
                          }}></span>
                          <span className="w-1 h-1 bg-muted-foreground rounded-full" style={{ 
                            animation: 'wave 1.2s ease-in-out infinite',
                            animationDelay: '200ms'
                          }}></span>
                          <span className="w-1 h-1 bg-muted-foreground rounded-full" style={{ 
                            animation: 'wave 1.2s ease-in-out infinite',
                            animationDelay: '400ms'
                          }}></span>
                        </span>
                      ) : isDurationValid ? (
                        formatTime(trackDuration)
                      ) : (
                        '--:--'
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Pause className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Not currently playing</span>
            </div>
          )}

          {recentTracks.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Music className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">Recent Tracks</span>
              </div>
              <div className="relative">
                <div className="space-y-2 max-h-48 overflow-y-auto scrollbar-none">
                  <div className="space-y-2">
                    {recentTracks.map((track, index) => {
                      const isCurrentTrack = currentTrack && 
                        track.name === currentTrack.name && 
                        track.artist['#text'] === currentTrack.artist['#text'];
                      
                      return (
                        <div 
                          key={`${track.artist['#text']}-${track.name}-${index}`}
                          className={`flex items-center space-x-3 p-2 rounded-md transition-colors ${
                            isCurrentTrack ? 'bg-highlight/10' : 'hover:bg-muted/50'
                          }`}
                        >
                          {getAlbumImage(track) ? (
                            <img 
                              src={getAlbumImage(track)} 
                              alt={`${track.artist['#text']} - ${track.name}`}
                              className="h-8 w-8 rounded object-cover"
                              onError={(e) => {
                                const img = e.target as HTMLImageElement;
                                img.style.display = 'none';
                                const fallback = img.nextElementSibling as HTMLElement;
                                if (fallback) {
                                  fallback.classList.remove('hidden');
                                }
                              }}
                              onLoad={(e) => {
                                const img = e.target as HTMLImageElement;
                                const fallback = img.nextElementSibling as HTMLElement;
                                if (fallback) {
                                  fallback.classList.add('hidden');
                                }
                              }}
                            />
                          ) : null}
                          <div className={`h-8 w-8 rounded bg-muted flex items-center justify-center ${getAlbumImage(track) ? 'hidden' : ''}`}>
                            <Music className="h-4 w-4 text-muted-foreground" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className={`text-sm truncate ${
                              isCurrentTrack ? 'font-medium text-highlight' : 'text-foreground'
                            }`}>
                              {track.name}
                            </div>
                            <div className="text-xs text-muted-foreground truncate">
                              {track.artist['#text']}
                            </div>
                          </div>
                          {isCurrentTrack && (
                            <Badge variant="secondary" className="text-xs">
                              Now
                            </Badge>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-background to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-background to-transparent pointer-events-none" />
              </div>
            </div>
          )}

          {error && (
            <div className="text-xs text-muted-foreground text-center">
              {error}
            </div>
          )}
        </div>
        )}
      </HoverCardContent>
    </HoverCard>
  );
};

export default NowPlaying;
