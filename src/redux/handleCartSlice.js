import { createSlice } from '@reduxjs/toolkit'

export const handleCartSlice = createSlice({
  name: 'cart',
  initialState: {
    items:localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")):[],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
    value:1,
  
  },
  reducers: {

    addProdToCart(state, action){
        const existingIndex = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
  
        if (existingIndex >= 0) {
           // If item already there
              alert("alredy exist in cart");
          state.cartItems[existingIndex] = {
            ...state.items[existingIndex],
            cartQuantity: state.items[existingIndex].cartQuantity + 1,
          };
        
        } else {
          let tempProductItem = { ...action.payload, cartQuantity: 1 };
          state.items.push(tempProductItem);
        
        }
          localStorage.setItem("cartItems", JSON.stringify(state.items));
          },

    removeItemFromCart(state, action) {
          const removeItemId = action.payload;
          state.items = state.items.filter(item => {
                      return item.id !== removeItemId;
                  })   
    
          localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    incresQntity(state,action) {
            // state.value += 1

            const itemIndex = state.items.findIndex(
              (item) => item.id === action.payload.id
            );
           state.items[itemIndex].cartQuantity += 1;
           localStorage.setItem("cartItems", JSON.stringify(state.items));
          },
          
    decrQntity(state,action){
      //   if(state.value === 1){

      //   const removeItemId = action.payload;
      //   state.items = state.items.filter(item => {
      //               return item.id !== removeItemId;
      //           }) 
      //   }else{
      //   state.value -= 1
      //  }
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.items[itemIndex].cartQuantity > 1) {
        state.items[itemIndex].cartQuantity -= 1;

      } else if (state.items[itemIndex].cartQuantity === 1)
       {
        state.items= state.items.filter(
          (item) => item.id !== action.payload.id
        );
     
      }
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    
      },   

    getTotals(state, action) {
        let { total, quantity } = state.items.reduce(
          (cartTotal, cartItem) => {
            const { price, cartQuantity } = cartItem;
            const itemTotal = price * cartQuantity;
  
            cartTotal.total += itemTotal;
            cartTotal.quantity += cartQuantity;
  
            return cartTotal;
          },
          {
            total: 0,
            quantity: 0,
          }
        );
        total = parseFloat(total.toFixed(2));
        state.cartTotalQuantity = quantity;
        state.cartTotalAmount = total;
        localStorage.setItem("cartItems", JSON.stringify(state.items));
      },
    

  
      },
        
          
})
 



export const cartActions = handleCartSlice.actions;
export default handleCartSlice;