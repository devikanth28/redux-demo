import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ActionUpdate from '../redux/actions/ActionUpdate';
// import { updateProductValue } from '../redux/actions/ActionUpdate';

const CallingFunction = () => {
  const [productObj, setProductObj] = useState([]);
  const productInfo = useSelector((state) => state.products);
    const [posts, setPosts]=useState([]);
    console.log("productInfo",productInfo)
  useEffect(() => {
    getData();
    getPostData()
  }, []);
  const actionsend=ActionUpdate();

  const getData = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      setProductObj(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getPostData = async () =>{
      try{
          const response = await fetch('https://jsonplaceholder.typicode.com/posts');
          const data = await response.json();
          setPosts(data);
      }
      catch(err){
          console.log(err);
      }
  }

  const handleSendDataToAction = () => {
   actionsend.updateProductValue(productObj);
  };
  const handlePostData = () =>{
      actionsend.updatePostData([posts])
  }
  return (
    <div>
      CallingFunction
      <button onClick={handleSendDataToAction}>Producs Data</button>
      <button onClick={handlePostData}>Post Data</button>
      <p>products</p>
      {productInfo && productInfo.products?.products?.map((item) => {
        return (
          <p key={item.id}> from products {item.title}</p>
        );
      })}
      <p>posts</p>
      {
          productInfo && productInfo.posts?.["0"]?.map((item)=>{
              return(
                  <p> from posts{item.userId}</p>
              )
          })
      }
    </div>
  );
};

export default CallingFunction;