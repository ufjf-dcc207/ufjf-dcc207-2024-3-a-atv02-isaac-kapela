import Calculo from  "./Calculo1"

export default function Grade() {
  return (
    <>
    <div className='grade'>
            <Calculo codigo='Cálculo 1' nome='Cálculo 1' horario= {1230}/>
            <Calculo codigo="xxxxxxxx" nome= "Geometria analitica" horario= {1230}/>
            <Calculo codigo ="xxxxxx" nome ="algo" horario= {1230}/>
            
            </div> 
    </>
  )
}
