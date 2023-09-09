// import { createSlice } from "@reduxjs/toolkit";


// const cartSlice = createSlice({
//     name:'cart',
//     initialState:{
//         items:[],
//     },
// // remember reducer-s reducers....
//     reducers:{
//         addItem: (state, action) =>{
//             state.items.push(action.payload);
//         },

//         removeItem: (state, action) =>{
//             state.items.pop();
//         },

//         clearCart:(state) =>{
//             state.items=[];
//         },

        
//     },
// });

// export const{addItem, removeItem, clearCart}= cartSlice.actions;
// // remember here only the reducer..
// export default cartSlice.reducer;


// // constSlice = {
// //     actions:{
// //         addItem,
// //         removeItem,
// //         clearCart,

// //     },
// //     reducer : reducers
// // }


import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },

        removeItem:(state,action)=>{
            state.items.pop();
        },

        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
