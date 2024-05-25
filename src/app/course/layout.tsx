import Link from 'next/link'
 
export default function Layout({
  test1,
  test2,
}: {
  test1: React.ReactNode
  test2: React.ReactNode
}) {
  return (
    <>
      <nav>
        <Link href="/course/banner">Open modal</Link>
      </nav>
      <div>{test1}</div>
      <div>{test2}</div>
    </>
  )
}