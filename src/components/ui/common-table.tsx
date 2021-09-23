import React, { useState } from 'react';
import { Icon, Pagination, Table } from 'semantic-ui-react';
import { transactionData } from '../../users/users';

type props = {
  headerList: string[],
  bodyList: transactionData[] | null
}

export const CommonTable = (props: props) => {
  const [activePage, setActivePage] = useState(1);

  const { headerList, bodyList } = props;
  const num = 10 * (activePage - 1)
  const showList = bodyList?.slice(num, num + 9)

  return (
    <>
      <Table
        color={'blue'}
        celled
        selectable
        size={'large'}
      >
        <Table.Header>
          <Table.Row textAlign={'center'}>
            {headerList.map((header, index) => (
                <Table.HeaderCell key={`${index}_${header}`}>{header}</Table.HeaderCell>
              ),
            )}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
            showList?.map((body, index) => (
                <Table.Row
                positive={(body.transactionAmount >= 0)}
                negative={(body.transactionAmount < 0)}
                >
                  <Table.Cell textAlign={'center'} key={`${index}_${body.date}`}>{body.date}</Table.Cell>
                  <Table.Cell textAlign={'right'} key={`${index}_${body.transactionAmount}`}>{(body.transactionAmount > 0 ? '+' : '') + body.transactionAmount.toLocaleString()} 円</Table.Cell>
                  <Table.Cell textAlign={'right'} key={`${index}_${body.credit}`}>{body.credit.toLocaleString()} 円</Table.Cell>
                </Table.Row>
              ),
            )}
        </Table.Body>
        <Table.Footer>
          <Table.Row textAlign={'center'}>
            <Table.HeaderCell colSpan={'3'}>
              <Pagination
                defaultActivePage={1}
                totalPages={bodyList!.length/10}
                onPageChange={(e,{activePage}) => setActivePage(Number(activePage))}
                ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
                firstItem={{ content: <Icon name='angle double left' />, icon: true }}
                lastItem={{ content: <Icon name='angle double right' />, icon: true }}
                prevItem={{ content: <Icon name='angle left' />, icon: true }}
                nextItem={{ content: <Icon name='angle right' />, icon: true }}
              />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </>
  );
};