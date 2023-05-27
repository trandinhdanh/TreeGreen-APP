import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Pagination } from 'antd';
import FilterShopPage from '../../Components/FilterShopPage/FilterShopPage';
import ProductItem from '../../Components/ProductHomPage/ProductItem';
import { AiOutlineClose } from 'react-icons/ai';
import { BiFilterAlt } from 'react-icons/bi';
import { getAllProduct } from '../../Redux/products/productList';

export default function ShopPage() {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [totalProducts, setTotalProducts] = useState(0);
  const [isFilter, setIsFilter] = useState(false);
  const [valueProducts, setValueProducts] = useState([0, 5000000]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const products = useSelector((state) => state.products.productList.allProduct);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const handleIsFilter = () => {
    setIsFilter((current) => !current);
  };

  const handleFilterChange = (newFilter, newSearchValue, newCategory) => {
    setValueProducts(newFilter);
    setSearchValue(newSearchValue);
    setSelectedCategory(newCategory);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  useEffect(() => {
    const filtered = products?.filter((product) => {
      return (
        (selectedCategory === '' || product.category.code === selectedCategory) && // Lọc theo category.code
        product.price >= valueProducts[0] &&
        product.price <= valueProducts[1] &&
        product.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    });

    setTotalProducts(filtered?.length);

    const startIdx = (currentPage - 1) * pageSize;
    const endIdx = startIdx + pageSize;
    setFilterProducts(filtered?.slice(startIdx, endIdx));
  }, [currentPage, pageSize, products, valueProducts, searchValue, selectedCategory]);

  return (
    <div className="z-10 my-16">
      <button onClick={() => handleIsFilter()} className="lg:hidden flex items-center text-[12px] mt-24 mx-auto text-white  bg-primary font-medium rounded-lg text-sm px-4 py-2 ">
        <BiFilterAlt />Filler
      </button>
      <div className="grid grid-cols-4 gap-10 container mx-auto mb:px-5 md:px-24 lg:px-24 pt-10">
        <div
          className={`${
            isFilter ? 'fixed top-0 left-0 bottom-0 p-5 z-30 bg-white md:block sm:block mb:block w-[300px]' : 'md:  sm:hidden mb:hidden'
          } lg:col-span-1 lg:block animate__fadeInLeft animate__animated`}
        >
          <button onClick={() => handleIsFilter()} className={`${isFilter ? 'block absolute top-3 right-3 p-3' : 'hidden'} hover:rotate-180 transition-all`}>
            <AiOutlineClose className="text-[20px] text-[#867070]" />
          </button>
          <FilterShopPage onFilterChange={handleFilterChange} />
        </div>
        <div className="lg:col-span-3 md:col-span-12 sm:col-span-12 mb:col-span-12 animate__fadeInRight animate__animated">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 mb:grid-cols-2 gap-5">
            {filterProducts?.length === 0 ? (
              <p className="text-[16px] m-0 font-roboto">{t('No Products Found')}</p>
            ) : (
              filterProducts?.map((item, i) => {
                return <ProductItem key={i} data={item} isLoggedIn={isLoggedIn} />;
              })
            )}
          </div>
          <Pagination className="mt-5 flex justify-center" current={currentPage} pageSize={pageSize} total={totalProducts} onChange={handlePageChange} />
        </div>
      </div>
    </div>
  );
}
