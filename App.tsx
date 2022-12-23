import React from 'react';
import {Provider} from 'react-redux';
import {Navigation} from './components/Navigation';
import {store} from './libs/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
