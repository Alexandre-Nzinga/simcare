import { useEffect, useState } from 'react';

type WelcomeBarProps = {
    firstName: string;
}
/* Een component da een welkomstbericht displayd op basis van de tijdstip van de dag en de voornaam van de user. */

export function WelcomeBar({ firstName }: WelcomeBarProps) {
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const hour = new Date().getHours();

        if (hour >= 6 && hour < 12) {
            setGreeting('Goedemorgen');
        } else if (hour >= 12 && hour < 17) {
            setGreeting('Goedemiddag');
        } else if (hour >= 17 && hour < 23) {
            setGreeting('Goedenavond');
        } else {
            setGreeting('Goedenacht');
        }
    }, []);

    return (
        <div className="w-full rounded-xl bg-teal-700 p-6 mb-6 dark:bg-black/40">
            <h2 className="text-2xl font-semibold text-white">
                {firstName ? `${greeting}, ${firstName}!` : `${greeting}, Gast!`}
            </h2>
            <p className="mt-1 text-white/70">
                Welkom terug bij je medische simulatie training
            </p>
        </div>
    );
}
