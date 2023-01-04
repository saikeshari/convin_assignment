import './App.css';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import MainApp from './MainApp';
import 'bootstrap/dist/css/bootstrap.min.css';

const store=ConfigureStore();

const App = () => {

  return (
    <Provider store={store} >
      <MainApp />
    </Provider>
  );
};

export default App;
