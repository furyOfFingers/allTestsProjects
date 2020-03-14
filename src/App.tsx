import React from 'react';
import NavigationBar from './Modules/Navbar/Navbar';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer, InitialState } from './Store/reducers';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(rootReducer, InitialState);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <NavigationBar></NavigationBar>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
