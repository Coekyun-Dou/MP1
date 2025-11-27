import { SimpleLayout } from '@/components/layout/SimpleLayout'
import { books, readingPageConfig } from '@/config/books'
import { BookCard } from '@/components/reading/BookCard'
import { MasonryGrid } from '@/components/reading/MasonryGrid'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: '阅读',
  description: readingPageConfig.description,
}

export default function ReadingPage() {
  return (
    <SimpleLayout
      title={readingPageConfig.headline}
      intro={readingPageConfig.description}
    >
      <MasonryGrid columns={3}>
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </MasonryGrid>
    </SimpleLayout>
  )
}

