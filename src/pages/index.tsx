import Head from "next/head";
import { HomePage } from "@/Views/Home";

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Simples layout de carrinho de loja online, buscando o minimalismo e experiencia do usuário. Feito por Rian Carlos(pegasustks)"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Shopping Cart</title>
      </Head>
      <HomePage />
    </>
  );
}
