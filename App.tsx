import store from '@src/redux/store';
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import AppContainer from './AppContainer';

// Sentry.init({
//   dsn: 'http://2d02e596c63245f09564b3848188ae91@sentry.winds.vn/42',
// })
export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
        {/* <Toast ref={ref => Toast.setRef(ref)} /> */}
      </Provider>
    );
  }
}

export default App;
