import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

import './App.css';

library.add(fab, far);

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <p>VideoChat goes here.</p>
      </main>
      <Footer />
    </div>
  );
};

export default App;
