import Calculo from "./Calculo1";

export default function Grade() {
  return (
    <>
      <div className="grade">
        <Calculo
          codigo="DCC160 B"
          nome="LÓGICA FUNDAMENTOS PARA A COMPUTAÇÃO "
          horario={1230}
        />
        <Calculo codigo="DCC200 A" nome="ALGORITMOS II" horario={1230} />
        <Calculo
          codigo="DCC207 A"
          nome="DESENVOLVIMENTO WEB FRONT-END"
          horario={1230}
        />
        <Calculo
          codigo="DC5200 A"
          nome="ALGORITMOS II PRÁTICA  "
          horario={1230}
        />
        <Calculo
          codigo="EADDCC044 A"
          nome="INFORMÁTICA E SOCIEDADE"
          horario={1230}
        />
        <Calculo
          codigo="FIN001 A"
          nome="CONTABILIDADE GERAL E INTRODUTORIA"
          horario={1230}
        />
        <Calculo codigo="MAT154E Y" nome="CÁLCULO I" horario={1230} />
        <Calculo
          codigo="MAT155 A"
          nome="GEOMETRIA ANALÍTICA E SISTEMAS"
          horario={1230}
        />
        <Calculo
          codigo="UNI001 G"
          nome="LINGUA INGLESA INSTRUMENTAL I"
          horario={1230}
        />
      </div>
    </>
  );
}
