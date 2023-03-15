import { GetServerSideProps } from 'next'

const ProductDetail: React.FC = (params: any) => {
  const { product } = params
  return (
    <div>detail: {product.title}</div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { query: { id } } = ctx
  const res = await fetch(`https://dummyjson.com/product/${id}`)
  const product = await res.json()
  return {
    props: {
      product
    }
  }
}

export default ProductDetail