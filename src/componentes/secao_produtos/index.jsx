import estilos from './secao_produtos.module.css';
import Image from 'next/image';
import oculos01 from "../../../public/oculos01.png";
import oculos02 from "../../../public/oculos02.png";
import oculos03 from "../../../public/oculos03.png";
import oculos04 from "../../../public/oculos04.png";
export default function Secao_produtos() {
  return (
    <div className={estilos.container_secao_produtos} id='Produtos'>
      <div className={estilos.subtitulo}>
        <h3>Nossos Produtos</h3>
        <p>Trabalhamos com ôculos de grau, ôculos de sol, lentes transition nos modelos masculino, feminino e infatil.</p>
        <p> Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
      </div>
      <div className={estilos.imagem_texto}>
        <div className={estilos.imagem}>
          <h4>Ôculos de grau</h4>
          <Image className={estilos.img} src={oculos01} alt="ôculos de grau" />
          <p>R$ 500,00</p>
        </div>
        <div className={estilos.imagem}>
          <h4>Ôculos de transition</h4>
          <Image className={estilos.img} src={oculos02} alt="ôculos de transition" />
          <p>R$ 750,00</p>
        </div>
        <div className={estilos.imagem}>
          <h4>Ôculos de sol</h4>
          <Image className={estilos.img} src={oculos03} alt="ôculos de sol" />
          <p>R$ 700,00</p>
        </div>
        <div className={estilos.imagem}>
          <h4>Ôculos de intantil</h4>
          <Image className={estilos.img} src={oculos04} alt="ôculos intantil" />
          <p>R$ 500,00</p>
        </div>
      </div>
      <div className={estilos.garantia_produto}>
        <h4>Todos os nosso produtos incluem:</h4>
        <ul>
          <li>Garantia de 1 ano</li>
          <li>Manutenção preventiva</li>
          <li>Descontos especiais na compra da segunda unidade</li>
          <li>Flixibilidade de pagamentos</li>
        </ul>
      </div>
    </div>
  )
}