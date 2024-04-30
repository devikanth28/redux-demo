import { useDispatch } from "react-redux";


export const Increment = (value) => {
    return (dispatch) => {
        dispatch({
            type: "increment",
            payload: value
        });
    }
};

export const Decrement = (value) => {
    return (dispatch) => {
        dispatch({
            type: "decrement",
            payload: value
        });
    }
};

export const UpdateProductValue = (value) => {
        return (dispatch) => {
                dispatch({
                type: "updateProduct",
            payload: value
        });
    }
};
