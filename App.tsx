import React from 'react';
import {StatusBar} from 'react-native';

import MainNavigation from './navigation/mainNavigation/mainNavigation';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <MainNavigation />
    </>
  );
};

export default App;
