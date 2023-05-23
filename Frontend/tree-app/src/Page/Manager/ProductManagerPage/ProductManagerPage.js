import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../../../Redux/products/productList';
import { Table, Tag, Space, Pagination,Modal } from 'antd';
import {AiOutlineEdit,AiOutlineDelete} from 'react-icons/ai'
import "./ProductManagerPage.scss"
import {IoIosAddCircleOutline} from "react-icons/io"
import productList from '../../../Redux/products/productList';
import { productService } from '../../../services/productService';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function ProductManagerPage() {
  const { Column } = Table;
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [page, setPage] = useState(1); // state để lưu trang hiện tại
  const [pageSize, setPageSize] = useState(3); // state để lưu số sản phẩm trên 1 trang
  const [idsProduct, setIdsProduct] = useState([]);
  const products = useSelector((state) => state.products.productList.allProduct); 
  useEffect(() => { 
    dispatch(getAllProduct());
  }, [dispatch]) 
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(selectedRowKeys);
    setSelectAll(false); // Thêm dòng này để đảm bảo rằng chỉ một sản phẩm được chọn
  };
  
  const rowSelection = {
    selectedRowKeys: selectAll ? products.map((product) => product.key) : selectedRowKeys,
    onChange: onSelectChange,
  };
  //open model confim delete 
  const handleDelete = (record) => {
    setSelectedProduct(record);
    setModalVisible(true);
  };
  
  const handleDeleteProduct = async () => {
    try {
      await productService.delete([25]);
      console.log('Products deleted successfully');
      // Xử lý khi xóa sản phẩm thành công
    } catch (error) {
      console.error('Failed to delete products:', error);
      // Xử lý khi có lỗi xóa sản phẩm
    }
    setModalVisible(false);
  };
  
  return (
    <div className='w-full'>
      <div className="headerManager font-roboto mb-5 flex justify-between">
        <h1 className="font-bold text-[20px] uppercase ">
        Product Management
        </h1>
        <button onClick={() => { navigate('/manager/product-add') }} className="text-white bg-primary font-medium rounded-lg text-sm px-4 py-2 flex items-center hover:scale-110 transition-all">Add <IoIosAddCircleOutline className='ml-2 text-[20px]'/> </button>
      </div>
      <Table 
        rowSelection={rowSelection} 
        dataSource={products} 
        pagination={{
            total: products?.length,
            pageSize: pageSize,
            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
          }}
        // Thêm pagination={false} để ẩn đi phân trang mặc định của Table
        >
        <Column title="Mã sản phẩm" dataIndex="code" key="code" />
        <Column title="Tên sản phẩm" dataIndex="name" key="name" />
        <Column
          title="Hình ảnh"
          dataIndex="image"
          key="image"
          render={(image) => <img src={image} className='w-[70px] h-[70px] object-cover rounded-lg' alt="product" />}
        />
        <Column
          title="Giá tiền"
          dataIndex="price"
          key="price"
          render={(price) => <Tag color="green">{price.toLocaleString()} VNĐ</Tag>}
        />
        <Column
          title=""
          key="action"
          render={(text, record) => (
            <Space size="middle">
                <AiOutlineEdit className=' text-[20px] hover:scale-125 transition-all'/>
                <AiOutlineDelete onClick={() => { 
                  handleDelete(record)
                 }} className='text-[20px] hover:scale-125 hover:text-red-700 transition-all'/>
            </Space>
          )}
        />
      </Table>
      
      <Modal
      title={`Xóa sản phẩm ${selectedProduct?.name} ?`}
      visible={modalVisible}
      onOk={handleDeleteProduct}
      onCancel={() => setModalVisible(false)}
    ></Modal>
    </div>
  )
}
