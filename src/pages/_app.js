import '@/styles/globals.css'
import theme from '@/styles/theme';
import { ThemeProvider } from '@mui/material/styles';
import { maconda } from '@/utils/fonts';
import HomeBackground from '@/components/HomeBackground';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import EmptyLayout from '@/layout/EmptyLayout';
import NavBar from '@/components/NavBar';

export default function App({ Component, pageProps }) {
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
    <ThemeProvider theme={theme}>
      {/* <HomeBackground > */}
        <div id='main-container'
        // className={maconda.className}
        >
          <Layout {...pageProps}>
            <NavBar />
            <Component {...pageProps} />

          </Layout>

        </div>
      {/* </HomeBackground> */}
    </ThemeProvider>

  )
}


