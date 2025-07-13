import { getPayload } from 'payload'
import config from '../../../../../payload.config'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'
import { LexicalComposer } from '@lexical/react/LexicalComposer' // dacă folosești pentru rich text

import Image from 'next/image'

export default async function Blog({
  params,
}: {
  params: Promise<{ id: string; locale: string }>
}) {
  const { id, locale } = await params
  const payload = await getPayload({ config })

  const response = await payload.find({
    collection: 'news',
    where: {
      id: {
        equals: id,
      },
    },
  })

  const post = response.docs[0]

  if (!post) return notFound()

  const t = await getTranslations('News')

  const title = locale === 'ru' ? post.title_ru : post.title_ro
  const excerpt = locale === 'ru' ? post.excerpt_ru : post.excerpt_ro
  const content = locale === 'ru' ? post.content_ru : post.content_ro

  return (
    <div className="flex flex-col w-full items-center justify-center">
      <Navbar isDarkMode />

      <main className="container max-w-screen-md xl:max-w-screen-xl w-full mx-auto px-4 py-10">
        <div className="flex flex-col items-center">
          <span className="text-gray-500 text-sm mb-4 block">
            {new Date(post.publishedDate).toLocaleDateString(locale)}
          </span>

          <div className="flex flex-col gap- items-center gap-2 lg:gap-4 max-w-screen-md">
            <h1 className="text-3xl lg:text-5xl font-bold text-center">{title}</h1>
            <p className="text-[#666666] mb-6">{excerpt}</p>
          </div>

          {typeof post.featuredImage === 'object' && post.featuredImage?.url && (
            <div className="relative w-full aspect-video mb-8 rounded-xl overflow-hidden">
              <Image
                src={post.featuredImage.url}
                alt={post.featuredImage.alt || title}
                width={1280}
                height={480}
                className="object-cover"
              />
            </div>
          )}

          {/* Render content as plain text — or render Lexical content if needed */}
          <div className="prose max-w-none">
            {content.root.children.map((block: any, i: number) => (
              <p key={i}>{block.children?.map((child: any) => child.text).join(' ')}</p>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
