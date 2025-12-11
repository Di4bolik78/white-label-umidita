import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface DecorativeStripesProps {
  count?: number;
  className?: string;
}

const DecorativeStripes = ({ count = 8, className = "" }: DecorativeStripesProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div ref={ref} className={`flex gap-1 ${className}`}>
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          className={`w-1 h-5 md:h-6 bg-secondary origin-bottom transition-transform duration-500 ease-out ${
            isVisible ? "-skew-x-12" : "skew-x-0"
          }`}
          style={{ transitionDelay: `${i * 50}ms` }}
        />
      ))}
    </div>
  );
};

export default DecorativeStripes;
