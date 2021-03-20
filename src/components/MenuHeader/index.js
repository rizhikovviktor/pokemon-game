import { useState } from 'react';
import Menu from "../Menu";
import NavBar from "../NavBar";

const MenuHeader = ({bgActive}) => {
    const [isActive, setActive] = useState(null);
    const handlerMenuClick = (isActive) => {
        setActive(isActive);
    }
    return (
      <>
          <Menu menuClick={handlerMenuClick}  isMenuActive={isActive}/>
          <NavBar menuClick={handlerMenuClick} isMenuActive={isActive} bgActive={bgActive} />
      </>
    );
}

export default MenuHeader;