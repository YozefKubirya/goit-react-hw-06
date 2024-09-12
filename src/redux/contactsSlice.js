import {  createSlice } from "@reduxjs/toolkit";
// export const addContact= createAction("contacts/addContacts")
// export const deleteContact=createAction("contacts/deleteContacts");

export const selectContacts = state=>state.contacts.items;

const contactSlice=createSlice({
   name:"contacts",
   initialState: {items:[
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ]  },
    reducers:{
      addContact:(state,action)=>{
         return {
            ...state,
            items:[...state.items, action.payload],
         }},
      deleteContact:(state,action)=>{
         return {
            ...state,
            items:state.items.filter((contact)=> contact.id !== action.payload)
         }
      }   
    }   
})
export const {addContact,deleteContact}=contactSlice.actions;

export default contactSlice.reducer;




// export const contactReducer =(state=initialState.contacts,action)=>{
//    switch (action.type){
//    case "contacts/addContacts":
//       return{
//          ...state,
//          items:[...state.items, action.payload]
//       };
//       case "contacts/deleteContacts":
//          return{
//             ...state,
//             items:state.items.filter((contact)=> contact.id !== action.payload)
//          }

//       default:
//          return state;
      
//    }
// }