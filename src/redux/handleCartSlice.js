import { createSlice } from '@reduxjs/toolkit'

export const handleCartSlice = createSlice({
  name: 'cart',
  initialState: {
    items:localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")):[],
    totalQuantity:0,
    value:1,
  },
  reducers: {

    addProdToCart(state, action){
        const product = action.payload;
        const existingCartItem = state.items.find((curElem)=>curElem.id === product.id);
        
             if(!existingCartItem){ 
              // If New Item
              state.items.push({...product,  quantity   : 1});
               }else{ 
              // If item already there
              alert("alredy exist in cart");
              existingCartItem.quantity++;
             
            }
          localStorage.setItem("cartItems", JSON.stringify(state.items));
            },

    removeItemFromCart(state, action) {
          const removeItemId = action.payload;
          state.items = state.items.filter(item => {
                      return item.id !== removeItemId;
                  })   
          },

    incresQntity(state) {
            state.value += 1
          },
          
    decrQntity(state,action){
        if(state.value === 1){

        const removeItemId = action.payload;
        state.items = state.items.filter(item => {
                    return item.id !== removeItemId;
                }) 
        }else{
        state.value -= 1
       }
           
          },     
        },
        
          
})
 



export const cartActions = handleCartSlice.actions;
export default handleCartSlice;