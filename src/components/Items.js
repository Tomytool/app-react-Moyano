import React, { useState, useEffect } from 'react';
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai';
import styled from 'styled-components';

const Items = (props) => {
  const Card = styled.div`
    width: 250px;
    height: auto;
    background-color: #143642;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 15px;
    & > img {
      padding: 20px;
      width: 200px;
      height: 200px;
      border-radius: 50%;
    }
  `;
  const Comprador = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    height: auto;
    font-size: 1.5rem;
  `;

  const [stockDisponible, setStockDisponible] = useState(0);
  const disminuirArticulo = () => {
    if (props.disponibleStock > 0) {
      setStockDisponible(stockDisponible - 1);
    }
    if (props.disponibleStock === 0) {
      setStockDisponible(0);
      alert('No puedes comprar menos de 0 articulos');
    }
  };
  const aumentarArticulo = () => {
    setStockDisponible(stockDisponible + 1);
  };

  const [compra, setCompra] = useState(0);
  useEffect(() => {
    // props.carritoStock(compra);
    console.log(compra);
  }, [compra]);

  return (
    <Card key={props.id}>
      <img src={props.imagen} alt="Imagen de prueba" />
      <h3>Articulo: {props.titulo}</h3>
      <h3>Precio: ${props.precio}</h3>
      <Comprador>
        <AiOutlineCaretLeft onClick={disminuirArticulo} />
        <p>{stockDisponible}</p>
        <AiOutlineCaretRight onClick={aumentarArticulo} />
      </Comprador>
      <button
        onClick={() => {
          setCompra(stockDisponible);
        }}
      >
        Comprar
      </button>
      <p>{compra}</p>
    </Card>
  );
};

export default Items;
