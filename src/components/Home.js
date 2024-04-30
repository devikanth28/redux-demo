import React from "react";
import { useDispatch } from "react-redux";
import { Increment, Decrement } from "../redux/actions/UpdateValue";

const Home = () => {
    const dispatch = useDispatch();

    return(
        <>
            <div className="d-flex justify-content-evenly mt-5">
                <button type="button" className="col-2 btn btn-success text-light" onClick={() => dispatch(Increment(10))}>Increment</button>
                <button type="button" className="col-2 btn btn-danger text-light" onClick={() => dispatch(Decrement(10))}>Decrement</button>
            </div>
        </>
    );
}

export default Home;