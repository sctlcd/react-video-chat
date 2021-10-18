import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons';

import 'components/Footer/Footer.css';

const Footer = () => {
    return (
        <footer>
            <p>
                <span className="footer-icon">Made with</span>
                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" className="react-icon">
                    <FontAwesomeIcon icon={['fab', 'react']} />
                </a>
                <span className="footer-icon">-</span>
                <FontAwesomeIcon icon={['far', 'copyright']} />
                <span className="footer-icon">2021 by Lucinda Souchet</span>
                <a href="https://github.com/sctlcd" target="_blank" rel="noopener noreferrer" className="github-icon">
                    <FontAwesomeIcon icon={['fab', 'github']} />
                </a>
            </p>
        </footer>
    );
};

export default Footer;
