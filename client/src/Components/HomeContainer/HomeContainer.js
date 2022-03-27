import React from 'react'
import Form from '../Form/Form'
import Title from '../ui/Title/Title'

const HomeContainer = () => {
  return (
    <>
      <Title header="Pokédex" subheader='Search for your favourite Pokémon' />
      <Form />
    </>
  )
}

export default HomeContainer