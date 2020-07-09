import Link from 'next/link'
import Head from 'next/head'

export default function Layout({
  children,
  title = 'This is the default title',
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
          <Link href="/home/product?id=10">
            <a>Home</a>
          </Link>{' '}
          |
          {/* <Link href="/about"> */}
            <a href="/about">About</a>
          {/* </Link>{' '} */}
          |
          {/* dynamic router param */}
          <Link href="/post/[name]/[id]?age=22" as="/post/abc/1?age=22">
            <a>Contact</a>
          </Link>
          <Link href="/covid">
            <a>Virus corona</a>
          </Link>
        </nav>
      </header>

      {children}

      <footer>{'I`m here to stay'}</footer>
    </div>
  )
}