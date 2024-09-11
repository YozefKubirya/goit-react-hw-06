import { useDispatch, useSelector } from "react-redux"
import { filterContact } from "../../redux/store"
import css from '../SearchBox/SearchBox.module.css'
export default function SearchBox(){
   const dispatch= useDispatch()
   const filterName=useSelector(state=>state.filters.name)
  
   const searchContact=(e)=>{
      
    
dispatch(filterContact({name:e.target.value}))
   }
   return<>
   <div className={css.searchContainer}>
   <p>Search Contact by Name</p>
   <input type="text"  name="name" value={filterName} onChange={searchContact} className={css.searchInput}/>
   </div>
   </>
}