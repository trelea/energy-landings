'use client';

import Image from "next/image";
import BackTopButton from "./microComponents/BackTopButton";
import { useTranslations } from "next-intl";
import { useState } from "react";

interface LegalContent {
    title: string;
    content: string;
}

export default function Footer() {
    const t = useTranslations('Footer');
    const [selectedLegalContent, setSelectedLegalContent] = useState<LegalContent | null>(null);

    const navigation = [
        { name: t("link1"), href: '/' },
        { name: t("link2"), href: '/about-us' },
        { name: t("link3"), href: '/services' },
        { name: t("link4"), href: '/blogs' },
        { name: t("link5"), href: '/contacts' }
    ]

    const legalLinks = [
        { 
            name: t("privacyPolicy"), 
            href: '/privacy-policy',
            title: t("privacyPolicy"),
            content: t("privacyPolicyContent") // You'll need to add this translation
        },
        { 
            name: t("termsOfService"), 
            href: '/terms-of-service',
            title: t("termsOfService"),
            content: t("termsOfServiceContent") // You'll need to add this translation
        }
    ];

    const openLegalModal = (title: string, content: string): void => {
        setSelectedLegalContent({ title, content });
    };

    const closeLegalModal = (): void => {
        setSelectedLegalContent(null);
    };

    return (
        <>
            <footer className="bg-[#091B2B] border-t border-[#4B4B4B] text-white w-full pt-24 pb-10 relative overflow-hidden z-0">
                <div className="container xl:max-w-screen-xl mx-auto flex flex-col md:flex-row items-start justify-between gap-16 md:gap-8 px-4">
                    <div className="flex flex-col gap-12 max-w-[400px]">
                        <div className="flex flex-col items-start justify-start gap-4">
                            <Image
                                src="/logos/logo-text.svg"
                                alt="Green Energy Logo"
                                width={200}
                                height={50}
                            />
                            <span>{t("description")}</span>
                        </div>

                        {/* <div className="flex items-center gap-8">
                            <Image src={'/social/facebook.svg'} alt="Facebook" width={32} height={32} />
                            <Image src={'/social/instagram.svg'} alt="Instagram" width={32} height={32} />
                            <Image src={'/social/linkedin.svg'} alt="LinkedIn" width={32} height={32} />
                        </div> */}

                        <BackTopButton text={t("backToTop")} />
                    </div>
                    <div className="flex gap-28 ">
                        <div className="flex flex-col gap-8">
                            <span className="font-semibold">{t("sitemap")}</span>
                            <div className="flex flex-col gap-6 font-medium">
                                {navigation.map((item) => (
                                    <a  key={item.name} 
                                        href={item.href}>
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                        
                        <div className="flex flex-col gap-8">
                            <span className="font-semibold">Legal</span>
                            <div className="flex flex-col gap-6 font-medium">
                                {legalLinks.map((item) => (
                                    <button 
                                        key={item.name} 
                                        onClick={() => openLegalModal(item.title, item.content)}
                                        className="text-left hover:text-gray-300 transition-colors"
                                    >
                                        {item.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <Image src="/footerbg.png" alt="footerbg" width={900} height={900} className="absolute top-0 right-0 -translate-x-10 -translate-y-[10%] hidden md:block -z-10"/>
            
                <div className="container mx-auto flex items-center justify-center mt-12 px-4 text-sm text-gray-400">
                    <span>Made by <a className="font-medium underline" href="https://devcompare.md/ro">ComPare</a></span>
                </div>
            </footer>

            {/* Legal Modal */}
            {selectedLegalContent && (
                <div 
                    className="fixed inset-0 backdrop-blur-md bg-opacity-50 flex items-center justify-center z-50 p-4"
                    onClick={closeLegalModal}
                >
                    <div 
                        className="bg-white text-black rounded-lg max-w-2xl max-h-[80vh] overflow-y-auto p-6 relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-bold">{selectedLegalContent.title}</h2>
                            <button
                                onClick={closeLegalModal}
                                className="text-gray-500 hover:text-gray-700 text-2xl"
                            >
                                ×
                            </button>
                        </div>
                        <div className="prose prose-sm max-w-none">
                            <p className="whitespace-pre-wrap">{selectedLegalContent.content}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}