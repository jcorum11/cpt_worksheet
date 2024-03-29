import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import {Navigation} from './src/components/Navigation';
import {store} from './src/libs/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
