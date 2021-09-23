import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Button, Container, Header, Input, Modal } from 'semantic-ui-react';
import { useAppDispatch } from '../../app/hooks';
import { push } from 'connected-react-router';
import { Paths } from '../../routers/routers';
import { Users } from '../../users/users';

const style = {
  width: '100%',
  margin: '0 auto',
  marginTop: '30px',
};
const Login = () => {
  const dispatch = useAppDispatch();
  // - state -
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [open, setOpen] = useState(false);
  // - ref -
  const passRef: any = useRef(null);
  // - function -
  const handleChangeMail = (v: string) => {
    setMail(v);
  };
  const handleChangePass = useCallback(
    (v) => {
      setPass(v);
    },
    [],
  );
  const handleClickLogin = () => {
    for (let i = 0; i < Users.length; i++) {
      if (Users[i].mail === mail && Users[i].pass === pass) {
        const path = Paths.balance
          .replace(':mail', Users[i].mail);
        return dispatch(push(path));

      }
    }
    setOpen(true);
  };
  // - effect -
  useEffect(() => {
    if (pass.length >= 8) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [mail, pass]);

  return (
    <>
      <div style={style}>
        <Header
          dividing
          size={'large'}
        >
          ATM
        </Header>
        <Container>
          <div
            style={{
              marginTop: '20px',
            }}
          >
            <Input
              size={'large'}
              label="メールアドレス"
              onChange={
                (e) => handleChangeMail(e.target.value)
              }
              onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
                if (e.key === 'Enter') {
                  e.currentTarget.blur();
                  passRef.current.focus();
                }
              }}
            />
          </div>
          <br />
          <div>
            <Input
              size={'large'}
              type="password"
              label="　パスワード　"
              error={!isValid}
              onChange={
                (e) => handleChangePass(e.target.value)
              }
              onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
                if (e.key === 'Enter') {
                  e.currentTarget.blur();
                  isValid && handleClickLogin();
                }
              }}
              ref={passRef}
            />
          </div>
          <br />
          <Button
            primary={isValid}
            disabled={!isValid}
            onClick={handleClickLogin}
          >ログイン</Button>
          <Modal
            size="small"
            open={open}
            onClose={() => setOpen(false)}
          >
            <Modal.Header>
              確認
            </Modal.Header>
            <Modal.Content>
              <p>メールアドレスまたはパスワードが一致しません。</p>
            </Modal.Content>
            <Modal.Actions>
              <Button
                negative
                onClick={() => setOpen(false)}
              >
                閉じる
              </Button>
            </Modal.Actions>
          </Modal>
          {isValid ?
            <></> :
            <>
              <p style={{ color: 'red', marginTop: '10px' }}>パスワードは８文字以上で入力して下さい。</p>
            </>
          }
        </Container>
      </div>
    </>
  );
};

export default Login;
