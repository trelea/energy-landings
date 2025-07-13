'use client';

import Image from "next/image";

interface BackTopButtonProps {
  text: string;
}

export default function BackTopButton({ text }: BackTopButtonProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex items-center gap-4 cursor-pointer border border-[#FFFFFF] w-fit px-4 py-3" onClick={scrollToTop}>
        <Image src={'/icons/chevrons-up.svg'} alt="chevron" width={24} height={24} />
        <span>{text}</span>
    </div>
  );
}