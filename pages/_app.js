import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { Spin } from 'antd';
import { makeStore } from '../redux/configStore';

export default function MyApp({ Component, pageProps }) {
  const store = makeStore(pageProps.initialReduxState);
  const persistor = persistStore(store);

  return (
    <Provider store={store}>
     <PersistGate
      loading={<Spin {...pageProps} />}
      persistor={persistor}
    >
      <Component {...pageProps} />
     </PersistGate>
    </Provider>
  )
}