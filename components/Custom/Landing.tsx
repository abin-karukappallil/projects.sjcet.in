"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col bg-linear-to-br from-[#08131f] via-[#0a1728] to-[#0a1b2e] text-slate-100">
      <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/5 border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-12 py-8">
        </div>
      </header>
      <section className="flex flex-col justify-center items-center grow text-center px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-slate-100">
            Discover & Share{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-sky-300 via-cyan-200 to-indigo-300">
              Innovative Projects
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            A platform for SJCET students to showcase their innovative projects, collaborate with peers, 
            and gain recognition within the college community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/join">
              <Button
                size="lg"
                className="text-white text-lg px-8 py-6 h-auto rounded-xl font-medium 
                bg-white/10 backdrop-blur-md border border-white/15 
                hover:bg-white/20 hover:scale-105 transition-all duration-300"
              >
                Join as Developer
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="https://nexus.sjcetpalai.ac.in/projects">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 h-auto rounded-xl font-medium
                border border-slate-500/30 text-slate-200 
                bg-white/5 backdrop-blur-md hover:bg-white/10 hover:scale-105 transition-all duration-300"
              >
                Explore Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
