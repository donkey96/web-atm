import React, { useState } from 'react';
import { Button, Icon, Input, Modal, Table } from 'semantic-ui-react';
import { userType } from '../../users/users';

const MAX_NUM = 500000000000;

type props = {
  type: 'deposit' | 'withdrawal',
  callBack: (num: number) => void
}

export const Keypad = (props: props) => {
  const {type, callBack} = props
  // - state -
  const [totalNum, setTotalNum] = useState(0);
  const [open, setOpen] = useState(false);
  // - function -
  const countUp = (num: number) => {
    if ((totalNum * 10 + num) > MAX_NUM) {
      setTotalNum(MAX_NUM);
      return;
    }
    setTotalNum(prevState => prevState * 10 + num);
  };
  const transactionExecution = () => {
    setOpen(false)
    callBack(totalNum)
  }
  return (
    <>
      <Table>
        <Table.Header>
          <Table.HeaderCell
            textAlign={'center'}
            colSpan={'3'}
          >
            <div
              style={{
                display: 'inline-block',
                fontSize: '30px',
              }}
            >
              {totalNum.toLocaleString()}
            </div>
            <div
              style={{
                display: 'inline-block',
                marginLeft: '10px'
              }}>
              円
            </div>
          </Table.HeaderCell>
        </Table.Header>
        <Table.Body>
          <Table.Row textAlign={'center'}>
            <Table.Cell>
              <Button
                size={'big'}
                onClick={() => countUp(7)}
              >7</Button>
            </Table.Cell>
            <Table.Cell>
              <Button
                size={'big'}
                onClick={() => countUp(8)}
              >8</Button>
            </Table.Cell>
            <Table.Cell>
              <Button
                size={'big'}
                onClick={() => countUp(9)}
              >9</Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row textAlign={'center'}>
            <Table.Cell>
              <Button
                size={'big'}
                onClick={() => countUp(4)}
              >4</Button>
            </Table.Cell>
            <Table.Cell>
              <Button
                size={'big'}
                onClick={() => countUp(5)}
              >5</Button>
            </Table.Cell>
            <Table.Cell>
              <Button
                size={'big'}
                onClick={() => countUp(6)}
              >6</Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row textAlign={'center'}>
            <Table.Cell>
              <Button
                size={'big'}
                onClick={() => countUp(1)}
              >1</Button>
            </Table.Cell>
            <Table.Cell>
              <Button
                size={'big'}
                onClick={() => countUp(2)}
              >2</Button>
            </Table.Cell>
            <Table.Cell>
              <Button
                size={'big'}
                onClick={() => countUp(3)}
              >3</Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row textAlign={'center'}>
            <Table.Cell>
              <Button
                size={'big'}
                color={'orange'}
                onClick={() => setTotalNum(0)}
              >訂正</Button>
            </Table.Cell>
            <Table.Cell>
              <Button
                size={'big'}
                onClick={() => countUp(0)}
              >0</Button>
            </Table.Cell>
            <Table.Cell>
              <Button
                size={'big'}
                color={'teal'}
                disabled={!totalNum}
                onClick={() => setOpen(true)}
              >確認</Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Modal
        size="small"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Modal.Header>
          確認
        </Modal.Header>
        <Modal.Content>
          <p>{type === 'withdrawal' ? `${totalNum}円を引き出します。`: `${totalNum}円を入金します。`}</p>
          <p>取引を実行してもよろしいですか？</p>
        </Modal.Content>
        <Modal.Actions>
          <Button
            negative
            onClick={() => {
              setOpen(false);
              setTotalNum(0);
            }}
          >
            キャンセル
          </Button>
          <Button
            positive
            onClick={ transactionExecution }
          >
            実行
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};