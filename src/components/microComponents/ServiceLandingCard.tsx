import Image from 'next/image';

type ServiceLandingCardProps = {
    title: string;
    description: string;
    redirectLink: string;
};

export default function ServicesLandingCard({ title, description, redirectLink }: ServiceLandingCardProps) {
    return (
        <a href={redirectLink} className='cursor-pointer flex flex-col gap-6 items-start justify-end p-6 bg-gradient-to-b from-[#f7fff8] to-[#DBFFDD] rounded-xl aspect-square sm:aspect-video lg:aspect-square w-full'>
            <div className='flex items-center justify-center p-4 bg-gradient-to-b from-[#4CAF50] to-[#38803A] rounded-xl'>
                <Image src={'/icons/star.svg'} width={24} height={24} alt="Solar Panel Icon" />
            </div>
            <div className='flex flex-col gap-4'>
                <span className='text-2xl lg:text-[32px] font-medium leading-snug'>{title}</span>
                <span className='text-[#666666]'>{description}</span>
            </div>
        </a>
    );
}