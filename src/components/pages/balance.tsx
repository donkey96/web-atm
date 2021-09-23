import React, { useEffect, useState } from 'react';
import { Header } from '../ui/header.';
import { Users, userType } from '../../users/users';
import { Paths } from '../../routers/routers';
import { push } from 'connected-react-router';
import { useAppDispatch } from '../../app/hooks';
import { CommonTable } from '../ui/common-table';
import { Button, Checkbox, Dimmer, Loader, Segment } from 'semantic-ui-react';

export type BalanceProps = {
  mail: string
}

export const Balance = (props: BalanceProps) => {
  const dispatch = useAppDispatch();
  const { mail } = props;
  // - state -
  const [user, setUser] = useState<userType>({
    name: '',
    credit: 0,
    mail: '',
    pass: '',
    transactions: [],
  });
  const [isShowList, setIsShowList] = useState(false);
  const [loaderFlag, setLoaderFlag] = useState(true);
  // - function -
  const handleChangeCheckBox = (v: boolean) => {
    if (!v) {
      setLoaderFlag(true);
    } else {
      setTimeout(() => {
        setLoaderFlag(false);
      }, 1000);
    }
    setIsShowList(v);
  };
  // - effect -
  useEffect(() => {
    for (let i = 0; i < Users.length; i++) {
      if (Users[i].mail === mail) {
        setUser(Users[i]);
      }
    }
  }, [user]);
  const tableHeaderList = [
    'ご利用日',
    '取引額',
    '取引後残高',
  ];

  return (
    <>
      <Header
        user={user}
        active={'balance'}
      />
      <div>
        <h3
          style={{
            marginTop: '60px',
            marginBottom: '30px',
          }}
        >
          現在の口座残高は {user.credit.toLocaleString()} 円 です。
        </h3>
        <Checkbox
          label={'取引詳細を表示する'}
          onChange={() => handleChangeCheckBox(!isShowList)}
        />
        {isShowList ?
          <Segment>
            <div
              style={{
                height: '100%',
                minHeight: '500px',
                width: '600px',
                margin: '0px auto',
              }}
            >
              {!loaderFlag ?
                <CommonTable headerList={tableHeaderList} bodyList={user.transactions} />
                : <Dimmer active>
                  <Loader>Loading</Loader>
                </Dimmer>
              }
            </div>
          </Segment>
          : <></>
        }
      </div>
    </>
  );
};