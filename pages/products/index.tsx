import logger from '@/lib/logger'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import styles from './index.module.css'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  logger.info(ctx.query)
  const res = await fetch('https://dummyjson.com/products')
  const { products } = await res.json()
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
    <ul className={styles.inline}>
      {products.map((item: any) => 
        <li key={item.id} onClick={() => handleClick(item)}>{item.title}</li>
      )}
    </ul>
  )
}

export default ProductList