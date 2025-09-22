import React from 'react'
import { formatCategory } from '../utils/format-category'

interface CategoryFilterProps {
  categories: string[]
  selectedCategory: string | null
  onCategorySelect: (category: string | null) => void
  className?: string
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategorySelect,
  className,
}) => {
  return (
    <div
      className={`bg-white rounded-lg border border-gray-200 shadow-sm p-3 sm:p-4 ${className}`}
    >
      <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
        Категории
      </h2>

      <div className="overflow-x-auto pb-2 sm:pb-0">
        <div className="flex gap-2 min-w-max sm:min-w-0 sm:flex-wrap">
          <button
            onClick={() => onCategorySelect(null)}
            className={`
              flex-shrink-0 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full 
              text-xs sm:text-sm font-medium transition-all duration-200 
              whitespace-nowrap
              ${
                selectedCategory === null
                  ? 'bg-zinc-800 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 active:bg-gray-300'
              }
            `}
          >
            Показать все
          </button>

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategorySelect(category)}
              className={`
                flex-shrink-0 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full 
                text-xs sm:text-sm font-medium transition-all duration-200 
                whitespace-nowrap
                ${
                  selectedCategory === category
                    ? 'bg-zinc-800 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 active:bg-gray-300'
                }
              `}
            >
              {formatCategory(category)}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
