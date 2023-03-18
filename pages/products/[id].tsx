import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { nodeGet } from '@/lib/node-request'
import { logger } from '@/lib/logger'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { query: { id } } = ctx
  const res: any = await nodeGet(`/product/${id}`)
  return {
    props: {
      product: res
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