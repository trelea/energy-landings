import Image from 'next/image';

type NewsCardProps = {
    title: string;
    description: string;
    date: string;
    imageUrl: string;
    redirectLink: string;
};

export default function NewsCard({ title, description, date, imageUrl, redirectLink }: NewsCardProps) {
    return (
        <div className='flex flex-col gap-6 w-full'>

            <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>
            
            <div className='flex flex-col gap-4'>
                <span className='text-xl font-medium'>{title}</span>

                <span>{date}</span>

                <p className='text-[#666666]'>{description}</p>
            </div>

            <a href={redirectLink} className='text-[#001D3D] font-medium flex items-center gap-2'>
                Citește mai mult
                <Image src="/icons/arrow-up-right.svg" alt="chevron" width={18} height={17} />
            </a>
        </div>
    );
}