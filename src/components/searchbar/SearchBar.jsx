import { useState } from "react";
import styled from "styled-components";

const DivSearch = styled.div`
   padding: 1em;
   display: flex;
   justify-content: center;
`

const Btn = styled.button`
   border-radius: 0.5em;
   margin-left: 0.5em;
   padding: 0.5em;
   border: solid #06d6a0;
   color: #370617;
   font-weight: 700;
   font-size: 1em;
   &:hover {
      background-color: #ffd60a;
      cursor: pointer;
   }
`

const Input = styled.input`
   order-radius: 0.5em;
   margin-left: 0.5em;
   padding: 0.5em;
   border: solid #06d6a0;
   color: #370617;
   font-weight: 700;
   font-size: 1em;
   &:hover {
      background-color: #c9bfc3;
   }
`

export default function SearchBar(props) {
   const {onSearch} = props;
   const [character, setCharacter] = useState("");  // le pasamos character vacío

   const handleChange = (evento) => {
      setCharacter(evento.target.value);
    }

   return (
      <DivSearch>
         <Input type='search' value={character} onChange={handleChange} />
         <Btn onClick={() => onSearch(character)}>Agregar</Btn>
      </DivSearch>
   );
}
