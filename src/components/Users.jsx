import React from "react";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../redux/actions/userUpdateActions";

function Users() {

    const dispatch = useDispatch();
    const handleSetUserDetails = () => {
    
      const user = {
          name: 'Chandra',
          email: 'c.prakash100@gmail.com',
          phone: '9810394732',
       
      }

        dispatch(setUserDetails(user));
      };

  return (
    <>
      
      <button onClick={handleSetUserDetails}>Set User Details</button>
    </>
  );
}

export default Users;
