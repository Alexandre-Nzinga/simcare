import { FeatureCard } from './feature-card';
import { BookOpen, Users, Shield, Activity } from 'lucide-react';

export function FeatureSection() {
    const features = [
        {
            title: 'Interactief Leren',
            description: 'Leer door te doen met onze interactieve simulaties en real-time feedback systemen.',
            icon: <BookOpen className="h-6 w-6" />,
        },
        {
            title: 'Teamwork Training',
            description: 'Oefen samenwerking en communicatie in realistische medische scenario\'s.',
            icon: <Users className="h-6 w-6" />,
        },
        {
            title: 'Veilige Omgeving',
            description: 'Experimenteer en leer zonder risico\'s in een gecontroleerde omgeving.',
            icon: <Shield className="h-6 w-6" />,
        },
        {
            title: 'Voortgangsmonitoring',
            description: 'Volg je ontwikkeling met gedetailleerde prestatie-analyses en rapporten.',
            icon: <Activity className="h-6 w-6" />,
        },
    ];

    return (
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            title={feature.title}
                            description={feature.description}
                            icon={feature.icon}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
