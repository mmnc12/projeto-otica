import Image from "next/image";
import loja from "../../../public/loja.png";
import atendimento from "../../../public/atendimento.png";
import estilos from "./sobre.module.css";

export default function Secao_sobre() {
  return (
    <div className={estilos.secao_sobre} id="Sobre">
      <div className={estilos.subtitulo}>
        <h2>QUEM SOMOS NÓS?</h2>
        <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Ótica vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>
      </div>
      <div className={estilos.cards}>
        <div className={estilos.card}>
          <Image className={estilos.img} src={loja} alt="imagem da caixa de remédio em pratileiras" />
        </div>
        <div className={estilos.card}>
          <h3>NOSSAS FILIAIS</h3>
          <p>Hoje tem mais de 20 filiais pelo Brasil e na América</p>
        </div>
        <div className={estilos.card}>
          <h3>ATENDIMENTO FLEXÍVEL</h3>
          <p>Nossa equipe possui é treinada para te atender</p>
        </div>
        <div className={estilos.card}>
          <Image className={estilos.img} src={atendimento} alt="Imagem de uma mulher branca atendendo outra mulher braca" />
        </div>
      </div>
    </div>
  )
}