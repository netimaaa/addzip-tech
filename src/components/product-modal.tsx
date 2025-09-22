import React from 'react'
import { X } from 'lucide-react'
import type { ClothesDataType } from '../App'
import { getStarRate } from '../utils/get-star'
import { formatCategory } from '../utils/format-category'

interface ProductModalProps {
  isOpen: boolean
  onClose: () => void
  product: ClothesDataType | null
}

export const ProductModal: React.FC<ProductModalProps> = ({
  isOpen,
  onClose,
  product,
}) => {
  if (!isOpen || !product) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={onClose}
      tabIndex={-1}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-xl shadow-2xl overflow-hidden"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
          aria-label="Закрыть модальное окно"
        >
          <X size={20} className="text-gray-600" />
        </button>

        <div className="overflow-y-auto max-h-[90vh]">
          <div className="relative bg-gray-50 p-6 sm:p-8">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 sm:h-64 md:h-80 object-contain"
            />
          </div>

          <div className="p-6 sm:p-8">
            <div className="mb-3">
              <span className="inline-block px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full">
                {formatCategory(product.category)}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              {product.title}
            </h2>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {getStarRate(product.rating.rate)}
                <span className="text-sm font-medium text-gray-700">
                  {product.rating.rate}
                </span>
              </div>
              <span className="text-sm text-gray-500">
                ({product.rating.count} отзывов)
              </span>
            </div>

            <div className="mb-6">
              <span className="text-3xl font-bold text-green-600">
                {product.price.toFixed(0)} ₽
              </span>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Описание
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
