import './App.css';
import MainPage from './components/mainPage';
import { Provider } from 'react-redux';
import store from './redux/redux';
import HomePage from './components/HomePage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import SearchPage from './components/searchPage';
// import MovieDetails from './components/MovieDetails';
import MovieHome from './components/MovieHome';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/homepage' component={HomePage} />
          <Route exact path='/movie' component={MovieHome} />
          {/* <Route exact path='/search' component={SearchPage} />
          <Route exact path='/movie/details' component={MovieDetails} /> */}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
