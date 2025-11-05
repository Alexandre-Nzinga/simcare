import React from 'react';
import { FeatureSection } from './feature-section';


export function HeroSection() {
    return (
        <div className="relative isolate px-6 pt-8 lg:px-8">
            <div className="mx-auto max-w-4xl py-16 sm:py-24 lg:py-32">
                <div className="text-center">
                    <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-[#1b1b18] sm:text-6xl dark:text-[#EDEDEC]">
                        Oefen medische vaardigheden in een veilige, interactieve omgeving.
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-[#1b1b18]/70 dark:text-[#EDEDEC]/70">
                        Uw uitgebreide platform voor medische simulatie, ontworpen om de medische training en patiëntenzorg te verbeteren.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="/dashboard"
                            className="rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Begin nu
                        </a>
                        <a href="#" className="text-sm font-semibold leading-6 text-[#1b1b18] dark:text-[#EDEDEC]">
                            Meer informatie<span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>
            <FeatureSection />
        </div>

    );
}
