'use client';

import React, { useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';

import CSS from './logos/CSS';
import HTML from './logos/HTML';
import JavaScript from './logos/JavaScript';
import Python from './logos/Python';
import TypeScript from './logos/TypeScript';
import PHP from './logos/php';

const Typewriter = ({ text, speed = 100 }: { text: string; speed?: number }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const indexRef = useRef(0);
  const deletingRef = useRef(false);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  // Robust single-timeout loop to avoid nested untracked timeouts and StrictMode glitches
  useEffect(() => {
    // Reset state machine when text or speed changes
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    indexRef.current = 0;
    deletingRef.current = false;
    setDisplayedText('');
    setCurrentIndex(0);
    setIsDeleting(false);

    const tick = () => {
      const typeSpeed = deletingRef.current ? speed / 2 : speed;

      if (!deletingRef.current) {
        if (indexRef.current < text.length) {
          indexRef.current += 1;
          setDisplayedText(text.substring(0, indexRef.current));
          setCurrentIndex(indexRef.current);
          timeoutRef.current = setTimeout(tick, typeSpeed);
        } else {
          // Pause at full text, then switch to deleting
          timeoutRef.current = setTimeout(() => {
            deletingRef.current = true;
            setIsDeleting(true);
            tick();
          }, 1000);
        }
      } else {
        if (indexRef.current > 0) {
          indexRef.current -= 1;
          setDisplayedText(text.substring(0, indexRef.current));
          setCurrentIndex(indexRef.current);
          timeoutRef.current = setTimeout(tick, typeSpeed);
        } else {
          // Pause at empty, then start typing again
          timeoutRef.current = setTimeout(() => {
            deletingRef.current = false;
            setIsDeleting(false);
            tick();
          }, 500);
        }
      }
    };

    timeoutRef.current = setTimeout(tick, speed);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [text, speed]);

  return (
    <span className="relative">
      {displayedText}
      <span
        className={`inline-block text-muted-foreground ml-0.5 ${showCursor ? 'opacity-100' : 'opacity-0'}`}
      >
        _
      </span>
    </span>
  );
};

export default function HeroSection() {
  return (
    <>
      <main className="overflow-x-hidden">
        <section>
          <div className="pb-12 pt-6 md:pb-28 lg:pb-32 lg:pt-16">
            <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
              <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left font-mono">
                <p className="text-pretty lg:mt-16 select-none text-xl">
                  <span className="text-gray-500">{'<'}</span>
                  <span className="text-blue-400">{'span'}</span>
                  <span className="text-gray-500">{'>'}</span>Hi, I'm Matheus
                  <span className="text-gray-500">{'</'}</span>
                  <span className="text-blue-400">{'span'}</span>
                  <span className="text-gray-500">{'>'}</span>
                </p>
                <h1 className="mt-8 max-w-2xl text-balance text-5xl font-bold md:text-6xl xl:text-7xl select-none">
                  <span className="text-blue-500">{'{'}</span>
                  <span className="text-blue-300">Full Stack</span>
                  <span className="text-blue-500">{'}'}</span>
                  <br /> Web and App{' '}
                  <span className="inline-block overflow-hidden whitespace-nowrap font-mono min-w-[10ch]">
                    <Typewriter text="Developer" speed={100} />
                  </span>
                </h1>
                <p className="mt-8 max-w-2xl text-pretty text-lg select-none">
                  <span className="text-gray-500">{'<'}</span>
                  <span className="text-blue-400">{'p'}</span>
                  <span className="text-gray-500">{'>'}</span>With deep expertise in modern
                  frameworks like <span className="text-gray-500">{'<'}</span>
                  <span className="text-blue-400">{'b'}</span>
                  <span className="text-gray-500">{'>'}</span>
                  <span className="font-bold">React, Node.js, Angular and Laravel</span>
                  <span className="text-gray-500">{'</'}</span>
                  <span className="text-blue-400">{'b'}</span>
                  <span className="text-gray-500">{'>'}</span>, I develop full stack web and app
                  solutions that are fast, scalable, and visually engaging.
                  <span className="text-gray-500">{'</'}</span>
                  <span className="text-blue-400">{'p'}</span>
                  <span className="text-gray-500">{'>'}</span>
                </p>
                <div className="flex items-center my-4">
                  <div className="flex gap-4">
                    <HTML />
                    <CSS />
                    <JavaScript />
                    <TypeScript />
                    <PHP />
                    <Python />
                  </div>
                  <p className="select-none">... and more</p>
                </div>
                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                  <Button asChild size="lg" className="px-5 text-base">
                    <Link href="#link">
                      <span className="text-nowrap select-none">Request a meeting</span>
                    </Link>
                  </Button>
                  <Button key={2} asChild size="lg" variant="ghost" className="px-5 text-base">
                    <Link href="#link">
                      <span className="text-nowrap select-none">Contact</span>
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-64 w-64 sm:h-80 sm:w-80 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:mr-12 lg:h-96 lg:w-96">
                <div className="relative h-full w-full">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative h-full w-full rotate-45 transform overflow-hidden rounded-[68px] border-2 border-white/20 bg-gray-900/50 backdrop-blur-sm">
                      <Image
                        src="/profile.png"
                        alt="Profile Picture"
                        fill
                        className="object-cover object-center scale-150 select-none"
                        style={{
                          transform: 'rotate(-45deg) scale(.88)',
                        }}
                      />
                    </div>
                  </div>
                  {/* Brand Logo */}
                  <div className="absolute -bottom-4 -right-4 z-10 h-20 w-20 p-2 shadow-lg">
                    <Image
                      src="/matz-dev-logo.png"
                      alt="Matz.Dev Logo"
                      width={64}
                      height={64}
                      className="h-full w-full object-contain select-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-background pb-16 md:pb-32">
          <div className="group relative m-auto max-w-6xl px-6">
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:max-w-44 md:border-r md:pr-6">
                <p className="text-end text-sm select-none">Technologies expertise</p>
              </div>
              <div className="relative py-6 md:w-[calc(100%-11rem)]">
                <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
                  <div className="flex">
                    <img
                      className="mx-auto h-7 w-fit select-none"
                      src="/tec/angular.png"
                      alt="Angular"
                      height="20"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-7 w-fit select-none"
                      src="/tec/expo.png"
                      alt="Expo"
                      height="20"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-7 w-fit select-none"
                      src="/tec/ionic.png"
                      alt="Ionic"
                      height="20"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-7 w-fit select-none"
                      src="/tec/laravel.png"
                      alt="Laravel"
                      height="20"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-7 w-fit select-none dark:invert"
                      src="/tec/nextjs.png"
                      alt="Next.js"
                      height="20"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-7 w-fit select-none"
                      src="/tec/nodejs.png"
                      alt="Node.js"
                      height="20"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-7 w-fit select-none"
                      src="/tec/react.png"
                      alt="React"
                      height="20"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-7 w-fit select-none"
                      src="/tec/vite.png"
                      alt="Vite"
                      height="20"
                      width="auto"
                    />
                    <span className="ml-4 text-xl font-semibold">Vite</span>
                  </div>
                </InfiniteSlider>

                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                <ProgressiveBlur
                  className="pointer-events-none absolute left-0 top-0 h-full w-20"
                  direction="left"
                  blurIntensity={1}
                />
                <ProgressiveBlur
                  className="pointer-events-none absolute right-0 top-0 h-full w-20"
                  direction="right"
                  blurIntensity={1}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
