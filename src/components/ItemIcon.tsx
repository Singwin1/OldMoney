import type { ItemId } from "../data/items";

type ItemIconProps = {
  id: ItemId;
  className?: string;
};

export default function ItemIcon({ id, className }: ItemIconProps) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (id) {
    case "tricko":
      return (
        <svg {...common}>
          <path d="M8 3.5 4 7l2.3 2.3L8 7.8V20h8V7.8l1.7 1.5L20 7l-4-3.5-2 1.8h-4l-2-1.8z" />
        </svg>
      );
    case "kratasy":
      return (
        <svg {...common}>
          <path d="M5 4h14l.6 7.5-1.1 8h-3l-.8-6.2-.8 6.2h-3l-.8-6.2-.8 6.2h-3l-1.1-8L5 4z" />
        </svg>
      );
    case "kalhoty":
      return (
        <svg {...common}>
          <path d="M6.2 3.5h11.6l.7 17h-3.4l-.8-12-.8 12h-3l-.8-12-.8 12H5.5l.7-17z" />
        </svg>
      );
    case "boty":
      return (
        <svg {...common}>
          <path d="M4 16.2c0-1.8 1.3-2.8 2.7-3.4l5.7-3c1-1.2 2.4-1.6 3.8-1.2l2.7.9c.9.3 1.4 1.2 1.1 2.1-.3.9-1.2 1.4-2.1 1.2-1.3-.3-2.4.4-2.5 1.6 0 .9.5 1.5 1.4 1.6H19.5c.6 0 1 .5 1 1v.6c0 .6-.4 1-1 1H5a1 1 0 0 1-1-1v-1.4z" />
        </svg>
      );
    case "nahrdelnik":
      return (
        <svg {...common}>
          <path d="M5 4.5c0 6.2 3.1 10.5 7 10.5s7-4.3 7-10.5" />
          <path d="M10.3 14.5 12 18.5l1.7-4" />
        </svg>
      );
    case "prsten":
      return (
        <svg {...common}>
          <circle cx="12" cy="15" r="5.5" />
          <path d="M8.8 9.6 12 4.5l3.2 5.1-3.2 2.9-3.2-2.9z" />
        </svg>
      );
    default:
      return null;
  }
}
