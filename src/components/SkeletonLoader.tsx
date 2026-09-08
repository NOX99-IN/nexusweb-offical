import React from 'react';
import { motion } from 'motion/react';
import { PageId } from '../types';

interface SkeletonProps {
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className = '' }) => {
  return (
    <div
      className={`rounded-xl bg-white/[0.06] animate-shimmer relative overflow-hidden ${className}`}
    />
  );
};

export const CardSkeleton: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      className={`p-7 rounded-3xl bg-gradient-to-br from-[#1e273f]/80 via-[#131b2e]/90 to-[#171f33]/80 border border-white/10 shadow-xl flex flex-col justify-between ${className}`}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Skeleton className="w-12 h-12 rounded-xl" />
          <Skeleton className="w-20 h-6 rounded-md" />
        </div>
        <Skeleton className="w-3/4 h-7 rounded-lg" />
        <Skeleton className="w-full h-4 rounded" />
        <Skeleton className="w-5/6 h-4 rounded" />
        <div className="pt-2 flex flex-wrap gap-2">
          <Skeleton className="w-16 h-5 rounded-full" />
          <Skeleton className="w-20 h-5 rounded-full" />
          <Skeleton className="w-14 h-5 rounded-full" />
        </div>
      </div>
      <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
        <Skeleton className="w-24 h-5 rounded" />
        <Skeleton className="w-28 h-9 rounded-xl" />
      </div>
    </div>
  );
};

interface PageSkeletonProps {
  page?: PageId;
}

export const PageSkeleton: React.FC<PageSkeletonProps> = ({ page = 'home' }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 select-none"
    >
      {/* Top Banner / Hero Skeleton */}
      <div className="flex flex-col items-center text-center space-y-6 pt-6">
        {/* Urgency Pill Skeleton */}
        <Skeleton className="w-72 h-8 rounded-full" />

        {/* Big Headline Skeleton (2 lines) */}
        <div className="space-y-3 w-full max-w-3xl flex flex-col items-center">
          <Skeleton className="w-11/12 h-10 sm:h-14 rounded-2xl" />
          <Skeleton className="w-4/5 h-10 sm:h-14 rounded-2xl" />
        </div>

        {/* Subtitle Skeleton */}
        <div className="space-y-2 w-full max-w-xl flex flex-col items-center">
          <Skeleton className="w-full h-5 rounded-lg" />
          <Skeleton className="w-3/4 h-5 rounded-lg" />
        </div>

        {/* 2 CTA Buttons Skeleton */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
          <Skeleton className="w-56 h-14 rounded-2xl" />
          <Skeleton className="w-44 h-14 rounded-2xl" />
        </div>

        {/* Social Proof / Metrics Bar Skeleton */}
        <div className="w-full max-w-3xl p-5 rounded-2xl bg-gradient-to-r from-white/[0.04] via-white/[0.08] to-white/[0.04] border border-white/10 mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex flex-col items-center space-y-2">
            <Skeleton className="w-16 h-7 rounded-md" />
            <Skeleton className="w-24 h-3 rounded" />
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Skeleton className="w-16 h-7 rounded-md" />
            <Skeleton className="w-24 h-3 rounded" />
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Skeleton className="w-16 h-7 rounded-md" />
            <Skeleton className="w-24 h-3 rounded" />
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Skeleton className="w-16 h-7 rounded-md" />
            <Skeleton className="w-24 h-3 rounded" />
          </div>
        </div>
      </div>

      {/* Conditional Layout Skeleton depending on active page */}
      {page === 'contact' ? (
        /* Contact Page Skeleton: 2 Columns */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
          <div className="lg:col-span-5 space-y-4">
            <Skeleton className="w-full h-24 rounded-2xl" />
            <Skeleton className="w-full h-24 rounded-2xl" />
            <Skeleton className="w-full h-24 rounded-2xl" />
            <Skeleton className="w-full h-28 rounded-2xl" />
          </div>
          <div className="lg:col-span-7 p-8 rounded-3xl bg-white/[0.04] border border-white/10 space-y-5">
            <Skeleton className="w-2/3 h-8 rounded-lg" />
            <Skeleton className="w-full h-4 rounded" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <Skeleton className="w-full h-12 rounded-xl" />
              <Skeleton className="w-full h-12 rounded-xl" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Skeleton className="w-full h-12 rounded-xl" />
              <Skeleton className="w-full h-12 rounded-xl" />
            </div>
            <Skeleton className="w-full h-24 rounded-xl" />
            <Skeleton className="w-full h-12 rounded-xl" />
          </div>
        </div>
      ) : page === 'about' ? (
        /* About Page Skeleton: Founder Card + Milestones */
        <div className="space-y-10 pt-4">
          <div className="p-8 sm:p-12 rounded-3xl bg-white/[0.04] border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex flex-col items-center space-y-3">
              <Skeleton className="w-28 h-28 rounded-full" />
              <Skeleton className="w-36 h-6 rounded-lg" />
              <Skeleton className="w-48 h-4 rounded" />
              <Skeleton className="w-full h-10 rounded-xl mt-4" />
            </div>
            <div className="lg:col-span-8 space-y-4">
              <Skeleton className="w-32 h-5 rounded-full" />
              <Skeleton className="w-full h-8 rounded-lg" />
              <Skeleton className="w-full h-4 rounded" />
              <Skeleton className="w-5/6 h-4 rounded" />
              <Skeleton className="w-4/5 h-4 rounded" />
              <div className="flex gap-4 pt-4">
                <Skeleton className="w-32 h-6 rounded" />
                <Skeleton className="w-32 h-6 rounded" />
                <Skeleton className="w-32 h-6 rounded" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <Skeleton className="h-28 rounded-2xl" />
            <Skeleton className="h-28 rounded-2xl" />
            <Skeleton className="h-28 rounded-2xl" />
            <Skeleton className="h-28 rounded-2xl" />
          </div>
        </div>
      ) : (
        /* Home & Services Card Grid Skeletons */
        <div className="space-y-8 pt-4">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <Skeleton className="w-36 h-5 rounded-full" />
              <Skeleton className="w-64 h-8 rounded-lg" />
            </div>
            <Skeleton className="w-28 h-8 rounded-xl hidden sm:block" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </div>
        </div>
      )}
    </motion.div>
  );
};
