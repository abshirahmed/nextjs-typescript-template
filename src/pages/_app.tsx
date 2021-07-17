import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import { FunctionComponent } from 'react';

const MyApp: FunctionComponent<AppProps> = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;
export default MyApp;
