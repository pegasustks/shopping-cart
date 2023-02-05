import GlobalStyles from "@/styles/global";
import { colors } from "@/styles/theme";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={colors}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}
