import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.png";
import estilos from "./Topo.module.css";
export default function Topo() {
  return (
    <div className={estilos.container_topo}>
      <div className={estilos.logo_liks}>
        <div className={estilos.logo}>
          <Image className={estilos.logo_img} src={logo} alt="imagem da logo marca" />
        </div>
        <nav>
          <Link className={estilos.link} href="#Produtos">PRODUTOS</Link>
          <Link className={estilos.link} href="#Sobre">SOBRE</Link>
          <Link className={estilos.link} href="#Contato">CONTATO</Link>
        </nav>
      </div>
    </div>
  )
}