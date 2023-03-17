import logger from '@/lib/logger'
import { GetServerSideProps } from 'next'
import Head from 'next/head'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { query: { id } } = ctx
  logger.info(id)
  const res = await fetch(`https://dummyjson.com/product/${id}`)
  const product = await res.json()
  return {
    props: {
      product
    }
  }
}

const ProductDetail: React.FC = (params: any) => {
  const { product } = params
  return (
    <>
      <Head>
        <meta name="description" content="Product detail page"></meta>
      </Head>
      <div>id: {product.id}</div>
      <div>title: {product.title}</div>
    </>
  )
}

export default ProductDetail