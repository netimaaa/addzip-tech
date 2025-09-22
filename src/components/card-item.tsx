import React from 'react'
import type { ClothesDataType } from '../App'
import { getStarRate } from '../utils/get-star'

interface CardItemProps {
  className?: string
  clothData: ClothesDataType
  onClick: () => void
}

export const CardItem: React.FC<CardItemProps> = ({
  className,
  clothData,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        flex flex-col h-full rounded-xl border border-gray-200 bg-white 
        p-3 sm:p-4 shadow-sm hover:shadow-lg hover:scale-[1.02] 
        transition w-full cursor-pointer
        ${className}
      `}
    >
      <div className="relative overflow-hidden rounded-lg mb-3">
        <img
          src={clothData.image}
          alt={clothData.title}
          className="w-full h-32 sm:h-40 md:h-48 object-contain transition-transform duration-200"
        />
      </div>

      <div className="flex flex-col flex-grow text-left">
        <h3 className="text-xs sm:text-sm font-bold uppercase text-gray-900 mb-2 line-clamp-2">
          {clothData.title}
        </h3>

        <p className="text-xs sm:text-sm text-gray-600 mb-3 flex-grow line-clamp-2">
          {clothData.description}
        </p>

        <div className="flex items-center justify-between text-sm sm:text-base mt-auto">
          <p className="font-bold text-green-600">
            {clothData.price.toFixed(0)} ₽
          </p>
          <div className="flex items-center gap-1">
            {getStarRate(clothData.rating.rate)}
            <span className="text-xs sm:text-sm font-medium">
              {clothData.rating.rate}
            </span>
            <span className="text-black/50 text-xs font-medium">
              ({clothData.rating.count})
            </span>
          </div>
        </div>
      </div>
    </button>
  )
}
