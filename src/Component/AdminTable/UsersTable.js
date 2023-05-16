import React, { useState } from 'react';
import { Table } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'

function UsersTable({ users }) {
  const columns = [
    {
      title: 'Username',
      dataIndex: 'username',
      //render: (text) => <a>{text}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Admin',
      dataIndex: 'isAdmin',

    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: () => {
        return (
          <div>
            <DeleteOutlined style={{ color: 'red', fontSize: '30px', cursor: 'pointer' }} />.
            <EditOutlined style={{ color: 'orange', fontSize: '30px', cursor: 'pointer' }} />.
          </div>
        )
      }
    },
  ];
  const data = users.map((u) => {
    return { ...u, key: u._id, isAdmin: u.isAdmin === true ? 'Yes' : 'No' }
  })

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },


  };
  return (
    <div>


      <Table

        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  )
}

export default UsersTable
