import { ReactNode } from "react";
import { Header } from "./Header";
import { BottomNav } from "./BottomNav";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
  showFooter?: boolean;
}

export function Layout({ children, showFooter = true }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background lg:bg-neutral-200 lg:flex lg:items-start lg:justify-center lg:py-8">
      <div className="lg:w-[420px] lg:min-h-[calc(100vh-64px)] lg:bg-background lg:rounded-3xl lg:shadow-2xl lg:border lg:border-neutral-300 lg:overflow-hidden lg:relative">
        <Header />
        <main className="pt-14 pb-20 sm:pb-8 flex-1">{children}</main>
        {showFooter && <Footer />}
        <BottomNav />
      </div>
    </div>
  );
}
