import React from 'react';
import { useDispatch } from 'react-redux';

function ActionUpdate ()  {
  const dispatch = useDispatch();

  const updateProductValue = (value) => {
    dispatch({ type: 'updateProduct', payload: value });
  };

  const updatePostData = (value)=>{
      dispatch({type:'updatePostData',payload:value})
  } 

  return Object.freeze({
    updateProductValue,
    updatePostData
  }) 
};

export default ActionUpdate;