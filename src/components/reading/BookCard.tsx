"use client"

import { BookType } from '@/config/books'
import { BookOpen, Calendar, Star } from 'lucide-react'
import Image from 'next/image'

export function BookCard({ book }: { book: BookType }) {
  return (
    <div className="group relative flex flex-col h-full break-inside-avoid mb-6">
      <div className="relative flex flex-col h-full w-full rounded-2xl border border-muted-foreground/20 shadow-sm transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl group-hover:border-primary/30 group-hover:bg-gradient-to-br group-hover:from-primary/5 group-hover:via-transparent group-hover:to-primary/5 overflow-hidden">
        {/* 书籍封面 */}
        <div className="relative w-full aspect-[3/4] bg-gradient-to-br from-primary/10 via-muted/20 to-primary/5 overflow-hidden">
          {book.cover ? (
            <Image
              src={book.cover}
              alt={book.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <BookOpen size={64} className="text-primary/30" />
            </div>
          )}
          {/* 评分角标 */}
          {book.rating && (
            <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 shadow-lg">
              <Star size={14} className="text-yellow-500 fill-yellow-500" />
              <span className="text-xs font-semibold">{book.rating}</span>
            </div>
          )}
        </div>

        {/* 书籍信息 */}
        <div className="p-4 flex flex-col gap-3">
          {/* 标题和作者 */}
          <div>
            <h3 className="text-base font-semibold tracking-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
              {book.title}
            </h3>
            {book.author && (
              <p className="text-sm text-muted-foreground mt-1">{book.author}</p>
            )}
          </div>

          {/* 阅读日期 */}
          {book.readDate && (
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar size={14} />
              <span>{book.readDate}</span>
            </div>
          )}

          {/* 书评 */}
          {book.review && (
            <p className="text-sm text-muted-foreground line-clamp-3">
              {book.review}
            </p>
          )}

          {/* 标签 */}
          {book.tags && book.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {book.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

