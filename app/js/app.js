import React from 'react';

import { Header } from './views/header';
import { Footer } from './views/footer';

export class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="mdl-base mdl-layout__container">
        <Header />
        <Footer />
      </div>
    );
  }
}
