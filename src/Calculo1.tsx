import React from 'react'


type caculo1Props ={
    codigo: string,
    nome: string

}

export default function Calculo1({codigo, nome}: caculo1Props) {

  return (

    <>
    <div className='calculo1'>
            <div>{codigo}</div>
            <div>{nome}</div>
    </div>
   
    </>
  )
}
