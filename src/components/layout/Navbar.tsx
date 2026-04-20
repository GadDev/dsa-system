"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Brain, LayoutDashboard } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#1F2933] bg-[#0B0F14]/80 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link href="/dashboard" className="flex items-center gap-2.5 group">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-500/20 ring-1 ring-indigo-500/30 transition-all group-hover:bg-indigo-500/30 group-hover:ring-indigo-500/50">
            <Brain className="h-3.5 w-3.5 text-indigo-400" />
          </div>
          <span className="text-sm font-semibold text-[#E6EDF3] tracking-tight">
            DSA Trainer
          </span>
        </Link>

        <div className="flex items-center gap-1">
          {links.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                pathname === href
                  ? "bg-[#161D25] text-[#E6EDF3]"
                  : "text-[#9AA4AF] hover:bg-[#161D25] hover:text-[#E6EDF3]",
              )}
            >
              <Icon className="h-3.5 w-3.5" />
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
