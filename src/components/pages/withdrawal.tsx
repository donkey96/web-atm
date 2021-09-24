import React, { useEffect, useState } from 'react';
import { Header } from '../ui/header';
import { Users, userType } from '../../users/users';
import { Paths } from '../../routers/routers';
import { push } from 'connected-react-router';
import { useAppDispatch } from '../../app/hooks';
import { Button, Modal, Segment } from 'semantic-ui-react';
import { Keypad } from '../ui/keypad';
import { DateFormatter } from '../../utilities/date-formatter';

export type WithdrawalProps = {
  mail: string
}

export const Withdrawal = (props: WithdrawalProps) => {
  const dispatch = useAppDispatch();
  const { mail } = props;
  const [user, setUser] = useState<userType>({
    name: '',
    credit: 0,
    mail: '',
    pass: '',
    transactions: [],
  });
  const [open, setOpen] = useState(false);
  const [transaction, setTransaction] = useState<'success' | 'failed'>('failed');

  const withdrawalExecution = (num: number) => {
    if (user.credit - (num + 210) < 0) {
      setTransaction('failed');
      setOpen(true);
      return;
    }
    const newCredit = user.credit - num;
    const withdrawalNum = -(num);
    const now = new Date;
    const transactionDate = DateFormatter(now);

    setUser({
      ...user,
      credit: newCredit,
      transactions: [
        ...user.transactions!,
        { date: transactionDate, transactionAmount: withdrawalNum, credit: newCredit },
      ],
    });
    setTransaction('success');
    setOpen(true);
  };

  useEffect(() => {
    for (let i = 0; i < Users.length; i++) {
      if (Users[i].mail === mail) {
        if (user.mail) {
          Users[i] = user;
        } else {
          setUser(Users[i]);
        }
      }
    }
  }, [user]);

  return (
    <>
      <Header
        user={user}
        active={'withdrawal'}
      />
      <div>
        <h3
          style={{
            marginTop: '60px',
            marginBottom: '30px',
          }}
        >
          ご利用になる金額を入力して下さい
          <span
            style={{
              fontSize: '12px',
              color: 'red',
            }}
          >（※ 限度50万まで）</span>
        </h3>
        <Segment>
          <div
            style={{
              height: '100%',
              minHeight: '300px',
              width: '350px',
              margin: '100px auto',
            }}
          >
            <Keypad
              type={'withdrawal'}
              callBack={withdrawalExecution}
            />
          </div>
        </Segment>
        <Modal
          size="small"
          open={open}
          onClose={() => setOpen(false)}
        >
          {transaction === 'success' ?
            <>
              <Modal.Header>
                取引成功
              </Modal.Header>
              <Modal.Content>
                <p>ご利用ありがとうございます</p>
                <p>指定された取引を実行しました</p>
              </Modal.Content>
            </>
            :
            <>
              <Modal.Header>
                取引中止
              </Modal.Header>
              <Modal.Content>
                <p>残高が足りません</p>
                <p>指定された取引を中止しました</p>
              </Modal.Content>
            </>
          }
          <Modal.Actions>
            <Button
              negative
              onClick={() => {
                setOpen(false);
                const path = Paths.balance
                  .replace(':mail', user.mail);
                dispatch(push(path));
              }}
            >
              閉じる
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    </>
  );
};