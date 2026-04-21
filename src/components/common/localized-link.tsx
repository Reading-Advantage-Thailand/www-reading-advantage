"use client";

import Link from "next/link";
import { useCurrentLocale } from "@/locales/client";
import { ComponentProps } from "react";

type LocalizedLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
};

export function LocalizedLink({ href, children, ...props }: LocalizedLinkProps) {
  const locale = useCurrentLocale();

  const isAbsolute = /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(href);
  const alreadyLocalized = href.startsWith(`/${locale}/`) || href === `/${locale}`;
  const localizedHref = isAbsolute || alreadyLocalized ? href : `/${locale}${href}`;

  return (
    <Link href={localizedHref} {...props}>
      {children}
    </Link>
  );
}
