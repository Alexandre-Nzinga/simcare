import { dashboard } from '@/routes';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { HeroSection } from '@/components/herosection';
import AppLogo from '@/components/app-logo';
import AppPreview from "@/components/app-preview";
import { FeatureSection } from '@/components/feature-section';



export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome">

                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <header className="mb-2 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <AppLogo/>
                        </div>

                        <nav className="flex items-center justify-end gap-4">

                            {auth.user ? (
                                <Link
                                    href={dashboard()}
                                    className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <Link
                                    href="/login"
                                    className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                >
                                    Log in
                                </Link>
                            )}
                        </nav>
                    </div>
                 </header>
                <main className="w-full">
                    <HeroSection />
                    <AppPreview />
                    <FeatureSection />

                </main>
                <div className="hidden h-14.5 lg:block"></div>
            </div>
        </>
    );
}
