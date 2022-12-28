// import React, { useState, useEffect } from "react";

import OrderListt from "./orderList";
import useFetch from "./useFetch";

const OrderPage = () => {
const  { data : stocks, isloading,  error } = useFetch('http://localhost:8000/blogs')
  
  return (
    <div className="ORDERPAGE">
      {error &&  <h1>{error}</h1>     }

      {isloading && <h1>loading....</h1>}
      
     { stocks && <OrderListt
        stocks={stocks}
        title="all medicine list"
       
      />}

      
      <p> the page exist</p>
    </div>
  );
};

export default OrderPage;
/* <OrderListt stocks={stocks.filter( (stocks) => stocks.companyName ===  'abayeHolesale')}  title='abayes list ' />    */
