import { SkeletonProps } from "./types";

const Skeleton = ({
  className = "",
  variant = "rectangular",
  width,
  height,
  animation = "pulse",
}: SkeletonProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "text":
        return "rounded-[4px] h-4";
      case "circular":
        return "rounded-full";
      case "rectangular":
      default:
        return "rounded-[12px]";
    }
  };

  const getAnimationClasses = () => {
    switch (animation) {
      case "pulse":
        return "animate-pulse";
      case "wave":
        return "animate-shimmer bg-gradient-to-r from-[#27272E] via-[#2f2f35] to-[#27272E] bg-[length:200%_100%]";
      case "none":
      default:
        return "";
    }
  };

  const style: React.CSSProperties = {
    width: width || "100%",
    height: height || "100%",
  };

  return (
    <div
      className={`bg-[#27272E] ${getVariantClasses()} ${getAnimationClasses()} ${className}`}
      style={style}
    />
  );
};

export default Skeleton;
