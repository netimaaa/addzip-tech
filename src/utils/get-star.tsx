import { Star, StarHalf } from 'lucide-react'

export function getStarRate(rate: number) {
  if (rate > 4) {
    return <Star size={16} fill="#FFFF00" color="#FFFF00" />
  } else if (rate > 2) {
    return <StarHalf size={16} fill="#FFFF00" color="#FFFF00" />
  } else {
    return <Star size={16} color="#FFFF00" />
  }
}
