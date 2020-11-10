import React,{useState} from 'react';
import {useSelector} from "react-redux";

let Second = (props) =>{
const users = useSelector(state=> state.rsvpRegistered.rsvpUsers)
    let [formInfo,setFormInfo] = useState(users)

    //Below function is for filtering items 
    let filterList = (e) =>{
     const filteredData= users.filter(user=> user.name.toLowerCase().includes((e.target.value).toLowerCase()) || user.locality.toLowerCase().includes((e.target.value).toLowerCase()))
     setFormInfo(filteredData)
    }
    
    return(
      <div className="container">
        <div className="filter-list">
        <form>
        <fieldset className="form-group">
          <input type="text" className="form-control form-control-lg" placeholder="Search..." onChange={filterList}/>
        </fieldset>
        </form>

        <ul className="list-group">
         {
          formInfo.map(function(item, index) {
          return(
            <div>
              <li className="list-group-item" key={index+1}>
                Name: {item.name} <br/>
                Locality: {item.locality}
               </li>
            </div>
          )
        })
        }
        </ul>
       </div>
      </div>
    )
}
export default Second