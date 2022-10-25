import React, { useState } from "react";
import { TYPES } from "./acciones";
import { useEffect } from "react";
import Productos from "./Productos";
import ItemsCarrito from "./ItemsCarrito";
import { useToursContext } from "./ToursContext";
import axios from "axios";
import { shoppingInitialState } from "./shoppingReducer";

//export const PostCarrito = function(){saveData(item)};

const ShoppingCart = ({ setvisibleCart, item }) => {
  const { state, dispatch } = useToursContext();
  const { products, cart } = state;
  //const {id,nombre,precio,cantidad}=item;
  const [db, setDb] = useState(shoppingInitialState);

  const getState = async (data) => {
    const productsURL = "http://localhost:8080/products";
    const cartURL = "http://localhost:8080/cart";
    const resProducts = await axios.get(productsURL);
    const resCart = await axios.get(cartURL);
    const ProductList = await resProducts.data;
    const newCartItem = await resCart.data;

    dispatch({ type: TYPES.READ_STATE, payload: [ProductList, newCartItem] });
  };

  useEffect(() => {
    getState();
  }, []);

  const addToCart = async (data) => {
    data.id = Date.now();

    data["cantidad"] = 1;

    const options = {
      method: "POST",
      headers: { "content-type": "application/json" },
      data: JSON.stringify(data),
    };

    await axios("http://localhost:8080/cart", options);

    getState();
  };

  const incrementarContador = async (data) => {
    const { id} = data;
    const endpoint = `http://localhost:8080/cart/${id}`;

    data.cantidad ++;

    const options = {
      method: "PUT",
      headers: { "content-type": "application/json" },
      data: JSON.stringify(data),
    };

    await axios(endpoint, options);

    getState();
  };

  const decrementarContador = async (data) => {
    const { id, cantidad } = data;

    if (cantidad > 1) {
      const endpoint = `http://localhost:8080/cart/${id}`;

      data.cantidad--;

      const options = {
        method: "PUT",
        headers: { "content-type": "application/json" },
        data: JSON.stringify(data),
      };

      await axios(endpoint, options);

      getState();
    }
    return state;
  };

  const deleteFromCart = async (id) => {
   

    const endpoint = `http://localhost:8080/cart/${id}`;

      const options = {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      };

      await axios(endpoint, options);

      getState();
     
    
  };

  return (
    <>
      <div className="bg-yellow-500 w-5/6 h-screen  md:w-2/5  flex-col flex-nowrap item-center justify-center float-right">
        {/* <svg  onClick={()=>{setvisibleCart(false)}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.424 13.364 12 17.606 7.758z" />
        </svg>        
    <div className='flex flex-auto justify-around gap-12  bg-orange-500 border-2'>
        {products.map(product => <Productos key={product.id} data={product} addToCart={addToCart}/>)}
     </div> 
     <h3>carrito</h3> */}

        {/* {
      data.lengt=== 0 && (
        alert("Tu carrito esta vacio")
      )
     }
     {
      data.lengt !== 0 && (

        cart.map((item,index)=><ItemsCarrito key={index} data={item} addToCart={addToCart} deleteFromCart={deleteFromCart}/>)
      )
     } */}

        <div>
          {cart.map((item, index) => (
            <ItemsCarrito
              key={index}
              data={item}
              addToCart={addToCart}
              deleteFromCart={deleteFromCart}
              incrementarContador={incrementarContador}
              decrementarContador={decrementarContador}
              // saveData={saveData}
              // updateData={updateData()}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
