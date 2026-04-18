import React from 'react';

interface LiquidProgressProps {
  progress: number;
  size?: number;
  label?: string;
  color?: string;
  secondaryColor?: string;
  height?: number;
}

const LiquidProgress: React.FC<LiquidProgressProps> = ({
  progress,
  size = 200,
  label,
  color = 'hsl(var(--highlight))',
  secondaryColor = 'hsl(var(--highlight) / 0.3)',
  height = 60,
}) => {
  const percent = Math.min(Math.max(progress, 0), 100);
  const fillLevel = 100 - percent;

  const delays = React.useMemo(() => [
    -(Math.random() * 20) - 2, // base -2s
    -(Math.random() * 20) - 3, // base -3s
    -(Math.random() * 20) - 4, // base -4s
    -(Math.random() * 20) - 5, // base -5s
  ], []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <div className="absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
        <div className="relative w-full" style={{ height }}>
          <svg 
            className="absolute bottom-0 left-0 w-full mb-[-7px]" 
            style={{ height: height + 7 }}
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 24 150 28" 
            preserveAspectRatio="none" 
            shapeRendering="auto"
          >
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="parallax">
              <use href="#gentle-wave" x="48" y="0" fill={color} style={{ opacity: 0.3, animationDelay: `${delays[0]}s` }} />
              <use href="#gentle-wave" x="48" y="3" fill={color} style={{ opacity: 0.5, animationDelay: `${delays[1]}s` }} />
              <use href="#gentle-wave" x="48" y="5" fill={color} style={{ opacity: 0.7, animationDelay: `${delays[2]}s` }} />
              <use href="#gentle-wave" x="48" y="7" fill={color} style={{ opacity: 1, animationDelay: `${delays[3]}s` }} />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LiquidProgress;
