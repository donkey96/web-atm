import React, { useEffect, useState } from 'react';
import { Header } from '../ui/header';
import { Users, userType } from '../../users/users';
import { CommonTable } from '../ui/common-table';
import { Checkbox, Dimmer, Loader, Segment } from 'semantic-ui-react';
import {useLocation} from 'react-router-dom';

export type BalanceProps = {
  mail: string
}

export const Balance = (props: BalanceProps) => {
  const { mail } = props;
  // - queryParams -
  const searchParams = useLocation().search;
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
  const [page, setPage] = useState(1);
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
  // - searchParams -
  useEffect(() => {
    const query = new URLSearchParams(searchParams);
    const currentPage = (query.get('p'))
    if (typeof currentPage === 'string') {
    setPage(Number(currentPage))
    } else {
      setPage(1)
    }
  }, []);

  return (
    <>
      <Header
        user={user}
        active={'balance'}
        page={page}
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
                <CommonTable
                  headerList={tableHeaderList}
                  bodyList={user.transactions}
                  page={page}
                  setPage={setPage}

                />
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