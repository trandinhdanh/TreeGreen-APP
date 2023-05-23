import React, { useEffect, useState } from 'react';
import { userService } from '../../../../services/userService';
import { Table, Tag, Space, Modal } from 'antd';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import './PersonTableManager.scss'
export default function SellerManagement() {
  const { Column } = Table;
  const [sellers, setSellers] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSeller, setSelectedSeller] = useState(null);

  useEffect(() => {
    const getSellers = async () => {
      try {
        const items = await userService.getByRole('seller');
        setSellers(items);
      } catch (error) {
        console.log(error);
      }
    };

    getSellers();
  }, []);

  const handleDelete = (record) => {
    setSelectedSeller(record);
    setModalVisible(true);
  };

  const handleDeleteSeller = async () => {
    try {
      const items = await userService.delete(selectedSeller.id);
      console.log('Seller deleted successfully');
      // Handle successful deletion
    } catch (error) {
      console.error('Failed to delete seller:', error);
      // Handle error when deleting seller
    }
    setModalVisible(false);
  };

  return (
    <div>
      <Table dataSource={sellers}>
        <Column title="ID" dataIndex="id" key="id" />
        <Column title="Username" dataIndex="username" key="username" />
        <Column title="Full Name" dataIndex="fullName" key="fullName" />
        <Column title="Status" dataIndex="status" key="status" />
        <Column
          title="Action"
          key="action"
          render={(text, record) => (
            <Space size="middle">
              <AiOutlineDelete
                onClick={() => handleDelete(record)}
                className="text-[20px] hover:scale-125 hover:text-primary transition-all"
              />
            </Space>
          )}
        />
      </Table>

      <Modal
        title={`Delete Seller ${selectedSeller?.fullName}?`}
        visible={modalVisible}
        onOk={handleDeleteSeller}
        onCancel={() => setModalVisible(false)}
      ></Modal>
    </div>
  );
}
