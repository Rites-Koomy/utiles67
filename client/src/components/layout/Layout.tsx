import { ReactNode } from "react";
import { Header } from "./Header";
import { BottomNav } from "./BottomNav";
import { Footer } from "./Footer";
import { CookieConsent } from "../CookieConsent";

interface LayoutProps {
  children: ReactNode;
  showFooter?: boolean;
}

export function Layout({ children, showFooter = true }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background lg:bg-gradient-to-br lg:from-neutral-100 lg:to-neutral-200 lg:flex lg:items-start lg:justify-center lg:py-8 lg:px-4">
      <div className="lg:relative">
        <div className="hidden lg:block lg:absolute lg:-inset-3 lg:bg-neutral-900 lg:rounded-[3rem] lg:shadow-2xl" />
        <div className="hidden lg:block lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2 lg:w-32 lg:h-7 lg:bg-neutral-900 lg:rounded-b-2xl lg:z-50">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-neutral-700 rounded-full" />
        </div>
        <div className="hidden lg:block lg:absolute lg:bottom-1 lg:left-1/2 lg:-translate-x-1/2 lg:w-28 lg:h-1 lg:bg-neutral-700 lg:rounded-full lg:z-50" />
        <div className="lg:w-[375px] lg:h-[812px] lg:bg-background lg:rounded-[2.5rem] lg:overflow-hidden lg:relative lg:shadow-inner lg:border-4 lg:border-neutral-900">
          <div className="lg:h-full lg:overflow-y-auto lg:overflow-x-hidden lg:w-[375px]">
            <Header />
            <main className="pt-14 pb-20 lg:pb-20 flex-1">{children}</main>
            {showFooter && <Footer />}
            <BottomNav />
            <CookieConsent />
          </div>
        </div>
      </div>
    </div>
  );
}
