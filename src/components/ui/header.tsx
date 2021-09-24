import React, { useEffect, useState } from 'react';
import { Menu, Popup } from 'semantic-ui-react';
import { userType } from '../../users/users';
import { useAppDispatch } from '../../app/hooks';
import { push } from 'connected-react-router';
import { Paths } from '../../routers/routers';
import { useLocation } from 'react-router-dom';

type props = {
  user: userType,
  active: 'balance' | 'deposit' | 'withdrawal',
  page?: number
}

export const Header = (props: props) => {
  const { user, active, page } = props;
  const dispatch = useAppDispatch();
  const search = useLocation().search;
  const searchParams = new URLSearchParams(search)
  // - function -
  const handleClickBalance = () => {
    {
      const path = Paths.balance
        .replace(':mail', user.mail);
      const query = searchParams.toString()
      dispatch(push(`${path}?${query}`));
    }
  };
  const handleClickWithdrawal = () => {
    {
      const path = Paths.withdrawal
        .replace(':mail', user.mail);
      const query = searchParams.toString()
      dispatch(push(`${path}?${query}`));
    }
  };
  const handleClickDeposit = () => {
    {
      const path = Paths.deposit
        .replace(':mail', user.mail);
      const query = searchParams.toString()
      dispatch(push(`${path}?${query}`));
    }
  };
  // - effect -
  useEffect(() => {
    if (page) {
      searchParams.set('p', String(page))
    }
  }, [page]);

  return (
    <>
      <Menu
        size={'massive'}
        color={'blue'}
        inverted
        secondary
      >
        <Menu.Item
          header
        >
          <h2 style={{ width: '80px', margin: '10px 10px 10px 0px' }}>ATM</h2>
          <p style={{}}>{user.name} 様</p>
        </Menu.Item>
        <Menu.Menu
          position={'left'}
        >
          <Menu.Item>
          </Menu.Item>
          <Menu.Item
            as={'a'}
            name="残高照会"
            active={active === 'balance'}
            onClick={handleClickBalance}
          />
          <Menu.Item
            as={'a'}
            name="出金"
            active={active === 'withdrawal'}
            onClick={handleClickWithdrawal}
          />
          <Menu.Item
            as={'a'}
            name="入金"
            active={active === 'deposit'}
            onClick={handleClickDeposit}
          />
        </Menu.Menu>
        <Popup
          trigger={
            <Menu.Item
              position={'right'}
              as={'a'}
              icon="sign out"
              onClick={() => dispatch(push(Paths.login))}
            />
          }
          content="ログアウト"
          inverted
          style={{
            borderRadius: 5,
            opacity: 0.7,
          }}
        />
      </Menu>
    </>
  );
};

