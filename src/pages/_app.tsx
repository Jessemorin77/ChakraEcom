import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { CartProvider } from "../components/context/CartContext";
import Chakra from "../components/chakra";
import Navbar from "../components/Navbar";
import Footer from "../components/footer"

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <Chakra cookies={pageProps.cookies}>
      <SessionProvider session={session}>
        <CartProvider>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </CartProvider>
      </SessionProvider>
    </Chakra>
  );
};

export default api.withTRPC(MyApp);
