import { cn } from "@lib/utils";

export default function ArrowBack({className}: {className?: string}) {
  return (
    <svg
    className={cn('w-6 h-6',className)}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g opacity="0.8">
        <path
          d="M8.7537 18.2461L4.62502 14.1174C3.45345 12.9459 3.45344 11.0464 4.62501 9.87479L8.7537 5.74609M4.2537 11.9961L20.2537 11.9961"
          stroke="#F8F8F8"
          strokeOpacity="0.7"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
