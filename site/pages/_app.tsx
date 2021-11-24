import '@assets/main.css'
import '@assets/chrome-bug.css'

import { FC } from 'react'
import type { AppProps } from 'next/app'

const Noop: FC = ({ children }) => <>{children}</>

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop

  return (
    <div className="bg-slate-200">
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
