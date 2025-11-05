import React from 'react';

type FeatureCardProps = {
    title: string;
    description: string;
    icon: React.ReactNode;
};

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
    return (
        <div className="relative rounded-2xl border border-[#19140035] bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-[#3E3E3A] dark:bg-[#1b1b18]">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-600/10 text-teal-600 dark:bg-teal-500/10 dark:text-teal-500">
                {icon}
            </div>
            <h3 className="mt-4 text-lg font-semibold text-[#1b1b18] dark:text-[#EDEDEC]">{title}</h3>
            <p className="mt-2 text-[#1b1b18]/70 dark:text-[#EDEDEC]/70">{description}</p>
        </div>
    );
}
