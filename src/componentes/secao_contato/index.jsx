import Image from "next/image";
import local from "../../../public/local.png";
import telefone from "../../../public/telefone.png";
import email from "../../../public/email.png";
import facebook from "../../../public/fb.png";
import instagran from "../../../public/ig.png";
import twiter from "../../../public/tt.png";
import estilos from "./contato.module.css";
export default function Secao_contato() {
  return (
    <div className={estilos.secao_contato} id="Contato">
      <div className={estilos.subtitulo}>
        <h3>Fale conosco</h3>
        <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento</p>
      </div>
      <div className={estilos.contato_redes}>
        <div className={estilos.card_contato_rede}>
          <h4>Nossos Contatos</h4>
          <p><Image className={estilos.img} src={local} alt="imagem de local" /> Nova Iguaçu, RJ</p>
          <p><Image className={estilos.img} src={telefone} alt="imagem de um telefone" /> (21) 99999-9999</p>
          <p><Image className={estilos.img} src={email} alt="imagem de um carta" /> contato@oticavida.com</p>
        </div>
        <div className={estilos.card_contato_rede}>
          <h4>Nossos Redes Sociais</h4>
          <p><Image className={estilos.img} src={facebook} alt="simbolo de facebook" /> /oticavida</p>
          <p><Image className={estilos.img} src={instagran} alt="símbolo do instragram" /> @oticavidarj</p>
          <p><Image className={estilos.img} src={twiter} alt="símbolo do twiter" /> @oticavidarj</p>
        </div>
      </div>
    </div>
  )
}