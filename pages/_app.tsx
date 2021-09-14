import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'antd/dist/antd.css';
import GlobalStyle from '@styles/global-style';
import wrapper from 'store/configureStore';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <title>Twitter Clone</title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Twitter Clone" />
        <meta property="og:url" content="https://twitter-mnxmnz.vercel.app/" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(App);
