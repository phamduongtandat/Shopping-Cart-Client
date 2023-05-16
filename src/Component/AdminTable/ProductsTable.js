import React from 'react';
import { Table } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'

function ProductsTable({ prod, handleEdit, setRowSelected, handleDel }) {

    //console.log(' prod:', prod)

    //let detail = {}
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',

        },
        {
            title: 'Price',
            dataIndex: 'price',
        },
        {
            title: 'Type',
            dataIndex: 'type',
        },
        {
            title: 'Rating',
            dataIndex: 'rating',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            render: () => {
                return (
                    <div>
                        <DeleteOutlined style={{ color: 'red', fontSize: '30px', cursor: 'pointer', paddingRight: 15 }}
                            onClick={handleDel} />.
                        <EditOutlined style={{ color: 'orange', fontSize: '30px', cursor: 'pointer' }}
                            onClick={handleEdit} />.
                    </div>
                )
            }
        }
    ];

    const data = prod.map((p) => {
        return { ...p, key: p._id }
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
                onRow={(record, rowIndex) => {
                    return {
                        onClick: event => {
                            //console.log('record :', record)
                            //detail = record

                            setRowSelected(record._id)
                        }
                    }
                }}

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

export default ProductsTable
