import React, { useEffect, useState } from 'react'
import { Table, Form, Input  } from 'antd';
import { useSelector } from 'react-redux';

export default function PaymentPage() {
    const [customerInfo, setCustomerInfo] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
      });
      
    const [order, setOrder] = useState({
        items: [],
        totalPrice: 0,
        paymentMethod: '',
    });
    const cart = useSelector(state => state.cart.cartList.items);

useEffect(() => {
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
    });
    setOrder({ ...order, items: cart, totalPrice: total });
}, [cart]);
const handleInput = (event) => {
    setCustomerInfo({
        ...customerInfo,
        [event.target.name]: event.target.value,
    });
};
const columns = [
    {
      title: 'Product',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (text, record) => (
        <>
          {record.price} đ
        </>
      ),
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
      render: (text, record) => (
        <>
          {record.price * record.quantity} đ
        </>
      ),
    },
  ];
  
  const cartData = order.items.map((item) => ({
    key: item.id,
    name: item.name,
    quantity: item.quantity,
    price: item.price,
    total: item.price * item.quantity,
  }));
  return (
    <div className='mt-24 container mx-auto px-24'>
       <Table
  columns={columns}
  dataSource={cartData}
  pagination={{
    total: cartData.length,
    pageSize: 3,
    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
  }}
  summary={() => (
    <>
      <Table.Summary.Row>
        <Table.Summary.Cell colSpan={3} style={{ textAlign: 'right' }}>Total:</Table.Summary.Cell>
        <Table.Summary.Cell>{order.totalPrice} đ</Table.Summary.Cell>
      </Table.Summary.Row>
    </>
  )}
/>
      
  <Form layout="vertical">
    <Form.Item label="Full Name">
      <Input name="fullName" value={customerInfo.fullName} onChange={handleInput} />
    </Form.Item>
    <Form.Item label="Email">
      <Input name="email" value={customerInfo.email} onChange={handleInput} />
    </Form.Item>
    <Form.Item label="Phone">
      <Input name="phone" value={customerInfo.phone} onChange={handleInput} />
    </Form.Item>
    <Form.Item label="Address">
      <Input name="address" value={customerInfo.address} onChange={handleInput} />
    </Form.Item>
  </Form>
 
  </div>
  )
}
