import React from 'react';

import { Header } from './views/header';
import { Footer } from './views/footer';

export class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}
