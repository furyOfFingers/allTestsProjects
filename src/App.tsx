import React from 'react';
import InputForm from './Modules/InputForm';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer, InitialState } from './Store/reducers';

const store = createStore(rootReducer, InitialState);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <InputForm></InputForm>
      </Provider>
    );
  }
}

export default App;
