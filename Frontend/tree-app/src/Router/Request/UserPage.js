import { message } from 'antd';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';

function RequestPage({auth}) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth) {
      navigate('/');
      message.error('Please Login!')
    }
  }, [auth]);
  return <Outlet />;
}

export default RequestPage;