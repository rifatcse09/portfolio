import {
  ShoppingCart,
  Building2,
  GraduationCap,
  Plane,
  MessageSquare,
  Smartphone,
  Store,
  Database,
} from "lucide-react";

const nodes = [
  { label: "E-Commerce", Icon: ShoppingCart, angle: 0 },
  { label: "ERP", Icon: Building2, angle: 45 },
  { label: "SaaS", Icon: Database, angle: 90 },
  { label: "CRM & POS", Icon: Store, angle: 135 },
  { label: "EdTech", Icon: GraduationCap, angle: 180 },
  { label: "OTA / Travel", Icon: Plane, angle: 225 },
  { label: "Chat Apps", Icon: MessageSquare, angle: 270 },
  { label: "Mobile & Web", Icon: Smartphone, angle: 315 },
];

const CustomSoftwareVisual = () => {
  const radius = 118;

  return (
    <div className="relative flex aspect-square w-full max-w-md mx-auto items-center justify-center p-4">
      {/* Background glow */}
      <div className="absolute inset-8 rounded-full bg-gradient-to-br from-portfolio-primary/15 via-portfolio-secondary/10 to-portfolio-cool/15 blur-2xl" />

      {/* Orbit ring */}
      <div className="absolute inset-[12%] rounded-full border border-dashed border-portfolio-primary/20" />

      {/* Connector lines */}
      <svg className="absolute inset-0 h-full w-full" aria-hidden>
        {nodes.map(({ angle }) => {
          const rad = (angle * Math.PI) / 180;
          const cx = 50;
          const cy = 50;
          const x2 = cx + (radius / 2.8) * Math.cos(rad);
          const y2 = cy + (radius / 2.8) * Math.sin(rad);
          return (
            <line
              key={angle}
              x1={`${cx}%`}
              y1={`${cy}%`}
              x2={`${x2}%`}
              y2={`${y2}%`}
              stroke="hsl(var(--portfolio-primary) / 0.25)"
              strokeWidth="1.5"
            />
          );
        })}
      </svg>

      {/* Center hub */}
      <div className="relative z-10 flex h-24 w-24 flex-col items-center justify-center rounded-full border-2 border-portfolio-primary/40 bg-gradient-to-br from-portfolio-primary to-portfolio-secondary shadow-lg shadow-portfolio-primary/25 md:h-28 md:w-28">
        <span className="text-[10px] font-bold uppercase tracking-wider text-white/90 md:text-xs">
          Custom
        </span>
        <span className="text-sm font-bold text-white md:text-base">Software</span>
      </div>

      {/* Outer nodes */}
      {nodes.map(({ label, Icon, angle }) => {
        const rad = (angle * Math.PI) / 180;
        const x = 50 + (radius / 2.05) * Math.cos(rad);
        const y = 50 + (radius / 2.05) * Math.sin(rad);
        return (
          <div
            key={label}
            className="absolute z-10 flex w-[4.5rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1 rounded-lg border border-border/60 bg-card px-2 py-2 shadow-sm md:w-[5.25rem]"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <Icon className="h-4 w-4 text-portfolio-primary md:h-[1.125rem] md:w-[1.125rem]" />
            <span className="text-center text-[9px] font-semibold leading-tight text-foreground md:text-[10px]">
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default CustomSoftwareVisual;
