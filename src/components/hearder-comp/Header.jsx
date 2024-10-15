import React from 'react';
import HeaderSearch from './HeaderSearch';
import HeaderLogo from  './HeaderLogo';
import HeaderDir from './HeaderDir';
import HeaderCar from  './HeaderCar';
import HeaderNav from './HeaderNav';


 function Header(){
    return (
        < >
        <div className='flex'>
            <HeaderSearch/>
            <HeaderLogo/>
            <HeaderDir/>
            <HeaderCar/>
            <HeaderNav/>

        </div>
        </>
)
}

export default Header;