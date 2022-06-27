import "../styles/index.scss";
import type { AppProps } from "next/app";
import { withTRPC } from "@trpc/next";
import { httpLink } from "@trpc/client/links/httpLink";
import { AnimatePresence } from "framer-motion";
import { AppRouter } from "./api/trpc/[trpc]";
import { AppProvider } from "../src/store/context";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AppProvider>
			<AnimatePresence exitBeforeEnter>
				<Component {...pageProps} />
			</AnimatePresence>
		</AppProvider>
	);
}

export default withTRPC<AppRouter>({
	config({ ctx }) {
		/**
		 * If you want to use SSR, you need to use the server's full URL
		 * @link https://trpc.io/docs/ssr
		 */
		const url = process.env.VERCEL_URL
			? `https://${process.env.VERCEL_URL}/api/trpc`
			: "http://localhost:3000/api/trpc";

		return {
			url,
			links: [
				httpLink({
					url: "/api/trpc",
				}),
			],
			/**
			 * @link https://react-query.tanstack.com/reference/QueryClient
			 */
			// queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
		};
	},
	/**
	 * @link https://trpc.io/docs/ssr
	 */
	ssr: true,
})(MyApp);
