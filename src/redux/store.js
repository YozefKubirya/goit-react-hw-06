import { configureStore, createAction } from "@reduxjs/toolkit";
const initialState={
   contacts:{
      items:[
         {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
         {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
         {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
         {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
       ]
       
   },
   filters: {
		name: ""
	}
}

export const addContact= createAction("contacts/addContacts")
export const deleteContact=createAction("contacts/deleteContacts");
export const filterContact=createAction("contacts/filterContact");
const rootReducer=(state=initialState,action)=>{
   switch(action.type){
case "contacts/addContacts" :
   return{
      ...state,
      contacts:{
         items:[...state.contacts.items, action.payload]
      }
   };
   case "contacts/deleteContacts" :
      return{
         ...state,
         contacts:{
            items:state.contacts.items.filter((contact)=> contact.id !== action.payload)
         }
      }
case "contacts/filterContact":
   return{
      ...state,
      filters:{
        ...state.filters,
         name:action.payload.name
      }
   }

   default:
      return state;
   }
  
   
}
export const store= configureStore({
   reducer:rootReducer
})