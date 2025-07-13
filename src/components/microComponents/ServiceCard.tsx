import Image from 'next/image';

type ServiceCardProps = {
    title: string;
    description: string;
    imageUrl: string;
    redirectLink: string;
};

export default function ServiceCard({ title, description, imageUrl, redirectLink }: ServiceCardProps) {
    return (
        <div className='flex flex-col gap-6 p-6 w-full bg-[#ffefe9] border border-[#ffa98f] rounded-xl'>

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

                <p className='text-[#666666]'>{description}</p>
                
                <a href={redirectLink} className='text-[#FF5722] font-medium flex items-center gap-2'>
                    Mai mult
                    <Image src="/icons/arrow-up-right-blue.svg" alt="chevron" width={18} height={17} />
                </a>
            </div>

        </div>
    );
}