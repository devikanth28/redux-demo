import React from "react";
import { useSelector } from "react-redux";

const Display = () => {
    const value = useSelector(state => state.value);
    const productObj = useSelector(state =>state.products)
    // console.log("posts",productObj)
    return(
        <>
            <div className="d-flex justify-content-center">
                <h1>{value}</h1>
                
            </div>
            <p>posts</p>
            {/* {productObj && productObj.map((item)=>{
                    return(
                        <p>{item.title}</p>
                    )
                })} */}
        </>
    );
};

export default Display;