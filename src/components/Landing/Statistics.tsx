'use client';

import { useTranslations } from 'next-intl';

interface StatCardProps {
  number: string;
  label: string;
  icon: React.ReactNode;
}

const StatCard = ({ number, label, icon }: StatCardProps) => (
  <div className="flex flex-col items-center gap-3 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/20 transition-all">
    <div className="w-12 h-12 rounded-xl gradient-badge flex items-center justify-center text-white mb-1">
      {icon}
    </div>
    <span className="text-3xl lg:text-4xl font-bold text-gray-900">{number}</span>
    <span className="text-gray-500 text-center text-sm">{label}</span>
  </div>
);

export default function Statistics() {
  const t = useTranslations('Statistics');

  return (
    <div className="bg-gradient-to-b from-[#F8FBF6] to-white py-16 lg:py-20 w-full">
      <div className="container max-w-screen-md xl:max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col gap-3 items-center mb-10 lg:mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">{t('label')}</span>
          <h2 className="text-2xl lg:text-4xl font-semibold text-center">
            {t('title')}
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <StatCard
            number={t('capacity')}
            label={t('capacityLabel')}
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
          />
          <StatCard
            number={t('projects')}
            label={t('projectsLabel')}
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            }
          />
          <StatCard
            number={t('energy')}
            label={t('energyLabel')}
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            }
          />
          <StatCard
            number={t('satisfaction')}
            label={t('satisfactionLabel')}
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
}
