'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Contact() {
  const t = useTranslations('Contact');
  const [form, setForm] = useState({ name: '', surname: '', phone: '', email: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: { 'Content-Type': 'application/json' }
      });

      const result = await res.json();
      setStatus(result.success ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className='bg-gradient-to-t from-[#f0f7ff] to-white w-full py-20'>
      <div id='contact' className="container xl:max-w-screen-xl w-full mx-auto px-4">
        <div className='flex gap-8 lg:gap-14 justify-between items-center flex-col lg:flex-row'>
          <div className="flex flex-col items-start justify-center gap-14 w-full">
            <div className="flex flex-col gap-4 items-start">
              <span className="font-medium text-4xl lg:text-6xl">{t("title")}</span>
              <span className="text-[#666666]">{t("subtitle")}</span>
              <span className="text-[#666666]">{t("mail")}</span>
              <span className="text-[#666666]">{t("phone")}</span>
              <span className="font-medium underline cursor-pointer">{t("button")}</span>
            </div>
            <div className='flex flex-col md:flex-row gap-6 lg:gap-4'>
              <div className='flex flex-col gap-3'>
                <span className='text-xl'>Răspundem Rapid</span>
                <span className='text-[#3A3A3A]'>Fie că e vorba de o ofertă sau o întrebare, revenim cu un răspuns în cel mult 24 de ore.</span>
              </div>
              <div className='flex flex-col gap-3'>
                <span className='text-xl'>Răspundem Rapid</span>
                <span className='text-[#3A3A3A]'>Fie că e vorba de o ofertă sau o întrebare, revenim cu un răspuns în cel mult 24 de ore.</span>
              </div>
              <div className='flex flex-col gap-3'>
                <span className='text-xl'>Răspundem Rapid</span>
                <span className='text-[#3A3A3A]'>Fie că e vorba de o ofertă sau o întrebare, revenim cu un răspuns în cel mult 24 de ore.</span>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white md:rounded-2xl flex flex-col gap-8 p-6 lg:max-w-[470px] rounded-xl w-full shadow-[0_0_25px_rgba(0,0,0,0.1)]"
          >
            <div className='flex flex-col gap-3'>
              <span className='font-medium text-[32px]'>{t("formTitle")}</span>
              <span>{t("formSubtitle")}</span>
            </div>
            <div className="flex flex-col gap-4">
              <div className='flex flex-col lg:flex-row gap-4'>
                <input
                  type="text"
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={t("nameLabel")}
                  className="outline-none border border-[#E2E2E2] rounded-full px-6 py-[14px] text-[#041827] w-full"
                />
                <input
                  type="text"
                  id="name"
                  value={form.surname}
                  onChange={handleChange}
                  placeholder={t("surnameLabel")}
                  className="outline-none border border-[#E2E2E2] rounded-full px-6 py-[14px] text-[#041827] w-full"
                />
              </div>

              <input
                type="text"
                id="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder={t("phoneLabel")}
                className="outline-none border border-[#E2E2E2] rounded-full px-6 py-[14px] text-[#041827]"
              />
                <input
                  type="email"
                  id="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder={t("emailLabel")}
                  className="outline-none border border-[#E2E2E2] rounded-full px-6 py-[14px] text-[#041827]"
                />
                <textarea className="outline-none border border-[#E2E2E2] rounded-xl px-6 py-4 text-[#041827]" rows={5} name="message" placeholder={t("messageLabel")} id="message"></textarea>
            </div>
            <button
              type="submit"
              className='bg-[#007BFF] text-white ps-6 p-3 rounded-full w-full flex items-center justify-between gap-2 hover:bg-[#007bffe8]'
            >
              <span className='font-medium'>{t('submitButton')}</span>
              <Image src="/icons/arrow-up-empty.svg" alt="arrow" width={34} height={34} />
            </button>
            {status === 'success' && <p className="text-green-400">Email sent successfully!</p>}
            {status === 'error' && <p className="text-red-500">Something went wrong.</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
