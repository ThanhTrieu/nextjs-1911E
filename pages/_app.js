import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import { useStore } from '../redux/configStore';

export default function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}