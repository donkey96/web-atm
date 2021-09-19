import React, { useEffect, useState } from 'react';
import { Header } from '../ui/header.';
import { Users, userType } from '../users/users';
import { Paths } from '../../routers/routers';
import { push } from 'connected-react-router';
import { useAppDispatch } from '../../app/hooks';

export type BalanceProps = {
  mail: string
}

export const Balance = (props: BalanceProps) => {
  const dispatch = useAppDispatch()
  const {mail} = props
  const [user, setUser] = useState<userType>({
    name: '',
    credit: 0,
    mail: '',
    pass: '',
  });

  useEffect(() => {
    for (let i = 0; i < Users.length; i++) {
      if (Users[i].mail === mail) {
        setUser(Users[i])
      }
    }
  }, [user]);

  return (
    <>
     <Header user={user} active={'balance'} />
    </>
  );
};