import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Topo from "@/componentes/topo";
import Secao_capa from "@/componentes/secao_capa";
import Secao_produtos from "@/componentes/secao_produtos";
import Secao_sobre from "@/componentes/secao_sobre";
import Secao_contato from "@/componentes/secao_contato";
import Rodape from "@/componentes/rodape";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Topo />
      <Secao_capa />
      <Secao_produtos />
      <Secao_sobre />
      <Secao_contato />
      <Rodape />
    </>
  );
}
