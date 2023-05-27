import React, { useEffect, useState } from 'react';
import './BlogList.scss';
import { Link } from 'react-router-dom';
import { Pagination } from 'antd';

export default function BlogList({blog}) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;
  const [displayedBlogs, setDisplayedBlogs] = useState([]);

  useEffect(() => {
    const startIdx = (currentPage - 1) * pageSize;
    const endIdx = startIdx + pageSize;
    const paginatedBlogs = blog?.slice(startIdx, endIdx);
    setDisplayedBlogs(paginatedBlogs);
  }, [currentPage,blog]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {displayedBlogs.map((item, i) => (
        <Link key={i} to={`/blog/${item.id}`}>
          <div className='blogItem h-[150px] rounded-lg flex justify-between mb-5 p-5'>
            <div>
              <p className='m-0 pb-2'>{item.createBy} - {item.createDate}</p>
              <h1 className='font-bold font-montserrat text-[#292929] text-[12px]'>{item.title}</h1>
              <p className='m-0'>{item.shortDescription}</p>
            </div>
            <img className='w-2/5 object-cover rounded-lg' src={item.image} alt='Blog thumbnail' />
          </div>
        </Link>
      ))}
      <Pagination
        className='mt-5 flex justify-center'
        current={currentPage}
        pageSize={pageSize}
        total={blog?.length}
        onChange={handlePageChange}
      />
    </div>
  );
}
