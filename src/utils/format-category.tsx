export function formatCategory(category: string) {
  switch (category) {
    case 'electronics':
      return 'Электроника'
    case 'jewelery':
      return 'Ювелирные изделия'
    case "men's clothing":
      return 'Мужская одежда'
    case "women's clothing":
      return 'Женская одежда'
    default:
      return category
  }
}
