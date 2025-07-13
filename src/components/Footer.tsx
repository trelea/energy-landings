import Image from "next/image";
import BackTopButton from "./microComponents/BackTopButton";
import { useTranslations } from "next-intl";

export default function Footer() {
    const t = useTranslations('Footer');

    const navigation = [
        { name: t("link1"), href: '/' },
        { name: t("link2"), href: '/about' },
        { name: t("link3"), href: '/services' },
        { name: t("link4"), href: '/news' },
        { name: t("link5"), href: '/contact' }
    ]

    return (
        <footer className="bg-[#091B2B] border-t border-[#4B4B4B] text-white w-full py-24 relative overflow-hidden z-0">
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

                    <div className="flex items-center gap-8">
                        <Image src={'/social/facebook.svg'} alt="Facebook" width={32} height={32} />
                        <Image src={'/social/instagram.svg'} alt="Instagram" width={32} height={32} />
                        <Image src={'/social/linkedin.svg'} alt="LinkedIn" width={32} height={32} />
                    </div>

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
                            <span>Privacy Policy</span>
                            <span>Terms of Service</span>
                            <span>Buyer Protection</span>
                        </div>
                    </div>
                </div>
            </div>
            <Image src="/footerbg.png" alt="footerbg" width={900} height={900} className="absolute top-0 right-0 -translate-x-10 -translate-y-[10%] hidden md:block -z-10"/>
        </footer>
    );
}