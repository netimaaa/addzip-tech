import { useEffect, useState } from 'react'
import { CardList } from './components/card-list'
import { CategoryFilter } from './components/category-filter'
import { ProductModal } from './components/product-modal'

interface ClothesRating {
  count: number
  rate: number
}

export interface ClothesDataType {
  category: string
  image: string
  title: string
  description: string
  price: number
  id: number
  rating: ClothesRating
}

const CATEGORIES = [
  'electronics',
  'jewelery',
  "men's clothing",
  "women's clothing",
]

function App() {
  const [clothesData, setClothesData] = useState<ClothesDataType[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedProduct, setSelectedProduct] =
    useState<ClothesDataType | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  const getClothes = async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('https://fakestoreapi.com/products')
      if (!res.ok) throw new Error(`Ошибка: ${res.status}`)
      const data = await res.json()
      setClothesData(data)
    } catch (e: any) {
      console.error(`Ошибка: ${e}`)
      setError('Не удалось загрузить товары')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getClothes()
  }, [])

  const filteredItems = selectedCategory
    ? clothesData.filter((item) => item.category === selectedCategory)
    : clothesData

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category)
  }

  const handleProductClick = (product: ClothesDataType) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  return (
    <main className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <CategoryFilter
          categories={CATEGORIES}
          selectedCategory={selectedCategory}
          onCategorySelect={handleCategorySelect}
          className="mb-6"
        />

        {loading ? (
          <div className="flex items-center justify-center min-h-[50vh]">
            <p className="text-center text-gray-600 text-lg">Загрузка...</p>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center min-h-[50vh]">
            <p className="text-center text-red-600 text-lg">{error}</p>
          </div>
        ) : filteredItems.length === 0 ? (
          <div className="flex items-center justify-center min-h-[50vh]">
            <p className="text-center text-gray-600 text-lg">Нет товаров</p>
          </div>
        ) : (
          <>
            <div className="mb-4">
              <p className="text-sm text-gray-600">
                {`Всего товаров: ${filteredItems.length}`}
              </p>
            </div>

            <CardList
              items={filteredItems}
              onProductClick={handleProductClick}
            />
          </>
        )}

        <ProductModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          product={selectedProduct}
        />
      </div>
    </main>
  )
}

export default App
