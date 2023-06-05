import React, { useEffect, useState } from "react";
import { Button, Modal, Table, Tag } from "antd";
import { orderService } from "../../../services/orderService";
import { localStorageService } from "../../../services/localStorageService";

export default function OderManagerPage() {
  const [orders, setOrders] = useState([]);
  const [idUser, setIdUser] = useState(
    localStorageService.get("USER").userDTO.id
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [selectedOrderStatus, setSelectedOrderStatus] = useState(null);
  const [pagination, setPagination] = useState({ current: 1, pageSize: 3 });

  useEffect(() => {
    fetchOrders();
  }, [idUser]);

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleUpdate = (record) => {
    setSelectedOrderStatus(record.status)
    setSelectedOrder(record);
    setIsModalOpen(true);
  };
  const fetchOrders = async () => {
    try {
      const response = await orderService.getOrderBySeller(idUser);
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
      title: "Order ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Created By",
      dataIndex: "createBy",
      key: "createBy",
    },
    {
      title: "Payment Method",
      dataIndex: "paymentMethod",
      key: "paymentMethod",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => <Tag color={getStatusColor(status)}>{status}</Tag>,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Phone Number",
      dataIndex: "numberPhone",
      key: "numberPhone",
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => {
        if (record.status === 'ORDER_WAIT_CONFIRM' || record.status === 'ORDER_CONFIRM') {
          return (
            <Button type="primary" onClick={() => handleUpdate(record)}>
            Update
          </Button>
          )
        }
        return null;
      },
    },
  ];
   
  const handleConfirm = async (idOrder) => {
    try {
      const response = await orderService.confirm(idOrder);
      console.log(response);
      setIsModalOpen(false);
      fetchOrders()
    } catch (error) {
      console.log(error);
    }
  };
  const handleDone = async (idOrder) => {
    try {
      const response = await orderService.done(idOrder);
      console.log(response);
      setIsModalOpen(false);
      fetchOrders()

    } catch (error) {
      console.log(error);
    }
  };
  const handleCancelOrder = async (idOrder) => {
    try {
      const response = await orderService.cancel(idOrder);
      console.log(response);
      setIsModalOpen(false);
      fetchOrders()

    } catch (error) {
      console.log(error);
    }
  };
  const tableStyle = {
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    overflow: "hidden",
  };
  const displayBtnModal = () => { 
    switch (selectedOrderStatus) {
      case "ORDER_WAIT_CONFIRM":
       return (

         <>
        <Button
        type="primary"
        style={{ background: "#30A2FF" }}
        onClick={() => handleConfirm(selectedOrder.id)}
      >
        ORDER_CONFIRM
      </Button>
      <Button
            type="primary"
            style={{ background: "#B70404" }}
            onClick={() => handleCancelOrder(selectedOrder.id)}
            >
            ORDER_CANCEL
          </Button>
      </>
            )
      
      default:
        return (
          <>
           <Button
            type="primary"
            style={{ background: "#1B9C85" }}
            onClick={() => handleDone(selectedOrder.id)}
          >
            ORDER_DONE
          </Button>
          </>
        )
    }
   }
   const handleTableChange = (pagination) => {
    setPagination(pagination);
  };
  return (
    <div className="">
      <h1 className="text-3xl font-bold my-6 text-primary">Order List</h1>
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
                    Name Product: {detail.product.name} - Quantity:{" "}
                    {detail.quantity} - Price:{" "}
                    {detail.price.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </li>
                ))}
                <li key={record.id}>
                  Total Price:{" "}
                  {record.totalPrice.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </li>
              </ul>
            ),
            rowExpandable: (record) => record.orderDetails.length > 0,
          }}
        />
      </div>
      <Modal
        title="Update Status Order"
        visible={isModalOpen}
        onCancel={handleCancel}
        footer={
          <div>
            <Button type="primary" onClick={handleCancel}>
              Cancel
            </Button>
          </div>
        }
      >
        <div className="flex flex-col space-y-2 mx-20 py-5">
          {displayBtnModal()}
        </div>
      </Modal>
    </div>
  );
}
