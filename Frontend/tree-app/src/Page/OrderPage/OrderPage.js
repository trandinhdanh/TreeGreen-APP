import React, { useEffect, useState } from 'react';
import { Table, Avatar, Tag, Button, Modal, message } from 'antd';
import { orderService } from '../../services/orderService';
import { localStorageService } from '../../services/localStorageService';
import { useTranslation } from 'react-i18next';

export default function OrderPage() {
  const [orders, setOrders] = useState([]);
  const [idUser, setIdUser] = useState(localStorageService.get('USER').userDTO.id);
  const [cancelOrderId, setCancelOrderId] = useState(null);
  const {t} = useTranslation()
  const [isCancelModalVisible, setIsCancelModalVisible] = useState(false);
  const [pagination, setPagination] = useState({ current: 1, pageSize: 5 });
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
      case "ORDER_CONFIRM":
        return "blue";
      case "ORDER_WAIT_CONFIRM":
        return "yellow";
      case "ORDER_DONE":
        return "green";
      default:
        return "red";
    }
  };

  const columns = [
    {
      title: 'Order ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: t('Payment Method'),
      dataIndex: 'paymentMethod',
      key: 'paymentMethod',
    },
    {
      title: t('Status'),
      dataIndex: 'status',
      key: 'status',
      render: (status) => <Tag color={getStatusColor(status)}>{status}</Tag>,
    },
    {
      title: t('Address'),
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: t('Phone Number'),
      dataIndex: 'numberPhone',
      key: 'numberPhone',
    },
    {
      title: '',
      key: 'actions',
      render: (text, record) => {
        if (record.status === 'ORDER_WAIT_CONFIRM') {
          return (
            <Button type="primary" danger onClick={() => showCancelModal(record.id)}>
              {t('Cancel')}
            </Button>
          );
        }
        return null;
      },
    },
  ];
  const showCancelModal = (orderId) => {
    setCancelOrderId(orderId);
    setIsCancelModalVisible(true);
  };

  const handleCancel = () => {
    orderService.canceluser(cancelOrderId).then((res) => {
            console.log(res);
            message.success('Cancel Order Success')
            fetchOrders();
          })
          .catch((err) => {
            message.error('Cancel Order Error')
            console.log(err);
          });
    setIsCancelModalVisible(false);
  };

  const handleCancelModal = () => {
    setIsCancelModalVisible(false);
  };
  const handleTableChange = (pagination) => {
    setPagination(pagination);
  };
  const tableStyle = {
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    overflow: 'hidden',
  };

  return (
    <div className="container mx-auto mb:px-5 md:px-24 lg:px-24 py-20 ">
      <h1 className="text-3xl font-bold my-6 text-primary">{t('Order List')}</h1>
      <div style={tableStyle}>
        <Table
          dataSource={orders}
          columns={columns}
          rowKey="id"
          pagination={pagination}
          onChange={handleTableChange}
          expandable={{
            expandedRowRender: (record) => (
              <ul>
                {record.orderDetails.map((detail) => (
                  <li key={detail.id}>
                    {t('Name')}: {detail.product.name} - Quantity: {detail.quantity} - Price: {detail.price.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'})}
                  </li>
                ))}
                <li key={record.id}>
                   {t('Total Price')}: {record.totalPrice.toLocaleString('vi-VN', {style: 'currency', currency: 'VND'})}
                  </li>
              </ul>
            ),
            rowExpandable: (record) => record.orderDetails.length > 0,
          }}
        />
      </div>
      <Modal
        title="Order Cancellation Confirmation"
        visible={isCancelModalVisible}
        onOk={handleCancel}
        onCancel={handleCancelModal}
      >
        <p>Are you sure you want to cancel this order?</p>
      </Modal>
    </div>
  );
}
