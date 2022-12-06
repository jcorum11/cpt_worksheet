import React from 'react';
import {Provider} from 'react-redux';
import {Navigation} from './components/utils/Navigation';
import {store} from './libs/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
