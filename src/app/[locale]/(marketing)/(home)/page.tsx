import Image from "next/image";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  Mail,
  Sparkles,
  Target,
  Zap,
  Users,
} from "lucide-react";
import { getScopedI18n } from "@/locales/server";
import HeroSection from "@/components/marketing/hero-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default async function Home() {
  const t = await getScopedI18n("pages.home");
  const benefits = [
    t("flagship.benefits.0"),
    t("flagship.benefits.1"),
    t("flagship.benefits.2"),
    t("flagship.benefits.3"),
  ];

  // Create split title for gradient effect
  const titleParts = t("hero.title").split(" ");
  const firstLine = titleParts.slice(0, 3).join(" ");
  const secondLine = titleParts.slice(3).join(" ");

  const heroTitle = (
    <h1
      className="text-[80px] font-semibold leading-tight "
      style={{
        letterSpacing: "-3.2px",
      }}
    >
      <span className="block">{firstLine}</span>
      <span className="block bg-gradient-to-r from-sky-300 to-sky-500 bg-clip-text text-transparent">
        {secondLine}
      </span>
    </h1>
  );

  const heroDescription = (
    <p
      className="text-[20px] font-normal leading-[1.6] text-slate-400 "
      style={{
      }}
    >
      {t("hero.description")}
    </p>
  );

  return (
    <main className="overflow-x-hidden bg-sky-50">
      {/* Hero - Using HeroSection component with Clay styling */}
      <HeroSection
        title={heroTitle}
        description={heroDescription}
        height="tall"
        alignment="left"
        badge={{
          text: t("hero.cta"),
          icon: <Sparkles className="w-4 h-4" />,
          variant: "sky",
        }}
        ctaButton={{
          text: t("hero.cta"),
          href: "/products",
          variant: "primary",
          icon: <ArrowRight className="w-6 h-6" />,
        }}
        floatingImage={{
          src: "/images/students-at-board.png",
          alt: "Students gathered at interactive board",
        }}
        customGradient="bg-sky-50"
        className="pt-20"
      />

      {/* Mission - Full width, bold typography */}
      <section className="relative py-24 bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-8">
              <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-sky-400 rounded-full mx-auto" />
            </div>
            <h2
              className="text-[44px] font-semibold mb-8 leading-tight  text-black"
              style={{
                letterSpacing: "-0.88px",
              }}
            >
              {t("mission.title")}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-sky-300 to-sky-400 rounded-full mx-auto mb-12" />
            <p
              className="text-[18px] leading-[1.6] text-slate-400  max-w-3xl mx-auto"
              style={{
              }}
            >
              {t("mission.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Overview - Asymmetric layout with image */}
      <section className="relative py-24 bg-gradient-to-br from-sky-600 via-orange-600 to-amber-700 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <h2
                className="text-[44px] font-semibold mb-8 leading-tight  text-white"
                style={{
                  letterSpacing: "-0.88px",
                }}
              >
                {t("overview.title")}
              </h2>
              <p
                className="text-[18px] leading-[1.6] text-amber-50 mb-12 "
                style={{
                }}
              >
                {t("overview.description")}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="white" asChild>
                  <Link href="/contact">
                    {t("overview.partnerCta")}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative">
                <div
                  className="absolute inset-0 bg-white/20 rounded-3xl blur-3xl -translate-y-4 translate-x-4"
                  aria-hidden="true"
                />
                <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
                  <div className="grid grid-cols-1 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white mb-2 ">
                        10,000+
                      </div>
                      <div className="text-amber-100 text-lg ">
                        {t("overview.stats.articles")}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2 ">
                        {t("overview.stats.title")}
                      </div>
                      <div className="text-amber-100 text-sm ">
                        {t("overview.stats.research")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship - Diagonal split layout */}
      <section className="relative py-24 bg-sky-50" id="products">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2
                className="text-[44px] font-semibold mb-6  text-black"
                style={{
                  letterSpacing: "-0.88px",
                }}
              >
                <span className="block">
                  {t("flagship.title").split(" ").slice(0, 2).join(" ")}
                </span>
                <span className="block bg-gradient-to-r from-sky-400 to-sky-500 bg-clip-text text-transparent">
                  {t("flagship.title").split(" ").slice(2).join(" ")}
                </span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-0 rounded-[40px] overflow-hidden shadow-xl bg-white">
              {/* Benefits side */}
              <div className="p-12 md:p-16 bg-gradient-to-br from-white to-amber-50">
                <h3
                  className="text-[32px] font-semibold mb-12  text-amber-800"
                  style={{
                    letterSpacing: "-0.64px",
                  }}
                >
                  {t("flagship.productTitle")}
                </h3>

                <div className="space-y-6">
                  {benefits.map((benefit, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-6 rounded-2xl hover:bg-white/80 transition-all duration-300"
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Check className="w-7 h-7 text-white" />
                      </div>
                      <p
                        className="text-[18px] leading-[1.6] text-slate-700 "
                        style={{
                        }}
                      >
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>

                <Button variant="default" className="mt-12 w-full" asChild>
                  <Link href="/products/reading-advantage">
                    {t("flagship.cta")}
                    <ArrowRight className="w-6 h-6" />
                  </Link>
                </Button>
              </div>

              {/* Image side with background matching card */}
              <div className="relative min-h-[500px] bg-gradient-to-br from-white to-amber-50 flex items-center justify-center p-8">
                <Image
                  src="/images/students-with-app.png"
                  alt="Students using Reading Advantage app on tablets and computers in classroom"
                  width={600}
                  height={500}
                  className="relative z-10 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation - Card-based features */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900/50 via-amber-900/50 to-orange-900/50" />
        <div
          className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-[100px]"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-[80px]"
          aria-hidden="true"
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2
              className="text-[44px] font-semibold mb-6  text-white"
              style={{
                letterSpacing: "-0.88px",
              }}
            >
              {t("innovation.title")}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Zap className="w-10 h-10" />,
                title: t("innovation.features.0.title"),
                description: t("innovation.features.0.description"),
              },
              {
                icon: <Target className="w-10 h-10" />,
                title: t("innovation.features.1.title"),
                description: t("innovation.features.1.description"),
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: t("innovation.features.2.title"),
                description: t("innovation.features.2.description"),
              },
            ].map((feature) => (
              <Card
                key={feature.title}
                className="bg-white/10 border-white/10 backdrop-blur-sm hover:bg-white/15 hover:-translate-y-3"
              >
                <CardContent className="p-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-sky-400 to-amber-400 rounded-3xl flex items-center justify-center mb-8 shadow-2xl text-white">
                    {feature.icon}
                  </div>
                  <h3
                    className="text-[20px] font-semibold mb-6  text-white"
                    style={{
                      letterSpacing: "-0.4px",
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-[18px] leading-[1.6] text-slate-300 "
                    style={{
                    }}
                  >
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Big 4 Quality Protocol - New Section */}
      <section className="relative py-24 bg-sky-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div
                className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 "
                style={{
                  letterSpacing: "1.08px",
                  textTransform: "uppercase",
                }}
              >
                <Sparkles className="w-4 h-4" />
                {t("qualityProtocol.badge")}
              </div>
              <h2
                className="text-[44px] font-semibold mb-6  text-black"
                style={{
                  letterSpacing: "-0.88px",
                }}
              >
                {t("qualityProtocol.title")}
              </h2>
              <p
                className="text-[18px] text-slate-400 max-w-3xl mx-auto leading-[1.6] "
                style={{
                }}
              >
                {t("qualityProtocol.description")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: t("qualityProtocol.features.0.title"),
                  description: t("qualityProtocol.features.0.description"),
                },
                {
                  title: t("qualityProtocol.features.1.title"),
                  description: t("qualityProtocol.features.1.description"),
                },
                {
                  title: t("qualityProtocol.features.2.title"),
                  description: t("qualityProtocol.features.2.description"),
                },
                {
                  title: t("qualityProtocol.features.3.title"),
                  description: t("qualityProtocol.features.3.description"),
                },
              ].map((item) => (
                <Card
                  key={item.title}
                  className="hover:-translate-y-2 hover:border-amber-300"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-amber-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3
                      className="text-[20px] font-semibold mb-4  text-black"
                      style={{
                        letterSpacing: "-0.4px",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-[18px] leading-[1.6] text-slate-600 "
                      style={{
                      }}
                    >
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Target Market - New Section */}
      <section className="relative py-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900/50 via-amber-900/50 to-slate-900" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2
                className="text-[44px] font-semibold mb-6  text-white"
                style={{
                  letterSpacing: "-0.88px",
                }}
              >
                {t("thaiSchools.title")}
              </h2>
              <p
                className="text-[18px] text-slate-300 max-w-3xl mx-auto leading-[1.6] "
                style={{
                }}
              >
                {t("thaiSchools.description")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: t("thaiSchools.features.0.title"),
                  description: t("thaiSchools.features.0.description"),
                },
                {
                  title: t("thaiSchools.features.1.title"),
                  description: t("thaiSchools.features.1.description"),
                },
                {
                  title: t("thaiSchools.features.2.title"),
                  description: t("thaiSchools.features.2.description"),
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-sky-400 rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3
                    className="text-[20px] font-semibold mb-4  text-white"
                    style={{
                      letterSpacing: "-0.4px",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-[18px] leading-[1.6] text-slate-300 "
                    style={{
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl px-8 py-6">
                <Sparkles className="w-8 h-8 text-amber-400" />
                <div className="text-left">
                  <div
                    className="text-[18px] text-slate-300 "
                    style={{
                    }}
                  >
                    {t("thaiSchools.poweredBy")}
                  </div>
                  <div
                    className="text-[20px] font-semibold text-white "
                    style={{
                      letterSpacing: "-0.4px",
                    }}
                  >
                    {t("thaiSchools.technology")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact - Final bold CTA */}
      <section className="relative py-24 bg-gradient-to-br from-amber-500 via-orange-500 to-sky-600 overflow-hidden">
        <div
          className="absolute top-20 left-20 w-[500px] h-[500px] bg-amber-400/30 rounded-full blur-[150px]"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-sky-400/30 rounded-full blur-[120px]"
          aria-hidden="true"
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2
              className="text-[60px] font-semibold mb-8 leading-tight  text-white"
              style={{
                letterSpacing: "-2.4px",
              }}
            >
              {t("impact.title")}
            </h2>
            <p
              className="text-[24px] text-amber-50 leading-relaxed mb-16 max-w-3xl mx-auto "
              style={{
              }}
            >
              {t("impact.description")}
            </p>

            <Button variant="white" size="lg" asChild>
              <Link href="mailto:support@reading-advantage.com?subject=Demo Request - Reading Advantage Thailand&body=Hi team,%0A%0AI'm interested in scheduling a demo of your educational platforms. Could you please provide more information about your programs and available demo times?%0A%0AI'm particularly interested in:%0A- [Please specify which program(s) you're interested in]%0A- [Your school/organization name if applicable]%0A- [Preferred demo format: in-person, virtual, or self-guided]%0A%0ALooking forward to hearing from you!%0A%0ABest regards">
                <Mail className="w-8 h-8" />
                {t("impact.cta")}
              </Link>
            </Button>

            {/* Trust badges */}
            <div className="mt-20 flex flex-wrap justify-center gap-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2 ">
                  10,000+
                </div>
                <div
                  className="text-amber-100 text-lg "
                  style={{
                  }}
                >
                  {t("impact.trustBadges.articles")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2 ">
                  12
                </div>
                <div
                  className="text-amber-100 text-lg "
                  style={{
                  }}
                >
                  {t("impact.trustBadges.cefrLevels")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2 ">
                  {t("impact.trustBadges.big4")}
                </div>
                <div
                  className="text-amber-100 text-lg "
                  style={{
                  }}
                >
                  {t("impact.trustBadges.qualityProtocol")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
