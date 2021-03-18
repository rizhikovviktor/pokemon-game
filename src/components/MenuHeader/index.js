import { useState } from 'react';
import Menu from "../Menu";
import NavBar from "../NavBar";

const MenuHeader = () => {
    const [isActive, setActive] = useState(false);
    const handlerMenuClick = (isActive) => {
        setActive(isActive);
    }
    return (
      <>
          <Menu isMenuActive={isActive}/>
          <NavBar menuClick={handlerMenuClick} isMenuActive={isActive} />
      </>
    );
}

export default MenuHeader;