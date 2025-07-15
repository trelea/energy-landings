'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

interface ImageData {
    src: string;
    alt: string;
}

export default function Certifications() {
    const t = useTranslations('Certifications');
    const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

    const images: ImageData[] = [
        { src: t('image1'), alt: 'Certificate 1' },
        { src: t('image2'), alt: 'Certificate 2' },
        { src: t('image3'), alt: 'Certificate 3' },
        { src: t('image4'), alt: 'Certificate 4' }
    ];

    const openModal = (image: ImageData): void => {
        setSelectedImage(image);
    };

    const closeModal = (): void => {
        setSelectedImage(null);
    };

    return (
        <div className='container max-w-screen-md lg:max-w-screen-lg mx-auto px-4 py-12 lg:py-16'>
            <div className='flex flex-col gap-8 justify-center'>
                <span className='font-semibold text-2xl lg:text-[32px]'>{t('title')}</span>

                <div className='grid grid-cols-2 xl:grid-cols-4 gap-2 lg:gap-8'>
                    {images.map((image, index) => (
                        <div 
                            key={index}
                            className='cursor-pointer hover:opacity-90 transition-opacity'
                            onClick={() => openModal(image)}
                        >
                            <Image 
                                src={image.src} 
                                alt={image.alt} 
                                className='shadow-xl w-full' 
                                width={300} 
                                height={600}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedImage && (
                <div 
                    className='fixed inset-0 backdrop-blur-md bg-opacity-75 flex items-center justify-center z-50 p-4'
                    onClick={closeModal}
                >
                    <div className='relative max-w-4xl max-h-full'>
                        <button
                            className='absolute top-4 right-4 text-white text-2xl hover:text-gray-300 z-10'
                            onClick={closeModal}
                        >
                            ×
                        </button>
                        <Image
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className='max-w-full max-h-full object-contain'
                            width={550}
                            height={500}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}