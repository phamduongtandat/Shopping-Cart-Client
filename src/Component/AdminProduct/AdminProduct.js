import { Button, Modal, Form, Input } from 'antd'
import React, { useEffect, useState } from 'react'
import { PlusOutlined } from '@ant-design/icons';
import ProductsTable from '../AdminTable/ProductsTable';
import './AdminProduct.css'
import axios from 'axios';


function AdminProduct() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [prodData, setProdData] = useState([])
    const [rowSelected, setRowSelected] = useState('')
    const [detail, setDetail] = useState('')
    const [isEdit, setIsEdit] = useState(false)
    const [isDel, setIsDel] = useState(false)

    const [form] = Form.useForm()

    //       _____ CLICK CANCEL MODAL _____ 

    const handleCancel = () => {
        form.resetFields()
        setIsModalOpen(false);
    }

    useEffect(() => {
        if (isDel) {
            axios.delete(`https://shopping-cart-zjgb.onrender.com/api/v1/product/${rowSelected}`)
                .then((api) => {
                    //setDetail(api.data.data)
                    console.log('data :', api.data.data)
                    setIsDel(false)
                })
            // console.log('rowSelected :', rowSelected)
            // setIsDel(false)
        }

    }, [rowSelected, isDel])


    //       _____ CLICK DEL _____ 

    const handleDel = () => {
        setIsDel(true)
    }


    //       _____ FETCH PROD DETAIL _____

    const fetchDetail = (id) => {
        axios.get(`https://shopping-cart-zjgb.onrender.com/api/v1/product/${id}`)
            .then((api) => {
                setDetail(api.data.data)
            })
    }
    useEffect(() => {
        fetchDetail(rowSelected)
    }, [rowSelected])

    useEffect(() => {
        form.setFieldsValue(detail)
    }, [detail, form, isModalOpen])


    //       _____ CLICK EDIT _____ 

    const handleEdit = () => {
        setIsEdit(true)
        setIsModalOpen(true)
    }


    //       _____ FETCH AND RENDER PROD _____ 

    useEffect(() => {
        axios
            .get('https://shopping-cart-zjgb.onrender.com/api/v1/product')
            .then((api) => {
                setProdData(api.data.data)
                //setIsModalOpen(false)
            })
            .catch((err) => {
                console.log('err :', err)
            })
    }, [isModalOpen, isDel])

    const [prodInput, setProdInput] = useState({
        name: '',
        image: '',
        type: "",
        price: '',
        countInStock: '',
        rating: '',
        desc: "",
        discount: '',

    })


    //       _____ ONCHANGE INPUT _____ 

    const handleChange = (e) => {
        setProdInput({
            ...prodInput,
            [e.target.name]: e.target.value
        })
    }


    //       _____ SUBMIT FORM _____ 

    const onFinish = (values) => {
        if (detail) {
            console.log('detail :', detail._id)
            axios.put(`https://shopping-cart-zjgb.onrender.com/api/v1/product/${detail._id}`, values)
                .then((api) => {
                    console.log(' api:', api.data)
                    if (api.data.status === 1) {
                        setIsModalOpen(false)
                        alert('Edited successfully!!')
                    }
                })
                .catch((err) => {
                    console.log('err :', err.response.data.message)
                    alert(err.response.data.message)
                })
        } else {
            axios
                .post('https://shopping-cart-zjgb.onrender.com/api/v1/product', values)
                .then((api) => {
                    if (api.data.status === 1) {
                        setIsModalOpen(false)
                        alert('Created successfully!!')
                    }
                    console.log(' api:', api)
                })
                .catch((err) => {
                    console.log('err :', err.response.data.message)
                    alert(err.response.data.message)
                })
        }


    };

    return (
        <div>
            <h3><b>Products management</b></h3>
            <Button
                style={{
                    height: '150px',
                    width: '150px', borderRadius: '6px',
                    borderStyle: 'dashed'
                }}
                onClick={() => {
                    setDetail('')
                    setIsEdit(false)
                    form.resetFields()
                    setIsModalOpen(true)
                }}
            >

                <PlusOutlined style={{ fontSize: '35px' }} />
            </Button>

            <div className='table'>
                <ProductsTable prod={prodData} setRowSelected={setRowSelected} handleEdit={handleEdit} handleDel={handleDel} />
            </div>

            <Modal title={isEdit ? "Edit product detail" : "Create more product"} open={isModalOpen} onCancel={handleCancel} footer={null}>
                <Form
                    form={form}
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    // style={{
                    //     maxWidth: 600,
                    // }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}

                    autoComplete="off"
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your name!',
                            },
                        ]}
                    >
                        <Input name="name" value={prodInput.name} onChange={handleChange} />
                    </Form.Item>

                    <Form.Item
                        label="Image"
                        name="image"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your image!',
                            },
                        ]}
                    >
                        <Input name="image" value={prodInput.image} onChange={handleChange} />
                    </Form.Item>

                    <Form.Item
                        label="Type"
                        name="type"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your type!',
                            },
                        ]}
                    >
                        <Input name="type" value={prodInput.type} onChange={handleChange} />
                    </Form.Item>

                    <Form.Item
                        label="Price"
                        name="price"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your price!',
                            },
                        ]}
                    >
                        <Input name="price" value={prodInput.price} onChange={handleChange} />
                    </Form.Item>

                    <Form.Item
                        label="Count In Stock"
                        name="countInStock"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your count-InStock!',
                            },
                        ]}
                    >
                        <Input name="countInStock" value={prodInput.countInStock} onChange={handleChange} />
                    </Form.Item>

                    <Form.Item
                        label="Rating"
                        name="rating"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your rating!',
                            },
                        ]}
                    >
                        <Input name="rating" value={prodInput.rating} onChange={handleChange} />
                    </Form.Item>

                    <Form.Item
                        label="Description"
                        name="desc"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Description!',
                            },
                        ]}
                    >
                        <Input name="desc" value={prodInput.desc} onChange={handleChange} />
                    </Form.Item>

                    <Form.Item
                        label="Discount"
                        name="discount"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your discount!',
                            },
                        ]}
                    >
                        <Input name="discount" value={prodInput.discount} onChange={handleChange} />
                    </Form.Item>



                    <Form.Item
                        wrapperCol={{
                            offset: 20,
                            span: 16,
                        }}
                    >
                        <Button style={{ marginTop: 15 }} type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

export default AdminProduct
