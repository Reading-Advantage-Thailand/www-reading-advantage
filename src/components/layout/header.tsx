'use client';

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { NavItem } from "@/config/navigation";
import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { useAuth } from "@/contexts/auth-context";
import Image from 'next/image';
import { useScopedI18n } from "@/locales/client";
import { LocaleSwitcher } from "@/switcher/locale-switcher";

export function Header() {
  const h = useScopedI18n("components.common.header");
  const n = useScopedI18n('components.common.navigation');

  const navigation: NavItem[] = [
    {
      title: n("home"),
      href: "/"
    },
    {
      title: n("products"),
      href: "/products"
    },
    {
      title: n("features"),
      href: "/features"
    },
    {
      title: n("pricing"),
      href: "/pricing"
    },
    {
      title: n("blog"),
      href: "/blog"
    },
    {
      title: n("about"),
      href: "/about"
    },
    {
      title: n("contact"),
      href: "/contact"
    }
  ];

  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
      router.push('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const renderAuthButtons = (isMobile = false) => {
    if (user) {
      return (
        <>
          <div className={isMobile ? "border-t border-sky-400 pt-4 mt-4" : "hidden lg:flex items-center space-x-4"}>
            <span className="text-sky-50">
              {user.email}
            </span>
            <Button
              variant="ghost"
              onClick={handleSignOut}
              className="text-sky-50 hover:text-white hover:bg-sky-600 transition-colors"
            >
              {h("signOut")}
            </Button>
          </div>
        </>
      );
    }

    return (
      <div className={isMobile ? "border-t border-sky-400 pt-4 mt-4" : "hidden lg:flex items-center space-x-4"}>
        <Link
          href="/login"
          className="text-sky-50 hover:text-white transition-colors"
        >
          {h("login")}
        </Link>
        <Link
          href="/signup"
          className="bg-sky-800 text-sky-50 px-4 py-2 rounded-lg hover:bg-sky-900 transition-colors"
        >
          {h("signUp")}
        </Link>
      </div>
    );
  };

  return (
    <header className="bg-sky-500 text-sky-50 header-shadow fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Mobile menu button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-sky-50 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-400">
                <Menu className="h-6 w-6" />
                <span className="sr-only">{h("openMenu")}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-sky-500 text-sky-50 border-sky-400">
              <SheetHeader>
                <SheetTitle className="text-sky-50">{h("navigationMenu")}</SheetTitle>
                <SheetDescription className="text-sky-200">
                  {h("navigationDescription")}
                </SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                {navigation.map((link) => {
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`text-lg px-3 py-2 rounded-lg hover:bg-sky-600 transition-colors ${pathname === link.href ? 'bg-sky-600' : ''
                        }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.title}
                    </Link>
                  );
                })}
                {renderAuthButtons(true)}
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.jpg"
                alt="Reading Advantage Thailand Logo"
                width={48}
                height={48}
                className="h-12 w-auto rounded-md"
                priority
              />
            </Link>
          </div>

          {/* Main Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((link) => {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sky-50 hover:text-white transition-colors relative py-2 ${pathname === link.href ? 'font-medium' : ''
                    }`}
                >
                  {link.title}
                  {pathname === link.href && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-6">
            {/* Language Selector */}
            <LocaleSwitcher />

            {/* Auth buttons */}
            {renderAuthButtons()}
          </div>
        </div>
      </div>
    </header>
  );
}
