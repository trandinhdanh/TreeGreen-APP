import Routers from "./Router/Routers";
import "./App.css"
import Loading from "./Components/Loading/Loading";
import { useEffect } from "react";
import { getAllProduct } from "./Redux/products/productList";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch()
  useEffect(() => { 
    dispatch(getAllProduct());
    },[dispatch])
  return (
    <div className="">
      <Loading/>
      <Routers/>
    </div>
  );
}

export default App;
