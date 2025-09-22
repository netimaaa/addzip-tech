import React from 'react'
import { CardItem } from './card-item'
import type { ClothesDataType } from '../App'

interface Props {
  className?: string
  items: ClothesDataType[]
  onProductClick: (product: ClothesDataType) => void
}

export const CardList: React.FC<Props> = ({
  className,
  items,
  onProductClick,
}) => {
  return (
    <div className={`w-full max-w-7xl mx-auto px-2 sm:px-4 ${className}`}>
      <div
        className="
        grid gap-3 sm:gap-4 md:gap-6
        grid-cols-2 
        md:grid-cols-4
      "
      >
        {items.map((item) => (
          <CardItem
            key={item.id}
            clothData={item}
            onClick={() => onProductClick(item)}
          />
        ))}
      </div>
    </div>
  )
}
