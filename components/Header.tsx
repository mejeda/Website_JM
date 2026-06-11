"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-[#f8f6f1]/90 backdrop-blur-sm transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4"
      }`}
    >
      <nav className="container-custom flex gap-8 py-6 text-sm tracking-wide">
        <Link href="/2026">2026</Link>
        <Link href="/2025">2025</Link>
        <Link href="/2024">2024</Link>
        <Link href="/about">ABOUT</Link>
        <Link href="/contact">CONTACT</Link>
      </nav>
    </header>
  );
}