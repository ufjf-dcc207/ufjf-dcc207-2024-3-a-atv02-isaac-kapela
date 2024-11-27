import Disciplina from "./DisciplinaProps";
import "./Grade.css"; 

export default function Grade() {
  return (
      <>
    <div className="grade">
        <Disciplina  
          codigo="DCC160 B"
          nome="LÓGICA FUNDAMENTOS PARA A COMPUTAÇÃO "
          horario={1230}
        />
        <Disciplina codigo="DCC200 A" nome="ALGORITMOS II" horario={1230} />
        <Disciplina
          codigo="DCC207 A"
          nome="DESENVOLVIMENTO WEB FRONT-END"
          horario={1230}
        />
        <Disciplina
          codigo="DC5200 A"
          nome="ALGORITMOS II PRÁTICA  "
          horario={1230}
        />
        <Disciplina
          codigo="EADDCC044 A"
          nome="INFORMÁTICA E SOCIEDADE"
          horario={1230}
        />
        <Disciplina
          codigo="FIN001 A"
          nome="CONTABILIDADE GERAL E INTRODUTORIA"
          horario={1230}
        />
        <Disciplina codigo="MAT154E Y" nome="CÁLCULO I" horario={1230} />
        <Disciplina
          codigo="MAT155 A"
          nome="GEOMETRIA ANALÍTICA E SISTEMAS"
          horario={1230}
        />
        <Disciplina
          codigo="UNI001 G"
          nome="LINGUA INGLESA INSTRUMENTAL I"
          horario={1230}
        />
      </div>
    </>
  );
}
