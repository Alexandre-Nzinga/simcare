import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem, SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import ScenarioCard from '@/components/ScenarioCard';
import { WelcomeBar } from '@/components/WelcomeBar';


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

export default function Dashboard() {
    const { auth } = usePage<SharedData>().props;

    const sampleScenarios = [
        {
            title: 'Edix-Thorax',
            short: 'Acute reanimatie, snelle beslissingen en teamcoördinatie.',
            details: 'Realistische reanimatiesimulatie met vitale functies, tijdsdruk en de mogelijkheid om protocollen te oefenen.',
            imageUrl: 'https://img.alicdn.com/imgextra/i3/180035430/O1CN01K8hx7H1pyzZvVnSTL_!!180035430.jpg',
            unityBuildPath: '/unity-builds/thorax-sim/index.html',
        },
        {
            title: 'MRI Scan',
            short: 'Herkenning en behandeling van knieletsel in de acute setting.',
            details: 'Scenario met progressieve hemodynamische instabiliteit, waarbij fluid resuscitation en antibiotica-timing cruciaal zijn.',
            imageUrl: 'https://uploads.dailydot.com/73a/78/knee.gif?auto=compress&fm=gif',
            unityBuildPath: '/unity-builds/mri-sim/index.html',
        },
        {
            title: 'Trauma Triage',
            short: 'Beheer van meerdere letsels bij een meergewonde patiënt.',
            details: 'Simuleer snelle triage, airway management en coördinatie met spoedeisende hulp teams.',
            imageUrl: 'https://i0.wp.com/sheekgeek.org/wp-content/uploads/2010/01/animation.gif?ssl=1',
            unityBuildPath: '/unity-builds/trauma-sim/index.html',
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <WelcomeBar firstName="Alexandre" />

                {/* Scenarios section */}
                <section className="mt-6">
                    <h3 className="mb-4 text-lg font-semibold dark:text-[#EDEDEC]">Scenarios</h3>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {sampleScenarios.map((scenario, index) => (
                            <ScenarioCard
                                key={index}
                                {...scenario}
                                unityBuildPath={scenario.unityBuildPath}
                            />
                        ))}
                    </div>
                </section>


                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div>

                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
