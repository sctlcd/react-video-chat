import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import './App.css';

library.add(fab, far);

const App = () => {
  return (
    <div className="app">
      <header>
        <h1>React Video Chat</h1>
      </header>
      <main>
        <p>VideoChat goes here.</p>
      </main>
      <footer>
        <p>
          <span class="footer-icon">Made with</span>
          <a href="https://reactjs.org/" target="_blank" class="react-icon">
            <FontAwesomeIcon icon={['fab', 'react']} />
          </a>
          <span class="footer-icon">-</span>
          <FontAwesomeIcon icon={['far', 'copyright']} />
          <span class="footer-icon">2021 by Lucinda Souchet</span>
          <a href="https://github.com/sctlcd" target="_blank" class="github-icon">
            <FontAwesomeIcon icon={['fab', 'github']} />
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;
