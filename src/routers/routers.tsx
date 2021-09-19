import { Redirect, Route, Switch } from 'react-router-dom';
import Login from '../components/pages/login';

export const Paths = {
  login: '/login',
  main: '/main',
  balance: '/balance',
  withdrawal: '/withdrawal',
  deposit: '/deposit'
}

export const Routes = (
  <Switch>
    <Route exact path={Paths.login} component={Login} />
    <Redirect path={'/'} to={Paths.login} />
  </Switch>
)