import React, { useEffect, useState } from 'react';
import { Table, Avatar, Tag } from 'antd';
import { orderService } from '../../services/orderService';
import { localStorageService } from '../../services/localStorageService';

export default function OrderPage() {
  const [orders, setOrders] = useState([]);
  const [idUser, setIdUser] = useState(localStorageService.get('USER').userDTO.id);

  useEffect(() => {
    fetchOrders();
  }, [idUser]);

  const fetchOrders = async () => {
    try {
      const response = await orderService.getOrderByUser(idUser);
      console.log(response);
      setOrders(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':
        return 'green';
      case 'Processing':
        return 'blue';
      case 'ORDER_WAIT_CONFIRM':
        return 'yellow';
      case 'Delivered':
        return 'green';
      case 'Cancelled':
        return 'red';
      default:
        return '';
    }
  };

  const columns = [
    {
      title: 'Order ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Created By',
      dataIndex: 'user.fullName',
      key: 'user.fullName',
    },
    {
      title: 'Total Price',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
    },
    {
      title: 'Payment Method',
      dataIndex: 'paymentMethod',
      key: 'paymentMethod',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => <Tag color={getStatusColor(status)}>{status}</Tag>,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Phone Number',
      dataIndex: 'numberPhone',
      key: 'numberPhone',
    },
    {
      title: 'Order Details',
      dataIndex: 'orderDetails',
      key: 'orderDetails',
      render: (details) => (
        <ul>
          {details.map((detail) => (
            <li key={detail.id}>
              Product: {detail.product} - Quantity: {detail.quantity} - Price: {detail.price}
            </li>
          ))}
        </ul>
      ),
    },
  ];
  const tableStyle = {
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    overflow: 'hidden',
  };
  return (
    <div className="container mx-auto mb:px-5 md:px-24 lg:px-24 py-20 ">
      <h1 className="text-3xl font-bold my-6 text-primary">Order List</h1>
      <div style={tableStyle}>
      <Table
        dataSource={orders}
        columns={columns}
        rowKey="id"
        pagination={false}
        expandable={{
          expandedRowRender: (record) => record.orderDetails,
          rowExpandable: (record) => record.orderDetails.length > 0,
        }}
      />
      </div>
    </div>
  );
}
