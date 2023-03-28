
import Link from 'next/link'




export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <Link href='/users'>PRODUCTS</Link>
      <Link href='/posts'> Posts </Link>
      <Link href='/products'>Json Api</Link>
    </>
  )
}
