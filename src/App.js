import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter, Route } from 'react-router-dom';
import ContestDetailPage from './route/ContestDetailPage';
import ContestPage from './route/ContestPage';

function App() {
  return (
    <CssBaseline />,
    <BrowserRouter>
      <Route exact path={"/"} component={ContestPage}/>
      <Route exact path={"/detail/:id"} component={ContestDetailPage}/>
    </BrowserRouter>
  );
}

export default App;
