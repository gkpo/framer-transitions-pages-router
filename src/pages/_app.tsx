import { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <AnimatePresence mode="wait">
      <div key={router.route}>
        <Component {...pageProps} />
      </div>
    </AnimatePresence>
  );
}

export default App;
