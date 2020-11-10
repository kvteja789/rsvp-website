import React, { useState } from 'react'
import {useSelector} from "react-redux";

let Third = (props) =>{
   const users = useSelector(state=> state.rsvpRegistered.rsvpUsers)
 let [usefullReports,setUsefullReports] = useState(users)
 
 //here iam rendering data on tables.
 let renderTableData = ()=> {
   return usefullReports.map((student, index) => {
      const { name, locality, profession,guests, age, dob, Address } = student;
      return (
         <tr key={index+1}>
            <td>{name}</td>
            <td>{age}</td>
            <td>{dob}</td>
            <td>{profession}</td>
            <td>{locality}</td>
            <td>{guests}</td>
            <td>{Address}</td>
         </tr>
      )
   })
}

let renderTableHeader = () =>{
 let header = usefullReports.length > 0 ? Object.keys(usefullReports[0]) : []
 return header.map((key, index) => key !== "SaveButton" && <th key={index}>{key.toUpperCase()}</th>)
}

 return (
    <div>
       <table className="table">
          <tbody>
             <tr>{renderTableHeader()}</tr>
             {renderTableData()}
          </tbody>
       </table>
    </div>
 )
}

export default Third