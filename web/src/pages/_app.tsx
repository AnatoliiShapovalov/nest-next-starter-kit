import { AppProps } from 'next/app';
import Layout from './_layout';
import '../styles/globals.css';
import { Provider } from 'react-redux';

export default function MyApp({
  Component,
  pageProps,
  router,
}: AppProps & { router: any }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
