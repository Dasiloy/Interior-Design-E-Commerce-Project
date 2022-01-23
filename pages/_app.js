import { GlobalStyles } from "twin.macro";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import store from "redux/store";
import NextNProgress from "nextjs-progressbar";
import "styles/globals.css";
import "antd/dist/antd.css";

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<SessionProvider session={session}>
					<GlobalStyles />
					<NextNProgress color="#5f4435" />
					<Component {...pageProps} />
				</SessionProvider>
			</Provider>
			<ReactQueryDevtools position="bottomleft" initialIsOpen={false} />
		</QueryClientProvider>
	);
};

export default App;
