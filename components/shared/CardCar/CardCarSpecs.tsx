import { Car } from "@prisma/client";
import { Fuel, Gauge, Gem, Users, Wrench } from "lucide-react";

interface CardCarSpecsProps {
    car: Car;
}

export function CardCarSpecs({ car }: CardCarSpecsProps) {
    const { type, transmission, people, engine, cv } = car;

    const specs = [
        { icon: Gem, label: type, title: "Type" },
        { icon: Wrench, label: transmission, title: "Transmission" },
        { icon: Users, label: `${people} People`, title: "Capacity" },
        { icon: Fuel, label: engine, title: "Engine" },
        { icon: Gauge, label: `${cv} HP`, title: "Horsepower" },
    ];

    return (
        <div className="grid grid-cols-2 gap-3">
            {specs.map((spec, index) => {
                const Icon = spec.icon;
                return (
                    <div 
                        key={index}
                        className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"
                        title={spec.title}
                    >
                        <div className="shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800">
                            <Icon className="h-4 w-4 text-slate-700 dark:text-slate-300" />
                        </div>
                        <span className="capitalize truncate font-medium">{spec.label}</span>
                    </div>
                );
            })}
        </div>
    );
}
