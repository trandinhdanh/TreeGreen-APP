import React, { useEffect, useState } from 'react';
import { Table, Form, Input, Radio, Button, message, Modal } from 'antd';
import { cartService } from '../../services/cartService';
import { useDispatch, useSelector } from 'react-redux';
import { localStorageService } from '../../services/localStorageService';
import { openNotificationIcon } from '../../Components/NotificationIcon/NotificationIcon';
import { useTranslation } from 'react-i18next';
import { orderService } from '../../services/orderService';
import { useNavigate } from 'react-router-dom';
import { getAllProduct } from '../../Redux/products/productList';

export default function PaymentPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [customerInfo, setCustomerInfo] = useState();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [idUser, setIdUser] = useState();
  const [cart, setCart] = useState();
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    if (isLoggedIn) {
      const role = localStorageService.get('USER').roles[0]
      if(role === "MANAGER" || role === "SELLER"){
        message.error("No access")
        navigate("/manager"); 
      }
    }else{
      message.error("Please Login")
      navigate('/login')
    }
  }, [isLoggedIn, navigate]);
  useEffect(() => {
    if (isLoggedIn) {
      setCustomerInfo({
        address: localStorageService.get('USER').userDTO.address || '',
        numberPhone: localStorageService.get('USER').userDTO.numberPhone || '',
        paymentMethod: '',
      })
      setIdUser(localStorageService.get('USER').userDTO.id);
      const getAllProductInCart = async () => {
        try {
          const items = await cartService.getAllCart(idUser);
          setCart(items);
          console.log(items);
        } catch (error) {
          console.log(error);
        }
      };
      getAllProductInCart();
    }
  }, [idUser]);

  const handleSubmit = async () => {
    console.log('Customer Info:', customerInfo);
    console.log('Cart:', cart);

    if (customerInfo.address && customerInfo.numberPhone) {
      try {
        await orderService.order(cart.id, customerInfo);
        openNotificationIcon(
          'success',
          'Success',
          'Payment Success! I Love You <3'
        );
        navigate('/order')
        dispatch(getAllProduct())
      } catch (error) {
        console.error('Error:', error);
        openNotificationIcon(
          'error',
          'Error',
          'An error occurred while processing payment.'
        );
        // Xử lý khi có lỗi xảy ra trong quá trình gọi API
      }
    } else {
      // Hiển thị thông báo yêu cầu điền đủ thông tin
      message.error('Please fill in all required fields.');
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handlePaymentButtonClick = () => {
    setShowModal(true); // Hiển thị modal khi chọn phương thức "Credit Card"
  };

  const handleInput = (event) => {
    setCustomerInfo({
      ...customerInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handlePaymentMethodChange = (e) => {
    setCustomerInfo({
      ...customerInfo,
      paymentMethod: e.target.value,
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
          {record.price.toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND',
          })}
        </>
      ),
    },
  ];

  const cartData = cart?.cartItems.map((item) => ({
    key: item.id,
    name: item.product.name,
    quantity: item.quantity,
    price: item.price,
  }));

  return (
    <>
      <div className="mt-24 container mx-auto px-24 grid grid-cols-2 gap-5">
        {cart?.cartItems.length === 0 ? (
          <div className="h-[60vh] ">
            <p className="font-bold uppercase">
              {t('You have no products in your shopping cart')}
            </p>
          </div>
        ) : (
          <>
            <div className="p-8">
              <h1 className="text-center font-bold text-primary uppercase mb-5">
                Payment Order
              </h1>
              <Form layout="vertical" onFinish={handleSubmit}>
                <Form.Item label="Address" rules={[{ required: true }]}>
                  <Input
                    name="address"
                    value={customerInfo?.address}
                    onChange={handleInput}
                  />
                </Form.Item>
                <Form.Item label="Phone" rules={[{ required: true }]}>
                  <Input
                    type="number"
                    name="numberPhone"
                    value={customerInfo?.numberPhone}
                    onChange={handleInput}
                  />
                </Form.Item>

                <Form.Item label="Payment Method">
                  <Radio.Group
                    name="paymentMethod"
                    value={customerInfo?.paymentMethod}
                    onChange={handlePaymentMethodChange}
                  >
                    <Radio value="Cash on Delivery">Cash on Delivery</Radio>
                    <Radio
                      value="Credit Card"
                      onClick={handlePaymentButtonClick}
                    >
                      Credit Card
                    </Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Payment
                  </Button>
                </Form.Item>
              </Form>
              <Modal
                title="Unsupported Payment Method"
                visible={showModal}
                onCancel={handleModalClose}
                footer={[
                  <Button key="close" onClick={handleModalClose}>
                    Close
                  </Button>,
                ]}
              >
                <p>
                  The selected payment method is currently not supported. Please
                  choose another method.
                </p>
              </Modal>
            </div>
            <div className="py-8">
              <h1 className="text-center font-bold text-primary uppercase mb-5">
                Cart Order
              </h1>
              <Table
                columns={columns}
                dataSource={cartData}
                pagination={false}
                summary={() => (
                  <>
                    <Table.Summary.Row>
                      <Table.Summary.Cell colSpan={2} style={{ textAlign: 'right' }}>
                        <p className="font-bold text-[16px]">Total:</p>
                      </Table.Summary.Cell>
                      <Table.Summary.Cell>
                        {cart?.totalPrice.toLocaleString('vi-VN', {
                          style: 'currency',
                          currency: 'VND',
                        })}
                      </Table.Summary.Cell>
                    </Table.Summary.Row>
                  </>
                )}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}
