import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export type Theme = 'default' | 'mocha' | 'dracula' | 'everforest' | 'rosepine' | 'nord';

const STORAGE_KEY = 'portfolio-theme';

function createThemeStore() {
  const initialTheme = (browser && (localStorage.getItem(STORAGE_KEY) as Theme)) || 'default';
  const { subscribe, set } = writable<Theme>(initialTheme);

  return {
    subscribe,
    set: (newTheme: Theme) => {
      const update = () => {
        if (browser) {
          localStorage.setItem(STORAGE_KEY, newTheme);
          if (newTheme === 'default') {
            document.documentElement.removeAttribute('data-theme');
          } else {
            document.documentElement.setAttribute('data-theme', newTheme);
          }
        }
        set(newTheme);
      };

      if (browser && document.startViewTransition) {
        document.documentElement.classList.add('is-transitioning');
        const transition = document.startViewTransition(update);
        transition.finished.finally(() => {
          document.documentElement.classList.remove('is-transitioning');
        });
      } else {
        update();
      }
    },
    init: () => {
      if (browser) {
        const theme = (localStorage.getItem(STORAGE_KEY) as Theme) || 'default';
        if (theme !== 'default') {
          document.documentElement.setAttribute('data-theme', theme);
        }
      }
    }
  };
}

export const theme = createThemeStore();
