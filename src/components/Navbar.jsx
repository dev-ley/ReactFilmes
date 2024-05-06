import { Link } from "react-router-dom";
import { BiCameraMovie } from "react-icons/bi";
import styled from "styled-components";
import InputSearch from "./ComponentsFormulario/InputSearch";


const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1rem;
    background-color: #121212;
`;

const ConteinerLogo = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoTitle = styled(Link)`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #30cbff;
  transition: 0.5s;
  font-size: 1.5rem;
  &:hover {
    color: #a3f8f6;
  }

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

const LogoIcon = styled(BiCameraMovie)`
  color: #30cbff;
`;

const Navbar = () => {

  return (
    <>
    <Nav id="navbar">
      <ConteinerLogo>
        <LogoTitle to="/">
          <LogoIcon size={35} />
          React Filmes
        </LogoTitle>
      </ConteinerLogo>
      <InputSearch />
    </Nav>
    </>
  );
};

export default Navbar;
