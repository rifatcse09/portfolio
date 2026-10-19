import { Lock } from "lucide-react";
import { cn } from "@/lib/utils";

interface BrowserFrameProps {
  src: string;
  alt: string;
  url?: string;
  className?: string;
  imageClassName?: string;
  loading?: "lazy" | "eager";
  onError?: () => void;
}

const displayUrl = (url?: string) => {
  if (!url) return "localhost";
  try {
    const parsed = new URL(url);
    const path = parsed.pathname === "/" ? "" : parsed.pathname;
    return `${parsed.host}${path}`;
  } catch {
    return url.replace(/^https?:\/\//, "");
  }
};

const BrowserFrame = ({
  src,
  alt,
  url,
  className,
  imageClassName,
  loading = "lazy",
  onError,
}: BrowserFrameProps) => {
  return (
    <div
      className={cn(
        "rounded-2xl bg-[radial-gradient(ellipse_at_top,hsl(var(--portfolio-primary)/0.22),transparent_55%),linear-gradient(160deg,hsl(220_18%_92%),hsl(222_16%_84%))] p-3 sm:p-4",
        "dark:bg-[radial-gradient(ellipse_at_top,hsl(var(--portfolio-primary)/0.28),transparent_50%),linear-gradient(160deg,hsl(222_28%_16%),hsl(222_32%_8%))]",
        className
      )}
    >
      <div className="overflow-hidden rounded-xl border border-black/10 bg-[#eceff3] shadow-[0_18px_40px_-24px_rgba(0,0,0,0.55)] dark:border-white/10 dark:bg-[#2a2d34]">
        <div className="flex items-center gap-3 border-b border-black/10 px-3 py-2 dark:border-white/10">
          <span className="flex shrink-0 gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </span>
          <div className="flex min-w-0 flex-1 items-center gap-1.5 rounded-md bg-white/80 px-2.5 py-1 text-[11px] text-slate-500 dark:bg-black/35 dark:text-slate-300">
            <Lock className="h-3 w-3 shrink-0 opacity-70" />
            <span className="truncate">{displayUrl(url)}</span>
          </div>
        </div>
        <img
          src={src}
          alt={alt}
          loading={loading}
          onError={onError}
          className={cn("block w-full bg-white object-cover object-top", imageClassName)}
        />
      </div>
    </div>
  );
};

export default BrowserFrame;
