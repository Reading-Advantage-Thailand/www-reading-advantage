import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";

export interface HeroProps {
  title: string | ReactNode;
  description: string | ReactNode;
  ctaButton?: {
    text: string;
    href: string;
    variant?: "primary" | "secondary" | "white" | "outline";
    icon?: ReactNode;
  };
  badge?: {
    text: string;
    icon?: ReactNode;
    variant?: "amber" | "sky" | "green" | "rose" | "yellow" | "custom";
    customColor?: string;
  };
  floatingImage?: {
    src: string;
    alt: string;
  };
  height?: "tall" | "medium";
  alignment?: "left" | "center";
  customGradient?: string;
  className?: string;
}

const getBadgeVariantStyles = (
  variant?: "amber" | "sky" | "green" | "rose" | "yellow" | "custom",
  customColor?: string,
): string => {
  if (variant === "custom" && customColor) {
    return customColor;
  }

  switch (variant) {
    case "amber":
      return "bg-amber-100 text-amber-800 border-amber-200";
    case "sky":
      return "bg-sky-100 text-sky-800 border-sky-200";
    case "green":
      return "bg-green-100 text-green-800 border-green-200";
    case "rose":
      return "bg-rose-100 text-rose-800 border-rose-200";
    case "yellow":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    default:
      return "bg-amber-100 text-amber-800 border-amber-200";
  }
};

const getHeightStyles = (height: NonNullable<HeroProps["height"]>): string => {
  return height === "tall" ? "min-h-[85vh]" : "min-h-[70vh]";
};

const getAlignmentStyles = (
  alignment: NonNullable<HeroProps["alignment"]>,
): string => {
  return alignment === "center" ? "text-center mx-auto" : "text-left";
};

export default function HeroSection({
  title,
  description,
  ctaButton,
  badge,
  floatingImage,
  height = "medium",
  alignment = "center",
  customGradient,
  className = "",
}: HeroProps) {
  const gradientStyles = customGradient || "bg-warm-cream";
  const heightStyles = getHeightStyles(height);
  const alignmentStyles = getAlignmentStyles(alignment);

  const imageSize =
    height === "tall"
      ? { width: 600, rounded: "rounded-[40px]" }
      : { width: 500, rounded: "rounded-[32px]" };

  return (
    <section
      className={`relative overflow-hidden ${gradientStyles} text-black pt-24 ${heightStyles} ${className}`}
    >
      <div className="container relative z-20 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <div className={`relative z-20 max-w-4xl ${alignmentStyles}`}>
          {/* Badge */}
          {badge && (
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm mb-6 ${getBadgeVariantStyles(badge.variant || "amber", badge.customColor)}`}
            >
              {badge.icon && <span className="w-5 h-5">{badge.icon}</span>}
              <span
                className="text-sm font-semibold font-roobert"
                style={{
                  fontFamily: "Roobert, Arial, sans-serif",
                  fontFeatureSettings: '"ss03", "ss10", "ss11", "ss12"',
                  letterSpacing: "1.08px",
                  textTransform: "uppercase",
                }}
              >
                {badge.text}
              </span>
            </div>
          )}

          {/* Title */}
          {typeof title === "string" ? (
            <h1
              className="text-5xl md:text-6xl lg:text-8xl font-bold mb-6 leading-tight font-roobert"
              style={{
                fontFamily: "Roobert, Arial, sans-serif",
                fontFeatureSettings: '"ss01", "ss03", "ss10", "ss11", "ss12"',
                letterSpacing: "-3.2px",
              }}
            >
              {title}
            </h1>
          ) : (
            <div className="mb-6">{title}</div>
          )}

          {/* Description */}
          {typeof description === "string" ? (
            <p
              className="text-xl md:text-2xl lg:text-3xl leading-relaxed mb-8 text-warm-silver font-roobert"
              style={{
                fontFamily: "Roobert, Arial, sans-serif",
                fontFeatureSettings: '"ss03", "ss10", "ss11", "ss12"',
              }}
            >
              {description}
            </p>
          ) : (
            <div
              className="text-xl md:text-2xl lg:text-3xl leading-relaxed mb-8 text-warm-silver font-roobert"
              style={{
                fontFamily: "Roobert, Arial, sans-serif",
                fontFeatureSettings: '"ss03", "ss10", "ss11", "ss12"',
              }}
            >
              {description}
            </div>
          )}

          {/* CTA Button */}
          {ctaButton && (
            <Button
              variant={
                ctaButton.variant === "white"
                  ? "clay-white"
                  : ctaButton.variant === "outline"
                    ? "clay-ghost"
                    : "clay"
              }
              size="lg"
              asChild
            >
              <Link href={ctaButton.href}>
                {ctaButton.text}
                {ctaButton.icon && (
                  <span className="w-5 h-5">{ctaButton.icon}</span>
                )}
              </Link>
            </Button>
          )}
        </div>

        {/* Floating Image - Only shown when alignment="left" and on xl screens */}
        {floatingImage && alignment === "left" && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden xl:block z-10 pointer-events-none">
            <div
              className={`relative ${imageSize.rounded}`}
              style={{ width: `${imageSize.width}px` }}
            >
              <div
                className={`relative overflow-hidden z-10 ${imageSize.rounded}`}
              >
                <Image
                  src={floatingImage.src}
                  alt={floatingImage.alt}
                  width={imageSize.width}
                  height={imageSize.width}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
