import React from 'react';
import styled from 'styled-components';
import { AiOutlineShoppingCart } from 'react-icons/ai';
const NavBar = ({valorCompra = 0}) => {
  const Menu = styled.nav`
    display: flex;
    justify-content: flex-end;
    height: 60px;
    background: #808f85;
  `;
  const Logo = styled.div`
    background-color: red;
    width: 60px;
    height: 60px;
    border-radius: 50%;
  `;
  const MenuOpciones = styled.ul`
    display: flex;
    align-items: flex-end;
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
    font-weight: bold;
    width: 90%;
    margin-left: 40px;
  `;
  const MenuItem = styled.li`
    margin: 0 10px;
    padding: 10px 10px 0px 10px;
    &:hover {
      cursor: pointer;
      background-color: blue;
      color: white;

      border-radius: 10px 10px 0px 0px;
    }
  `;
  const Carrito = styled.div`
    width: 100px;
    height: 60px;
    background-color: grey;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0px 10px;
    & > svg {
      font-size: 4rem;
    }
    & > span {
      font-size: 2rem;
      font-weight: bold;
    }
  `;

  return (
    <>
      <Menu>
        <Logo />
        <MenuOpciones>
          <MenuItem>Home</MenuItem>
          <MenuItem>Opcion 1</MenuItem>
          <MenuItem>OPcion 2</MenuItem>
          <MenuItem>Opcion 3</MenuItem>
          <MenuItem>OPcion 4</MenuItem>
        </MenuOpciones>
        <Carrito>
          <AiOutlineShoppingCart />
          <span>{valorCompra}</span>
        </Carrito>
      </Menu>
    </>
  );
};

export default NavBar;
