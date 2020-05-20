import React, { Component } from 'react'
import { Table } from 'antd';

class TableComponent extends Component {

  render() {
    const columns = [
      {
        title: 'Date/Time',
        dataIndex: 'date',
        key: 'date',
      },
      {
        title: 'Amount',
        dataIndex: 'amount',
        key: 'amount',
      },
      {
        title: 'Total unit',
        dataIndex: 'totalUnit',
        key: 'totalUnit',
      },
      {
        title: 'Purchased by',
        dataIndex: 'purchasedBy',
        key: 'purchasedBy',
      },
    ];
    const data = [];
    for (let i = 1; i <= 35; i++) {
      data.push({
        key: i,
        date: `30th Aug, 2019 `,
        amount: 'NGN 3,000',
        totalUnit: 'Tkn 6,000',
        purchasedBy: 'ganesh@ensyspace.com',
      });
    }
    
    return (
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    )
  }
}

export default TableComponent
