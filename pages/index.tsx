export default function Home() {
  const flag = process.env.NEXT_PUBLIC_FLAG
  console.log(flag)
  return (
    <div>Index Page</div>
  )
}
