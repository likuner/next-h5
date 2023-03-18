import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import styles from './index.module.css'
import { nodeGet } from '@/lib/node-request'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // const res:any = await nodeGet('/products')
  // const { products } = res
  const products: any = []
  return {
    props: {
      products
    }
  }
}

interface IProps {
  products: any[]
}

const ProductList: React.FC<IProps> = (props) => {
  const router = useRouter()
  const { products = [] } = props

  const handleClick = (e: any) => {
    router.push(`/products/${e.id}`)
  }
  
  return (
    <>
      products page
      <ul className={styles.inline}>
        {products.map((item: any) => 
          <li key={item.id} onClick={() => handleClick(item)}>{item.title}</li>
        )}
      </ul>
    </>
  )
}

export default ProductList