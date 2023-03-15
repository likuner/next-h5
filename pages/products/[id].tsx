import { useRouter } from 'next/router'

const ProductDetail: React.FC = () => {
  const router = useRouter()
  const { query: { id } = {} } = router
  return (
    <div>detail-{id}</div>
  )
}

export const getServerSideProps = async (params: any) => {
  console.log(params, 'params')
  const res = await fetch('https://dummyjson.com/product/1')
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}

export default ProductDetail