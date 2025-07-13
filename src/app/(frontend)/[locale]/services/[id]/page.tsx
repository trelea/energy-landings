import { getPayload } from 'payload'
import config from '../../../../../payload.config'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

export default async function ServicePage({
  params,
}: {
  params: Promise<{ id: string; locale: string }>
}) {
  const { id, locale } = await params
  const payload = await getPayload({ config })

  const response = await payload.find({
    collection: 'services',
    where: {
      id: {
        equals: id,
      },
    },
  })

  const service = response.docs[0]

  if (!service) return notFound()

  const t = await getTranslations('Services')

  const title = locale === 'ru' ? service.title_ru : service.title_ro
  const description = locale === 'ru' ? service.description_ru : service.description_ro
  const detailedDescription =
    locale === 'ru' ? service.detailedDescription_ru : service.detailedDescription_ro

  return (
    <main className="flex flex-col w-full items-center justify-center">
      <Navbar isDarkMode />

      <div className="container max-w-screen-md xl:max-w-screen-xl w-full mx-auto px-4 py-10">
        <div className="flex flex-col items-center text-center mb-10">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-[#666666] max-w-2xl">{description}</p>
        </div>

        {typeof service.image === 'object' && service.image?.url && (
          <div className="relative w-full aspect-video mb-10 rounded-xl overflow-hidden">
            <Image
              src={service.image.url}
              alt={service.image.alt || title}
              width={1280}
              height={720}
              className="object-cover"
            />
          </div>
        )}

        <div className="prose max-w-none">
          {detailedDescription.root.children.map((block: any, i: number) => (
            <p key={i}>{block.children?.map((child: any) => child.text).join(' ')}</p>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
