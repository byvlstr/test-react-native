import React, {Component} from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import RouterComponent from './Router';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

interface Props {}
export default class App extends Component<Props> {

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    );
  }

}