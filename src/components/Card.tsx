import React from 'react';

interface ICard {
  id: number,
  paragraph: string,
  details: string
}

export const Card = ({ id, paragraph, details }: ICard ) => {
  return(
    <>
      <h1>Card {id}</h1>
      <p>{paragraph}</p>
      <p>{details}</p>
    </>
  )
}
