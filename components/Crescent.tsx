import { useId } from "react";

type Props = {
  className?: string;
  /** "badge" — cream crescent on a terracotta disc. "mark" — crescent alone in currentColor. */
  variant?: "badge" | "mark";
};

export default function Crescent({ className, variant = "badge" }: Props) {
  const id = useId();
  const maskId = `crescent-${id}`;

  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <mask id={maskId}>
        <circle cx="47" cy="50" r="23" fill="white" />
        <circle cx="61" cy="48" r="20" fill="black" />
      </mask>
      {variant === "badge" ? (
        <>
          <circle cx="50" cy="50" r="50" fill="var(--color-accent)" />
          <rect
            width="100"
            height="100"
            fill="var(--color-cream)"
            mask={`url(#${maskId})`}
          />
        </>
      ) : (
        <rect
          width="100"
          height="100"
          fill="currentColor"
          mask={`url(#${maskId})`}
        />
      )}
    </svg>
  );
}
