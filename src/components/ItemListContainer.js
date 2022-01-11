import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Items from './Items';

const Articulos = [
  {
    id: 1,
    title: 'Casa',
    price: 1500,
    pictureUrl: 'https://picsum.photos/200/300?random=1'
  },
  {
    id: 2,
    title: 'Perro',
    price: 1500,
    pictureUrl: 'https://picsum.photos/200/300?random=2'
  },
  {
    id: 3,
    title: 'Patio',
    price: 1500,
    pictureUrl: 'https://picsum.photos/200/300?random=3'
  },
  {
    id: 4,
    title: 'Auto',
    price: 1500,
    pictureUrl: 'https://picsum.photos/200/300?random=4'
  }
];
const ItemListContainer = (prosp) => {
  const Cabecera = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100vh;
  `;

  const [stock, setStock] = useState(2);
  const [articulos, setArticulos] = useState([]);
  useEffect(() => {
    const peticion = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Articulos);
      }, 2000);
      reject(new Error('Error en la peticion'));
    });
    peticion.then((datos) => {
      setArticulos(datos);
    });
  }, []);

  return (
    <Cabecera>
      {articulos.map((item) => (
        <Items
          carritoStock={setStock}
          disponibleStock={stock}
          id={item.id}
          titulo={item.title}
          precio={item.price}
          imagen={item.pictureUrl}
        />
      ))}
    </Cabecera>
  );
};

export default ItemListContainer;
