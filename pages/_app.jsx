import { motion } from "framer-motion";
import { useRouter } from "next/router";

import Layout from "../components/Layout";
import Transition from "../components/Transition";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Layout>
      <motion.div key={router.route} className="h-full">
        <Transition />
        <Component {...pageProps} />
      </motion.div>
    </Layout>
  );
}

export default MyApp;
