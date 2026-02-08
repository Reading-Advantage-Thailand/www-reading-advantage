import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export interface HeroProps {
  title: string | ReactNode;
  description: string | ReactNode;
  ctaButton: {
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
    sizes?: string;
  };
  height?: "tall" | "medium";
  alignment?: "left" | "center";
  customGradient?: string;
  showDecorations?: boolean;
  className?: string;
}

const getButtonVariantStyles = (
  variant: HeroProps["ctaButton"]["variant"],
): string => {
  switch (variant) {
    case "primary":
      return "bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 shadow-2xl hover:shadow-amber-500/30";
    case "secondary":
      return "bg-white/10 backdrop-blur text-white border border-white/20 hover:bg-white/20";
    case "white":
      return "bg-white text-sky-900 hover:bg-sky-50 shadow-lg hover:shadow-xl";
    case "outline":
      return "border-2 border-sky-500 text-sky-900 hover:bg-sky-50";
    default:
      return "bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 shadow-2xl hover:shadow-amber-500/30";
  }
};

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
  showDecorations = true,
  className = "",
}: HeroProps) {
  const gradientStyles =
    customGradient || "bg-gradient-to-br from-amber-50 via-orange-50 to-sky-50";
  const heightStyles = getHeightStyles(height);
  const alignmentStyles = getAlignmentStyles(alignment);

  const imageSize =
    height === "tall"
      ? { width: 600, rounded: "rounded-[40px]" }
      : { width: 500, rounded: "rounded-[32px]" };

  return (
    <section
      className={`relative overflow-hidden ${gradientStyles} text-slate-900 pt-24 ${heightStyles} ${className}`}
    >
      {/* Decorative background elements */}
      {showDecorations && (
        <>
          <div
            className="absolute top-20 left-10 w-20 h-20 bg-amber-300/40 rounded-full blur-[100px] animate-pulse-slow"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-20 right-10 w-32 h-32 bg-sky-300/30 rounded-full blur-[120px]"
            aria-hidden="true"
          />
        </>
      )}

      <div className="container relative z-20 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <div
          className={`relative z-20 max-w-4xl ${alignmentStyles} animate-in fade-in slide-in-from-bottom-8 duration-700`}
        >
          {/* Badge */}
          {badge && (
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm mb-6 animate-in fade-in zoom-in-95 duration-500 ${getBadgeVariantStyles(badge.variant || "amber", badge.customColor)}`}
            >
              {badge.icon && <span className="w-5 h-5">{badge.icon}</span>}
              <span className="text-sm font-bold">{badge.text}</span>
            </div>
          )}

          {/* Title */}
          {typeof title === "string" ? (
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-6 leading-tight">
              {title}
            </h1>
          ) : (
            <div className="mb-6">{title}</div>
          )}

          {/* Description */}
          {typeof description === "string" ? (
            <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed mb-8 text-slate-600">
              {description}
            </p>
          ) : (
            <div className="text-xl md:text-2xl lg:text-3xl leading-relaxed mb-8 text-slate-600">
              {description}
            </div>
          )}

          {/* CTA Button */}
          <Link
            href={ctaButton.href}
            className={`inline-flex items-center gap-2 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${getButtonVariantStyles(ctaButton.variant)} animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200`}
          >
            {ctaButton.text}
            {ctaButton.icon && (
              <span className="w-5 h-5">{ctaButton.icon}</span>
            )}
          </Link>
        </div>

        {/* Floating Image - Only shown when alignment="left" and on xl screens */}
        {floatingImage && alignment === "left" && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden xl:block z-10 animate-in fade-in slide-in-from-right-8 duration-700 delay-300 pointer-events-none">
            <div
              className={`relative ${imageSize.rounded}`}
              style={{ width: `${imageSize.width}px` }}
            >
              {/* Background blur */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-amber-400/20 to-sky-400/20 blur-2xl z-0 ${imageSize.rounded}`}
              />
              {/* Image and fade: overlay sized by the image's natural height */}
              <div className={`relative overflow-hidden z-10 ${imageSize.rounded}`}>
                <Image
                  src={floatingImage.src}
                  alt={floatingImage.alt}
                  width={imageSize.width}
                  height={0}
                  sizes={
                    floatingImage.sizes ||
                    `(max-width: 1280px) 0px, ${imageSize.width}px`
                  }
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent z-20" />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
