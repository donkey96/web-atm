import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Button, Container, Header, Input } from 'semantic-ui-react';

const Login = () => {
  // - state -
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  // - const -
  const userName = 'guest';
  const password = '1234';
  // - ref -
  const passRef: any = useRef(null);
  // - function -
  const handleChangeName = (v: string) => {
    setName(v);
  };
  const handleChangePass = useCallback(
    (v) => {
      setPass(v);
    },
    [],
  );

  // - effect -
  useEffect(() => {
    if (pass.length >= 8) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [name, pass]);

  useEffect(() => {
    if (name === userName) {
      passRef.current.focus()
    }
  }, [name]);

  return (
    <>
      <Container>
        <Header
          dividing
          size={'large'}
        >
          {isLogin ? `ようこそ! ${name}さん ` : 'Login'}
        </Header>
        {isLogin ?
          <>
          </>
          :
          <>
            <div
              style={{
                marginTop: '20px',
              }}
            >
              <Input
                label="name"
                onChange={
                  (e) => handleChangeName(e.target.value)
                }
              />
            </div>
            <br />
            <div>
              <Input
                type="password"
                label="pass"
                onChange={
                  (e) => handleChangePass(e.target.value)
                }
                ref={passRef}
              />
            </div>
            <br />
            <Button
              primary={isValid}
              disabled={!isValid}
              onClick={() => setIsLogin(true)}
            >Login</Button>
          </>
        }
      </Container>
    </>
  );
};

export default Login;
