'use client'
import React from 'react'
import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'

type LocaleType = (typeof routing.locales)[number]

interface Props {
  defaultValue?: string
  items: { value: string; label: string }[]
  label?: string
}

export const LocaleSwitcherSelect: React.FC<Props> = ({ defaultValue, items, label }) => {
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()
  const [isPending, startTransition] = React.useTransition()
  const [isOpen, setIsOpen] = React.useState(false)
  const dropdownRef = React.useRef<HTMLDivElement>(null)

  const currentLocale = items.find((option) => option.value === locale)

  const onLocaleChange = React.useCallback(
    (newLocale: LocaleType) =>
      startTransition(() => {
        router.replace(
          {
            pathname: pathname,
          },
          { locale: newLocale },
        )
      }),
    [router, pathname, locale],
  )

  const handleOptionClick = (value: LocaleType) => {
    console.log(value)
    onLocaleChange(value)
    setIsOpen(false)
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      setIsOpen(!isOpen)
    } else if (event.key === 'Escape') {
      setIsOpen(false)
    } else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault()
      if (!isOpen) {
        setIsOpen(true)
      }
    }
  }

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        disabled={isPending}
        className={`
          text-sm 
          bg-transparent 
          border-none 
          shadow-none 
          m-0 
          p-0 
          focus:outline-none 
          hover:cursor-pointer
          transition-colors
          duration-200
          text-[#0018a3]
          ${isPending ? 'opacity-50 cursor-not-allowed' : 'hover:text-[#0018a3d8]'}
        `}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {currentLocale?.label}
        <span className="ml-1 text-xs">▼</span>
      </button>

      {isOpen && (
        <div
          className="
          absolute 
          top-full 
          left-0 
          mt-1 
          bg-white 
          border 
          border-gray-200 
          rounded-md 
          shadow-lg 
          z-50
          min-w-fit
          overflow-hidden
        "
        >
          <div role="listbox" className="py-1">
            {items.map((option) => (
              <div
                key={option.value}
                role="option"
                aria-selected={option.value === locale}
                onClick={() => handleOptionClick(option.value as LocaleType)}
                className={`
                  px-3 
                  py-2 
                  text-xs 
                  cursor-pointer 
                  transition-colors 
                  duration-150
                  ${
                    option.value === locale
                      ? 'bg-blue-50 text-blue-600 font-medium'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }
                `}
              >
                {option.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
