import '@assets/main.css'
import '@assets/chrome-bug.css'

import { FC } from 'react'
import type { AppProps } from 'next/app'
import { TabSquareProvider } from 'tabsquare/context'
import { ThemeProvider } from 'next-themes'

const Noop: FC = ({ children }) => <>{children}</>

export default function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop
  const Group = (Component as any).Group || Noop

  return (
    <ThemeProvider defaultTheme="light">
      <TabSquareProvider>
        <Layout pageProps={pageProps}>
          <Group>{<Component {...pageProps} />}</Group>
        </Layout>
      </TabSquareProvider>
    </ThemeProvider>
  )
}
