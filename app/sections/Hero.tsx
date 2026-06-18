'use client';

import Link from 'next/link';
import { ArrowRight, TrendingUp, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-[#f5f5f0] overflow-hidden">
      <div className="container mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: Text */}
          <div>
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 text-xs font-semibold text-[#0f1f3d] mb-7 shadow-sm">
              <Star className="w-3.5 h-3.5 text-[#F5A623] fill-[#F5A623]" />
              TRUSTED BY 25,000+ AMERICANS
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight text-[#0f1f3d] mb-5">
              Digital<br />
              Verification For<br />
              <span className="text-[#E8521A]">Approved<br />Customer</span>
            </h1>

            <p className="text-base text-gray-500 mb-8">
              Your Quick Loan Companion On-the-Go
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/apply-now"
                className="inline-flex items-center gap-2 bg-[#E8521A] hover:bg-[#d44a14] text-white px-7 py-3.5 rounded-full font-semibold text-base transition-colors"
              >
                <ArrowRight className="w-4 h-4" />
                Get Started
              </Link>
              <a
                href="#loans"
                className="inline-flex items-center gap-2 border border-gray-300 text-[#0f1f3d] hover:bg-gray-50 px-7 py-3.5 rounded-full font-semibold text-base transition-colors bg-white"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right: Quick Overview card */}
          <div className="hidden lg:flex justify-center">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-7 w-full max-w-sm">
              {/* Card header */}
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-5 h-5 text-[#E8521A]" />
                <span className="font-semibold text-[#0f1f3d] text-base">Quick Overview</span>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-0 mb-6">
                <div className="py-5 px-4 border-b border-r border-gray-100">
                  <p className="text-3xl font-extrabold text-[#0f1f3d]">$50K</p>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mt-1">MAX LOAN</p>
                </div>
                <div className="py-5 px-4 border-b border-gray-100">
                  <p className="text-3xl font-extrabold text-[#0f1f3d]">24hr</p>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mt-1">APPROVAL</p>
                </div>
                <div className="py-5 px-4 border-r border-gray-100">
                  <p className="text-3xl font-extrabold text-[#0f1f3d]">4.9<span className="text-[#0f1f3d]">★</span></p>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mt-1">RATING</p>
                </div>
                <div className="py-5 px-4">
                  <p className="text-3xl font-extrabold text-[#0f1f3d]">50</p>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mt-1">STATES</p>
                </div>
              </div>

              {/* CTA button */}
              <Link
                href="/apply-now"
                className="block w-full bg-[#0f1f3d] hover:bg-[#1a2f55] text-white text-center py-3.5 rounded-xl font-semibold text-sm transition-colors"
              >
                Check Your Rate →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
