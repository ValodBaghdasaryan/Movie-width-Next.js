import "@/api/axios";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SupportBtn } from "@/components/SupportBtn/SupportBtn";
import { Provider } from "react-redux";
import store from "@/store/store";
import MovieVideoBtn from "@/components/MovieVideoBtn/MovieVideoBtn";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // With SSR, we usually want to set some default staleTime
      // above 0 to avoid refetching immediately on the client
      staleTime: 60 * 1000,
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Head>
          <title>Best Movies!</title>
        </Head>
        <Component {...pageProps} />
        <SupportBtn />
      </Provider>
    </QueryClientProvider>
  );
}
