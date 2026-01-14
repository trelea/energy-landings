'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Contact() {
  const t = useTranslations('Contact');
  const [form, setForm] = useState({ name: '', surname: '', phone: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    <div className='bg-gradient-to-t from-[#E8F5E1] to-white w-full py-16 lg:py-20'>
      <div id='contact' className="container xl:max-w-screen-xl w-full mx-auto px-4">
        <div className='flex gap-10 lg:gap-16 justify-between items-start flex-col lg:flex-row'>
          {/* Left Side - Contact Info */}
          <div className="flex flex-col items-start justify-center gap-10 w-full lg:max-w-xl">
            <div className="flex flex-col gap-5 items-start">
              <span className="font-semibold text-3xl lg:text-5xl leading-tight">{t("title")}</span>
              <p className="text-[#666666] text-base lg:text-lg leading-relaxed">{t("subtitle")}</p>

              {/* Contact Details */}
              <div className="flex flex-col gap-3 mt-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-[#404040]">{t("mail")}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-[#404040]">{t("phone")}</span>
                </div>
              </div>
            </div>

            {/* Feature Cards */}
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 w-full'>
              <div className='flex flex-col gap-2 p-4 bg-white rounded-xl shadow-sm border border-gray-100'>
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-1">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className='text-sm font-semibold text-gray-900'>{t("subtitle1")}</span>
                <span className='text-xs text-gray-500 leading-relaxed'>{t("subdescription1")}</span>
              </div>
              <div className='flex flex-col gap-2 p-4 bg-white rounded-xl shadow-sm border border-gray-100'>
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-1">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <span className='text-sm font-semibold text-gray-900'>{t("subtitle2")}</span>
                <span className='text-xs text-gray-500 leading-relaxed'>{t("subdescription2")}</span>
              </div>
              <div className='flex flex-col gap-2 p-4 bg-white rounded-xl shadow-sm border border-gray-100'>
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-1">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className='text-sm font-semibold text-gray-900'>{t("subtitle3")}</span>
                <span className='text-xs text-gray-500 leading-relaxed'>{t("subdescription3")}</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl flex flex-col gap-6 p-6 lg:p-8 lg:max-w-[480px] w-full shadow-[0_4px_30px_rgba(0,0,0,0.08)] border border-gray-100"
          >
            <div className='flex flex-col gap-2'>
              <span className='font-semibold text-2xl lg:text-3xl text-gray-900'>{t("formTitle")}</span>
              <span className='text-gray-500 text-sm'>{t("formSubtitle")}</span>
            </div>
            <div className="flex flex-col gap-4">
              <div className='flex flex-col sm:flex-row gap-3'>
                <input
                  type="text"
                  id="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={t("nameLabel")}
                  required
                  className="outline-none border border-gray-200 rounded-xl px-5 py-3.5 text-gray-800 w-full focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                />
                <input
                  type="text"
                  id="surname"
                  value={form.surname}
                  onChange={handleChange}
                  placeholder={t("surnameLabel")}
                  className="outline-none border border-gray-200 rounded-xl px-5 py-3.5 text-gray-800 w-full focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                />
              </div>

              <input
                type="tel"
                id="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder={t("phoneLabel")}
                required
                className="outline-none border border-gray-200 rounded-xl px-5 py-3.5 text-gray-800 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
              />
              <input
                type="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                placeholder={t("emailLabel")}
                required
                className="outline-none border border-gray-200 rounded-xl px-5 py-3.5 text-gray-800 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
              />
              <textarea
                className="outline-none border border-gray-200 rounded-xl px-5 py-3.5 text-gray-800 resize-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                rows={4}
                id="message"
                value={form.message}
                onChange={handleChange}
                placeholder={t("messageLabel")}
              />
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className='bg-primary text-white ps-6 p-3 rounded-full w-full flex items-center justify-between gap-2 hover:bg-primary-medium transition-colors disabled:opacity-70 disabled:cursor-not-allowed'
            >
              <span className='font-medium'>
                {status === 'loading' ? '...' : t('submitButton')}
              </span>
              <Image src="/icons/arrow-up-empty.svg" alt="" width={34} height={34} />
            </button>
            {status === 'success' && (
              <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg text-green-700 text-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {t('successMessage')}
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-center gap-2 p-3 bg-red-50 rounded-lg text-red-700 text-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                {t('errorMessage')}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
