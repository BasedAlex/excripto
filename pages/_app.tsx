import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Roboto } from '@next/font/google'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			cacheTime: 1 * 60 * 60 * 1000,
			staleTime: 1 * 60 * 60 * 1000,
		},
	},
})

const roboto = Roboto({
	subsets: ['latin'],
	weight: ['400', '500', '700'],
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<main className={roboto.className}>
				<Component {...pageProps} />
			</main>
			<ReactQueryDevtools />
		</QueryClientProvider>
	)
}
