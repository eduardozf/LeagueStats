import React, { useRef } from 'react';
import { HiSearch } from "react-icons/hi";

import { Container } from './styles';

const cdnPath = 'http://localhost:3333/files';

function SearchSummoner(inputRef) {
  const summoner = inputRef.current.value;
  console.log(inputRef);
  window.location.replace(`http://localhost:3000?summoner=${summoner}`);
}

function NavBar() {
  const InputRef = useRef()
  return (
    <Container>
      <div className="logo">
        <img src={`${cdnPath}/public/Logo.png`} alt="LeagueFinder" height="38px" width="38px" />
      </div>
      <div className="searchContainer">
        <div className="serachBar">
          <input type="text" placeholder="Nome de invocador ..." ref={InputRef} />
          <button onClick={() => { SearchSummoner(InputRef) }}><HiSearch /></button>
        </div>
      </div>
    </Container>
  );
}

export default NavBar;