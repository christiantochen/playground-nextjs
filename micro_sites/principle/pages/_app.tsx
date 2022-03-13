import '@assets/main.css'
import '@assets/chrome-bug.css'

import { FC } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

const Noop: FC = ({ children }) => <>{children}</>

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop

  return (
    <ThemeProvider defaultTheme="light">
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
