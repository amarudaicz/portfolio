 
interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  [key: string]: any;
}
 
export default function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={`group opacity-90 hover:opacity-100 flex overflow-hidden p-[0.25rem] [--duration:40s] [--gap:0.5rem] [gap:var(--gap)]  ${vertical ? 'flex-col ' : 'flex-row'} ${className}`}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={`flex shrink-0 justify-around  gap-[0.5rem] ", 
                ${vertical ? 'animate-marquee-vertical flex-col' : 'animate-marquee flex-row'}
                ${pauseOnHover ? 'group-hover:[animation-play-state:paused]' : '' }
                ${reverse ? ' [animation-direction:reverse]' : '' }
            `}
          >
            {children}
          </div>
        ))}
    </div>
  );
}