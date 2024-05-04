import React, { useState } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const FormSearch = styled.form`
    display: flex;
    gap: 0.5rem;
`;

const InputFind = styled.input`
    padding: 0.2rem 0.8rem;
    border-radius: 4px;
    border: none;
`;

const InputButton = styled.button`
    background-color: #00a6ff;
    border: 2px solid #f7fffd;
    border-radius: 4px;
    color: #000;
    padding: 0.3rem;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: 1s;
  &:hover{
    background-color: #a3f8f6;
    border: 2px solid #00a6ff;
    }
`;

const InputSearch = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!search) return;
      navigate(`/search?q=${search}`, { replace: true });
      setSearch("");
    };


  return (
    <FormSearch onSubmit={handleSubmit}>

    <InputFind
      type="text"
      placeholder="Busque um filme"
      onChange={(e) => setSearch(e.target.value)}
      value={search}
    />
    <InputButton type="submit">
      <BiSearchAlt2 />
    </InputButton>
  </FormSearch>
  )
}

export default InputSearch;
