import React from 'react';
import { block } from 'bem-cn';
import { LoanApplicationPage } from '../pages';
import { Header, Footer } from '../shared/views/components';

import './App.scss';

const b = block('app-container');

function App () {
  return (
    <div className={b()}>
      <Header />
      <div className={b('main')}>
        <LoanApplicationPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
