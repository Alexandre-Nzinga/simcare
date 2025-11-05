import React, { useState } from 'react';

type ScenarioCardProps = {
    title: string;
    short?: string;
    details?: string;
    imageUrl?: string;
    unityBuildPath?: string;
};

export default function ScenarioCard({ title, short, details, imageUrl, unityBuildPath }: ScenarioCardProps) {
    const [open, setOpen] = useState(false);
    const [isUnityLoaded, setIsUnityLoaded] = useState(false);

    const handleStartScenario = () => {
        if (unityBuildPath) {
            setIsUnityLoaded(true);
        }
    };

    return (
        <>
            <button
                type="button"
                onClick={() => setOpen(true)}
                className="group relative w-full overflow-hidden rounded-lg border border-sidebar-border/70 bg-white p-4 text-left shadow-sm transition-transform hover:scale-[1.02] dark:border-sidebar-border dark:bg-[#0b0b0b]"
            >
                {imageUrl ? (
                    <img src={imageUrl} alt={title} className="mb-3 h-36 w-full object-cover rounded-md" />
                ) : (
                    <div className="mb-3 h-24 w-full rounded-md bg-gradient-to-r from-teal-100 to-indigo-100 dark:from-teal-900/30 dark:to-indigo-900/20" />
                )}
                <h3 className="text-lg font-semibold text-[#1b1b18] dark:text-[#EDEDEC]">{title}</h3>
                {short && <p className="mt-1 text-sm text-[#1b1b18]/70 dark:text-[#EDEDEC]/70">{short}</p>}
            </button>

            {open && (
                <div
                    aria-modal="true"
                    role="dialog"
                    className="fixed inset-0 z-50 flex items-center justify-center"
                >
                    <div
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                        onClick={() => {
                            setOpen(false);
                            setIsUnityLoaded(false);
                        }}
                    />
                    <div className="relative z-10 max-h-[90vh] w-[min(1200px,95%)] overflow-auto rounded-2xl bg-white p-6 shadow-2xl dark:bg-[#0b0b0b]">
                        {!isUnityLoaded ? (
                            <>
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <h2 className="text-2xl font-bold text-[#1b1b18] dark:text-[#EDEDEC]">{title}</h2>
                                        {details && <p className="mt-2 text-sm text-[#1b1b18]/75 dark:text-[#EDEDEC]/75">{details}</p>}
                                    </div>
                                    <div>
                                        <button
                                            onClick={() => setOpen(false)}
                                            className="ml-4 inline-flex h-9 w-9 items-center justify-center rounded-md bg-sidebar-border/40 text-sm hover:brightness-95 dark:bg-sidebar-border"
                                            aria-label="Close"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                </div>

                                {/* New two-column layout: image on left, description/actions on right */}
                                <div className="mt-6 flex flex-col gap-6 md:flex-row">
                                    {/* Image column */}
                                    <div className="w-full md:w-1/2 flex items-center justify-center">
                                        <div className="w-full max-w-md max-h-[60vh] overflow-hidden rounded-md bg-neutral-50 dark:bg-neutral-900">
                                            {imageUrl ? (
                                                <img
                                                    src={imageUrl}
                                                    alt={`${title} preview`}
                                                    className="w-full h-full object-contain"
                                                    style={{ display: 'block' }}
                                                />
                                            ) : (
                                                <div className="h-48 w-full bg-neutral-200 dark:bg-neutral-800" />
                                            )}
                                        </div>
                                    </div>

                                    {/* Description & actions column */}
                                    <div className="w-full md:w-1/2 flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-lg font-semibold text-[#1b1b18] dark:text-[#EDEDEC]">{short}</h3>
                                            {details && <p className="mt-3 text-sm text-[#1b1b18]/75 dark:text-[#EDEDEC]/75">{details}</p>}

                                            {/* Additional metadata or bullet points example */}
                                            <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-[#1b1b18]/70 dark:text-[#EDEDEC]/70">
                                                <li>Duurtijd: ~20 minuten</li>
                                                <li>Leerdoelen: Communicatie, Effectiviteit</li>
                                                <li>Benodigde materialen: Stethoscoop, zuurstofmasker</li>
                                            </ul>
                                        </div>

                                        <div className="mt-6 flex flex-wrap gap-3">
                                            <button
                                                onClick={handleStartScenario}
                                                className="rounded-md bg-teal-600 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-500"
                                            >
                                                Start Scenario
                                            </button>
                                            <button
                                                className="rounded-md border px-4 py-2 text-sm dark:border-[#2b2b2b]"
                                                onClick={() => setOpen(false)}
                                            >
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="flex items-center justify-between mb-4">
                                    <h2 className="text-xl font-bold text-[#1b1b18] dark:text-[#EDEDEC]">{title}</h2>
                                    <button
                                        onClick={() => {
                                            setOpen(false);
                                            setIsUnityLoaded(false);
                                        }}
                                        className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-sidebar-border/40 text-sm hover:brightness-95 dark:bg-sidebar-border"
                                        aria-label="Close"
                                    >
                                        ✕
                                    </button>
                                </div>
                                <div className="aspect-[16/9] w-full">
                                    <iframe
                                        src={unityBuildPath}
                                        className="h-full w-full rounded-lg"
                                        allow="autoplay; fullscreen"
                                        style={{ border: 'none' }}
                                    />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
