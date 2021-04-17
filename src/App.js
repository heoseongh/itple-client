import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter, Route } from 'react-router-dom';
import ContestDetail from './route/ContestDetail';
import Home from './route/Home';

function App() {
  return (
    <CssBaseline />,
    <BrowserRouter>
      <Route exact path={"/"} component={Home}/>
      <Route exact path={"/detail/:id"} component={ContestDetail}/>
    </BrowserRouter>
  );
}

export default App;
