import React from 'react'

type caculo1Props = {
  codigo: string,
  nome: string,
  horario: number
}

export default function DisciplinaProps({ codigo, nome }: caculo1Props) {

  return (

    <>
      <div className='calculo1'>
        <div>{codigo}</div>
        <div>{nome}</div>
      </div>

    </>
  )
}
