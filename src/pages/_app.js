import '@/styles/globals.css'
import theme from '@/styles/theme';
import { ThemeProvider } from '@mui/material/styles';
// import { maconda, montserrat } from '@/utils/fonts';
import { useRouter } from 'next/router';
import EmptyLayout from '@/layout/EmptyLayout';
import NavBar from '@/components/NavBar';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter()
  const Layout = Component.Layout || EmptyLayout

  // useEffect(() => {
  //   const handleRouterChange = () => {
  //     const token = localStorage.getItem('token')
  //     console.log('inside handle router change ', token)
  //     if (!token) {
  //       // router.push('/sign-in')
  //       console.log('hello');
  //     }
  //   }

  //   router.events.on('routeChangeStart', handleRouterChange)

  //   return () => {
  //     router.events.off('routeChangeStart', () => {
  //       console.log('stopped')
  //     })
  //   }
  // }, [router.events])

  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <NavBar />

        {/* <HomeBackground > */}
        <div id='main-container'
        // className={montserrat.className}
        >

          <Layout {...pageProps}>
            <Component {...pageProps} />

          </Layout>

        </div>
        {/* </HomeBackground> */}
      </ThemeProvider>
    </SessionProvider>
  )
}


