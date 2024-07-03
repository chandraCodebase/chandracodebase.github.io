import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/actions/counterActions";

function Counter() {
  
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  const handleClickIncrement = () => {
    
    dispatch(increment()); // dispatch action
  };

  const handleClickDecrement = () => {
    dispatch(decrement()); // dispatch action
  };

  return (
    <>
      <button className="btn btn-primary mt-5" onClick={handleClickIncrement}>
  Increment
</button>

{count > 0 ? (
  
  <button className="btn btn-primary mt-5" onClick={handleClickDecrement}>
  Decrement
</button>
) : (
  <></>
)}





    </>
  );
}

export default Counter;
