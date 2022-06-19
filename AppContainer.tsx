/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import AppNavigator from '@src/navigation/AppNavigator';
import React, {Component} from 'react';
import {AppStateStatus, Text} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {connect} from 'react-redux';
interface Props {
  getUserInfo: () => void;
}

interface State {
  appState: AppStateStatus | '';
}

class AppContainer extends Component<Props, State> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
    );
  }
}

// export default AppContainer
const mapStateToProps = (state: any) => ({
  // userInfoState: state[APP_SLICE.USER_INFO],
});
const mapDispatchToProps = {
  // getUserInfo,
};
export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
