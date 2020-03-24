import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './src/redux/store'
import MainNavigator from './src/navigation/MainNavigator'

class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <PersistGate loading={ null } persistor={ persistor }>
          <MainNavigator />
        </PersistGate>
      </Provider>
    )
  }
};

export default App;