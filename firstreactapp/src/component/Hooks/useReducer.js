import React, { useEffect, useReducer } from "react";
import "./style.css";

const reducer = (state, action) => {
    if (action.type === "INCR") {
        state += 1
    }

    if (state > 0 && action.type === "DECR") {
        state -= 1
    }
    return state
}

const UseReducer = () => {
    // const [myNum, setMyNum] = React.useState(0);
    const [state, dispatch] = useReducer(reducer, 0)

    useEffect(() => {

        if (`Chats(${state})` === `Chats(0)`) {
            document.title = `Chats`
        }
        else {
            document.title = `Chats(${state})`
        }
    })

    return (
        <>
            <div className="center_div">
                <p>{state}</p>
                <div class="button2" onClick={() => dispatch({ type: "INCR" })}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR
                </div>
                <div
                    class="button2"
                    onClick={() => dispatch({ type: "DECR" })}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    DECR
                </div>
            </div>
        </>
    );
};

export default UseReducer;