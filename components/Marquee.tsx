type MarqueeProps = {
  items: string[];
  reverse?: boolean;
  className?: string;
  separator?: string;
};

export default function Marquee({ items, reverse, className, separator = "☾" }: MarqueeProps) {
  const content = (
    <>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-6 md:gap-10 shrink-0">
          <span>{item}</span>
          <span className="text-accent">{separator}</span>
        </span>
      ))}
    </>
  );

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className ?? ""}`}>
      <div className="marquee-track gap-6 md:gap-10" data-dir={reverse ? "reverse" : "normal"}>
        {content}
        {content}
      </div>
    </div>
  );
}
