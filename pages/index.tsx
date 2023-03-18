import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { get } from '@/lib/request'

export default function Home() {
  const [products, setProducts] = useState([])

  const router = useRouter()
  
  const fetchData = useCallback(async () => {
    const res: any = await get('/products')
    const { products } = res
    setProducts(products)
  }, [])

  useEffect(() => {
    fetchData()
  }, [])

  const handleClick = (e: any) => {
    router.push(`/products/${e.id}`)
  }

  return (
    <ul>
      <li>Index Page</li>
      {products.map((item: any) => 
        <li key={item.id} onClick={() => handleClick(item)}>{item.title}</li>
      )}
    </ul>
  )
}
