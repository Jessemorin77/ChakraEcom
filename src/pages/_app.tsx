import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { CartProvider } from "../components/context/CartContext.tsx";
import Chakra from "../components/chakra";
import Navbar from "../components/Navbar";
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
        </CartProvider>
      </SessionProvider>
    </Chakra>
  );
};

export default api.withTRPC(MyApp);
