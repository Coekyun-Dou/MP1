"use client"

import { ReactNode } from 'react'

interface MasonryGridProps {
  children: ReactNode
  columns?: number
}

export function MasonryGrid({ children, columns = 3 }: MasonryGridProps) {
  return (
    <>
      <style jsx>{`
        .masonry-grid {
          column-count: ${columns};
          column-gap: 1.5rem;
        }
        
        @media (max-width: 640px) {
          .masonry-grid {
            column-count: 1;
          }
        }
        
        @media (min-width: 641px) and (max-width: 1024px) {
          .masonry-grid {
            column-count: 2;
          }
        }
      `}</style>
      <div className="w-full masonry-grid">
        {children}
      </div>
    </>
  )
}

