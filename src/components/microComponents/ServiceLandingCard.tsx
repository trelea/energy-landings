import Image from 'next/image';

type ServiceLandingCardProps = {
    title: string;
    description: string;
    redirectLink: string;
};

export default function ServicesLandingCard({ title, description, redirectLink }: ServiceLandingCardProps) {
    return (
        <a href={redirectLink} className='group cursor-pointer flex flex-col gap-5 items-start justify-end p-6 bg-white border border-gray-100 rounded-2xl aspect-square sm:aspect-video lg:aspect-square w-full shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300'>
            <div className='flex items-center justify-center p-3 gradient-badge rounded-xl group-hover:scale-105 transition-transform'>
                <Image src={'/icons/star.svg'} width={22} height={22} alt="" />
            </div>
            <div className='flex flex-col gap-3'>
                <span className='text-xl lg:text-2xl font-semibold leading-snug text-gray-900 group-hover:text-primary transition-colors'>{title}</span>
                <span className='text-gray-500 text-sm leading-relaxed line-clamp-3'>{description}</span>
            </div>
            <div className='flex items-center gap-2 text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity'>
                <span>Mai multe</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </div>
        </a>
    );
}