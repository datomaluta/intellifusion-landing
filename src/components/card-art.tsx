import type { ReactNode } from "react";
import { cn } from "./ui";

type Rect = { x: number; y: number; width: number; height: number };

type CardArtProps = {
  /** Size of the exported artwork, including the drop-shadow padding Figma adds around it. */
  canvas: { width: number; height: number };
  /** The glass panels inside the artwork, in artwork pixels. The first one sets the column width. */
  panels: Rect[];
  className?: string;
  children: ReactNode;
};

/**
 * Places an exported Figma card so its visible frame lines up with the layout column,
 * and recreates the card's "background blur" behind it. Figma exports that blur as an
 * HTML backdrop-filter, which browsers ignore inside <img>, so without this the page's
 * grid lines would show straight through the translucent card.
 */
export function CardArt({ canvas, panels, className, children }: CardArtProps) {
  const card = panels[0];
  const bottom = Math.max(...panels.map((panel) => panel.y + panel.height));
  const pct = (value: number, of: number) => `${(value / of) * 100}%`;

  return (
    <div
      className={cn("relative max-w-none", className)}
      style={{
        // Margin percentages resolve against the column width, which equals the card width.
        width: pct(canvas.width, card.width),
        marginLeft: `-${pct(card.x, card.width)}`,
        marginTop: `-${pct(card.y, card.width)}`,
        marginBottom: `-${pct(canvas.height - bottom, card.width)}`,
      }}
    >
      {panels.map((panel, index) => (
        <span
          key={index}
          aria-hidden="true"
          className="absolute rounded-lg backdrop-blur-[15px]"
          style={{
            left: pct(panel.x, canvas.width),
            top: pct(panel.y, canvas.height),
            width: pct(panel.width, canvas.width),
            height: pct(panel.height, canvas.height),
          }}
        />
      ))}
      <div className="relative [&>img]:block [&>img]:h-auto [&>img]:w-full">{children}</div>
    </div>
  );
}
