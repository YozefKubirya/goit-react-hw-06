import { useSelector } from "react-redux"
import Contact from "../Contact/Contact";
import css from '../ContactList/ContactList.module.css'
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
export default function ContactList(){
   const contacts=useSelector(selectContacts);
   const filterName=useSelector(selectNameFilter)
   const filteredContact=contacts.filter((contact)=>contact.name.toLowerCase().includes(filterName.toLowerCase()))
   // console.log(contacts);
   return<>
<ul className={css.contactList}>
   {filteredContact.map((contact)=>(
      
      <li key={contact.id} className={css.contact}>
      <Contact name={contact.name} number={contact.number} id={contact.id}/>
   </li>
  
      
   ))}
</ul>
   </>
}