import React, { useEffect, useState } from 'react'
import { Table, Tag, Space, Pagination,Modal } from 'antd';
import {AiOutlineEdit,AiOutlineDelete} from 'react-icons/ai'
import "./ProductManagerPage.scss"
import {IoIosAddCircleOutline} from "react-icons/io"
import { productService } from '../../../services/productService';
import { useNavigate } from 'react-router-dom';
import { localStorageService } from '../../../services/localStorageService';
export default function ProductManagerPage() {
  const { Column } = Table;
  const navigate = useNavigate()
  const [pageSize, setPageSize] = useState(3); // state để lưu số sản phẩm trên 1 trang
  const [idsProduct, setIdsProduct] = useState([]);
  const [products, setProducts] = useState([])
  const [reloadPage, setReloadPage] = useState(false); // B
  useEffect(() => {
    const id = localStorageService.get('USER').userDTO.id
    const getProductByUserName = async () => {
      try {
        const items = await productService.getProductByShop(id);
        setProducts(items);
      } catch (error) {
        console.log(error);
      }
    };
    getProductByUserName();
  }, [reloadPage]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  //open model confim delete 
  const handleDelete = (record) => {
    const ids = [record.id]
    setIdsProduct(ids)
    setSelectedProduct(record);
    setModalVisible(true);
  };
  
  const handleDeleteProduct = async () => {
    console.log(idsProduct);
    try {
      await productService.delete(idsProduct);
      console.log('Products deleted successfully');
      setReloadPage(!reloadPage)
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
        dataSource={products} 
        pagination={{
            total: products?.length,
            pageSize: pageSize,
            showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
          }}
        // Thêm pagination={false} để ẩn đi phân trang mặc định của Table
        >
        <Column title="Mã sản phẩm" dataIndex="id" key="id" />
        <Column title="Tên sản phẩm" dataIndex="name" key="name" />
        <Column
  title="Số Lượng"
  dataIndex="quantity"
  key="quantity"
  render={(text) => {
    if (text < 1) {
      return <Tag color="red">Hết hàng</Tag>;
    }
    return text;
  }}
/>
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
                <AiOutlineEdit onClick={() => { navigate(`/manager/product-update/${record.id}`) }} className=' text-[20px] hover:scale-125 transition-all'/>
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
