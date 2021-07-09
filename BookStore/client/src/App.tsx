import React, { useEffect } from 'react';
import AppNavbar from './components/AppNavbar';
import Showcase from './components/showcase';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './flux/store';
import { loadUser } from './flux/actions/authActions';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import ASidebar from './components/ASidebar';

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>     
      <div className="App">
        <AppNavbar />
        <Container>
          <Showcase />
        </Container>
      </div>
    </Provider>
  );
};

export default App;
