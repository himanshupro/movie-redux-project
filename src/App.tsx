import './App.css';
import MainPage from './components/mainPage';
import { Provider } from 'react-redux';
import store from './redux/redux';
import Homepage from './components/Homepage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/homepage' component={Homepage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
{
  /* <MainPage />
          <Nav />
          <ChatBody />

          <MainPage />

          <Practice />

          <Nav />
          <ChatBody /> */
}
