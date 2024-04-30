import React from 'react'
const initialState = {
    products:{},
  };
const ProductReducer = (state = initialState,action) => {
    switch(action.type){
        case "updateProduct":
            return{
                ...state,
                "products": {...state.products.products,...action.payload}
            };
        case "updatePostData":
            return{
                ...state,
                "posts":{...state.products.posts,...action.payload}
            }
    }
    return state;
}

export default ProductReducer

