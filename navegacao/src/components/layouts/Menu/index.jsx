import React from 'react';
import './index.css';

const Menu = props => {
    return (
        <asside className="Menu">
            <nav>
                <ul>
                    <li>
                        <a href="/">Início</a>
                    </li>
                    <li>
                        <a href="/">Sobre</a>
                    </li>
                </ul>
            </nav>
        </asside>
    )
}

export default Menu;