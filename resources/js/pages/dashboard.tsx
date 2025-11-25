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
            title: 'MRI Scan',
            short: 'Acute reanimatie, snelle beslissingen en teamcoördinatie.',
            details: 'Realistische reanimatiesimulatie met vitale functies, tijdsdruk en de mogelijkheid om protocollen te oefenen.',
            imageUrl: 'https://www.philips.be/c-dam/b2bhc/master/Products/Category/magnetic-resonance/mr-therapy/mr-therapy-HC781439.jpg',
            unityBuildPath: '/unity-builds/thorax-sim/index.html',
        },
        {
            title: 'RX Scan',
            short: 'Diagnose en behandeling van radiologische bevindingen in spoedeisende situaties.',
            details: 'Scenario met complexe radiologische interpretatie en urgente therapeutische besluitvorming, waarbij correcte diagnose en snelle behandeling essentieel zijn.',
            imageUrl: 'https://images.philips.com/is/image/philipsconsumer/ced89e5443824594b3b7b11800b096c2?$jpglarge$&wid=840&hei=720',
            unityBuildPath: '/unity-builds/mri-sim/index.html',
        },
        {
            title: 'CT scan',
            short: 'Beheer van meerdere letsels bij een meergewonde patiënt.',
            details: 'Simuleer snelle triage, luchtweg beheer en coördinatie met spoedeisende hulpteams.',
            imageUrl: 'https://www.philips.be/c-dam/corporate/newscenter/global/standard/resources/healthcare/2021/spectral-ct-7500/spectral-ct-product-shot-side-view.download.jpg',
            unityBuildPath: '/unity-builds/ct-scan-sim/index.html',
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <WelcomeBar firstName= "Alexandre"/>

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
