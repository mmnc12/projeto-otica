import estilos from './secao_capa.module.css';

export default function Secao_capa() {
  return (
    <div className={estilos.secao_capa}>
      <div className={estilos.titulo_paragrafo}>
        <div className={estilos.titulo}>
          <p>Preços baixos em</p>
          <h1>ÔCULOS DE GRAU E DE SOL</h1>
          <p>você só encontra aqui</p>
        </div>
      </div>
    </div>
  )
}