import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'

export default function Home() {
  const [products, setProducts] = useState([])

  const router = useRouter()
  
  const fetchData = useCallback(async () => {
    const res = await fetch('https://dummyjson.com/products')
    const { products } = await res.json()
    setProducts(products)
  }, [])

  // useEffect(() => {
  //   fetchData()
  // }, [])

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
