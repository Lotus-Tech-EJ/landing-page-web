

import { Service } from '@/types/service';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
    service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
    return (
        <article className="group relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-white border border-gray-100 shadow-md transition-transform duration-300 hover:scale-[1.02]">
            <svg
                className="absolute inset-0 h-full w-full text-gray-200 bg-gray-50 transition-all duration-500 ease-out group-hover:blur-md group-hover:opacity-30"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
            >
                <line x1="0" y1="0" x2="100" y2="100" strokeWidth="1" />
                <line x1="100" y1="0" x2="0" y2="100" strokeWidth="1" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent opacity-95 transition-opacity duration-300 group-hover:bg-white/95" />

            <div className="absolute inset-0 flex flex-col justify-end p-6">

                <h3 className="text-xl font-bold tracking-tight text-[#3b1c61] transition-transform duration-300 group-hover:-translate-y-1">
                    {service.title}
                </h3>
                <div className="h-0 opacity-0 transition-all duration-300 ease-out group-hover:mt-2 group-hover:h-auto group-hover:opacity-100">
                    <p className="text-sm leading-relaxed text-[#3b1c61] mb-4 transform translate-y-4 transition-transform duration-300 ease-out group-hover:translate-y-0">
                        {service.description}
                    </p>

                    <Button
                        variant="outline"
                        className="!rounded-xl border-[#6b4a9b] text-[#6b4a9b] hover:bg-[#6b4a9b] hover:text-[#6b4a9b] transition-all transform translate-y-4 duration-500 ease-out group-hover:translate-y-0 text-xs font-extrabold tracking-wider uppercase px-4 py-2 h-auto"
                    >
                        Saiba mais
                    </Button>
                </div>

            </div>
        </article>
    );
}