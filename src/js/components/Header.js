import React from 'react';
import Search from '../components/Search';

import 'styles/components/header';

class Header extends React.Component {
    render(){
        return (
            <header className='header'>
                <h1 className='galleryTitle'>Photos</h1>
                <Search/>
            </header>
        );
    }
};

export default Header;
