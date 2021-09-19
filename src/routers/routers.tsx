import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';
import { Balance, BalanceProps } from '../components/pages/balance';
import Login from '../components/pages/login';
import { PropsWithChildren } from 'react';
import { Withdrawal } from '../components/pages/withdrawal';
import { Deposit } from '../components/pages/deposit';

interface IRouteProps<T> extends PropsWithChildren<RouteComponentProps<T>> {
}

export const Paths = {
  login: '/login',
  balance: '/balance/:mail',
  withdrawal: '/withdrawal/:mail',
  deposit: '/deposit/:mail'
}

export const Routes = (
  <Switch>
    <Route
      exact
      path={Paths.login}
      component={Login}
    />
    <Route
      exact
      path={Paths.balance}
      component={(props:IRouteProps<BalanceProps>) => (
      <Balance mail={props.match.params?.mail} />
      )}
     />
    <Route
      exact
      path={Paths.withdrawal}
      component={(props:IRouteProps<BalanceProps>) => (
      <Withdrawal mail={props.match.params?.mail} />
      )}
     />
    <Route
      exact
      path={Paths.deposit}
      component={(props:IRouteProps<BalanceProps>) => (
      <Deposit mail={props.match.params?.mail} />
      )}
     />
    <Redirect path={'/'} to={Paths.login} />
  </Switch>
)