import React, { useEffect, useState } from 'react';
import { Button, Space, Table, Modal } from 'antd';
import { AiOutlineEdit } from 'react-icons/ai';
import { categoryService } from '../../../services/categoryService';

export default function CategoryManager() {
  const { Column } = Table;
  const [categories, setCategories] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newCategory, setNewCategory] = useState({ name: '' });
  const [editCategoryId, setEditCategoryId] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await categoryService.getCategory();
      setCategories(response);
      console.log(response);
    } catch (error) {
      console.error('Failed to fetch categories:', error);
    }
  };

  const handleAddClick = () => {
    setModalVisible(true);
    setEditCategoryId(null); // Clear editCategoryId when adding a new category
    setNewCategory({ name: '' }); // Clear the newCategory state
  };

  const handleEdit = (record) => {
    setModalVisible(true);
    setEditCategoryId(record.id);
    setNewCategory({ name: record.name });
  };

  const handleSaveCategory = async () => {
    try {
      if (editCategoryId) {
        // Edit existing category
        await categoryService.edit(editCategoryId, { name: newCategory.name });
      } else {
        // Add new category
        await categoryService.create({ name: newCategory.name });
      }
      setModalVisible(false);
      fetchCategories(); // Fetch updated categories after adding/editing a category
    } catch (error) {
      console.error('Failed to add/edit category:', error);
    }
  };

  return (
    <div className='w-full'>
      
      <div className="headerManager font-roboto mb-5 flex justify-between">
        <h1 className="font-bold text-[20px] uppercase ">
        Category Management
        </h1>
        <Button type="primary" onClick={handleAddClick}>
        Add
      </Button>
      </div>
      <Table dataSource={categories} rowKey="id">
        <Column title="ID" dataIndex="id" key="id" />
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Code" dataIndex="code" key="code" />
        <Column
          title="Action"
          key="action"
          render={(text, record) => (
            <Space size="middle">
              <AiOutlineEdit
                onClick={() => handleEdit(record)}
                className="text-[20px] hover:scale-125 hover:text-primary transition-all"
              />
            </Space>
          )}
        />
      </Table>

      <Modal
        title={editCategoryId ? 'Edit Category' : 'Add Category'}
        visible={modalVisible}
        onOk={handleSaveCategory}
        onCancel={() => setModalVisible(false)}
      >
        <form>
          <label>
            Name:
            <input
              type="text"
              value={newCategory.name}
              onChange={(e) =>
                setNewCategory({ ...newCategory, name: e.target.value })
              }
            />
          </label>
        </form>
      </Modal>
    </div>
  );
}
