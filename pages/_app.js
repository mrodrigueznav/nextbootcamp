import { CssBaseline, ThemeProvider } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import Head from 'next/head';
import theme from '../styles/theme';
import createEmotionCache from './createEmotionCache';
import '../styles/globals.css';

const cache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = cache, pageProps } = props;
	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Component {...pageProps} />
			</ThemeProvider>
		</CacheProvider>
	);
}

export default MyApp;
