import React from 'react';
import HeaderSearch from './HeaderSearch';
import HeaderLogo from  './HeaderLogo';
import HeaderDir from './HeaderDir';
import HeaderCar from  './HeaderCar';
import HeaderNav from './HeaderNav';


 function Header(){
    return (
        < >
        <div className="flex w-full h-48 border-solid border-inherit border-2 bg-white">
            <HeaderLogo/>
            <HeaderSearch/>
            <HeaderDir/>
            <HeaderCar/>
            <HeaderNav/>

        </div>
        </>
)
}

export default Header;