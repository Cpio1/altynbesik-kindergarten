/** Декоративные фигуры: скрыты от экранных дикторов и не перехватывают клики. */

type DecorProps = { className?: string; color?: string };

const base = { "aria-hidden": true, focusable: false } as const;

export function Cloud({ className = "", color = "#FFFFFF" }: DecorProps) {
  return (
    <svg {...base} viewBox="0 0 120 64" className={`pointer-events-none ${className}`}>
      <path
        fill={color}
        d="M28 62C13 62 2 52 2 40c0-11 9-20 21-20 3-11 14-18 26-18 13 0 24 8 27 19 3-1 6-2 10-2 15 0 31 10 31 22 0 13-13 21-27 21H28Z"
      />
    </svg>
  );
}

export function Star({ className = "", color = "#E9B949" }: DecorProps) {
  return (
    <svg {...base} viewBox="0 0 40 40" className={`pointer-events-none ${className}`}>
      <path
        fill={color}
        stroke={color}
        strokeWidth="4"
        strokeLinejoin="round"
        d="m20 5 4.6 9.6 10.4 1.5-7.5 7.4 1.8 10.5-9.3-5-9.3 5 1.8-10.5L5 16.1l10.4-1.5L20 5Z"
      />
    </svg>
  );
}

export function Sparkle({ className = "", color = "#E9B949" }: DecorProps) {
  return (
    <svg {...base} viewBox="0 0 32 32" className={`pointer-events-none ${className}`}>
      <path
        fill={color}
        d="M16 1c1.4 8.6 5.4 13 15 15-9.600 2-13.600 6.400-15 15-1.400-8.600-5.400-13-15-15 9.600-2 13.600-6.400 15-15Z"
      />
    </svg>
  );
}

export function Sun({ className = "", color = "#E9B949" }: DecorProps) {
  return (
    <svg {...base} viewBox="0 0 100 100" className={`pointer-events-none ${className}`}>
      <g className="spin-slow" stroke={color} strokeWidth="6" strokeLinecap="round">
        <path d="M50 5v11M50 84v11M5 50h11M84 50h11M18 18l8 8M74 74l8 8M82 18l-8 8M26 74l-8 8" />
      </g>
      <circle cx="50" cy="50" r="24" fill={color} />
    </svg>
  );
}

export function Squiggle({ className = "", color = "#E9B949" }: DecorProps) {
  return (
    <svg
      {...base}
      viewBox="0 0 220 14"
      preserveAspectRatio="none"
      className={`pointer-events-none ${className}`}
    >
      <path
        fill="none"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
        d="M3 9c20-7 34-7 54-2s36 5 54 0 36-5 54 0 34 4 52-1"
      />
    </svg>
  );
}

/** Волнистый переход между разделами: цвет следующего раздела поднимается снизу. */
export function Wave({
  color,
  className = "",
  flip = false,
}: {
  color: string;
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      {...base}
      viewBox="0 0 1440 70"
      preserveAspectRatio="none"
      className={`pointer-events-none block w-full ${flip ? "-scale-x-100" : ""} ${className}`}
    >
      <path
        fill={color}
        d="M0 42c150-30 300-42 480-22s300 44 500 30 320-38 460-20v40H0Z"
      />
    </svg>
  );
}
