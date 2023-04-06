import '@/styles/globals.css'
import theme from '@/styles/theme';
import { ThemeProvider } from '@mui/material/styles';
import { maconda } from '@/utils/fonts';
import HomeBackground from '@/components/HomeBackground';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <HomeBackground >
        <div id='main-container' className={maconda.className}>
          <Component {...pageProps} />
        </div>
      </HomeBackground>
    </ThemeProvider>

  )
}
