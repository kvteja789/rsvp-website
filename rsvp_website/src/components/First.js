import React,{useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {saveRSVPUsers} from '../Actions'
import Input from './Input';

let First = (props) =>{
const dispatch = useDispatch()
const users = useSelector(state=> state.rsvpRegistered.rsvpUsers)

//created re-usable obj for making forms so in future if we want to add another for we simply add one object without touching template.
    let [formData,setFormData] = useState({
        data:{
            name:{
                elementType:'text',
                elementConfig:{
                    name:'name',
                    placeholder: 'Enter your name'
                },
                label:'Name',
                value:''
            },
            age:{
                elementType:'number',
                elementConfig:{
                    name:'age',
                    placeholder: 'Enter your age'
                },
                label:'Age',
                value:''
            },
            dob:{
                elementType:'date',
                elementConfig:{
                    name:'dob',
                    placeholder: 'Enter your date of birth (DD-MM-YYYY)'
                },
                label:'DOB',
                value:''
            },
            profession:{
                elementType:'text',
                elementConfig:{
                    name:'profession',
                    placeholder: 'Enter your profession'
                },
                label:'Profession',
                value:''
            },
            locality:{
                elementType:'text',
                elementConfig:{
                    name:'locality',
                    placeholder: 'Enter locality'
                },
                label:'Locality',
                value:''
            },
            guests:{
                elementType:'number',
                elementConfig:{
                    name:'guests',
                    placeholder: 'Enter number of guests'
                },
                label:'Number of Guests',
                value:''
            },
            Address:{
                elementType:'textarea',
                elementConfig:{
                    name:'guests',
                    placeholder: 'Enter your Address'
                },
                label:'Enter your Address',
                value:''
            },
            SaveButton:{
                elementType:'button',
                elementConfig:{
                },
                label:"submit",
                value:''
            }
        }
      })
      let formDataArray = [];

      for(let key in formData.data){
        formDataArray.push({
            key:key,
            value:formData.data[key]
        })
      }
      
      // Below function triggers when user entering something on input field.
      let getUserInputData = (event,fieldName) =>{
          let updatedFormData = {...formData.data};
          let updatedField = updatedFormData[fieldName];
          updatedField.value = event.target.value;
          updatedFormData[fieldName] = updatedField;
          setFormData({
            data:updatedFormData
          })
      }
      
      // instead of adding normal html template here used map to iterate each object to display forms
      let fieldToDisplay = null;
      fieldToDisplay = formDataArray.map(field =>{
          return <Input key={field.key} elementType={field.value.elementType}
          elementConfig={field.value.elementConfig} label={field.value.label}
          getInput={(event) => getUserInputData(event,field.key)}/>
      })
   
    //Below function  trigger when user tap on submit button

     let saveEmployeeDataHandler = (event) =>{
         event.preventDefault();
         let finalData = {};
         //console.log(formData.data); 
         for(let key in formData.data){
            finalData[key] = formData.data[key].value;
         }
         users.push(finalData)
         dispatch(saveRSVPUsers(users))
         props.history.push('/Second');
     }
    return(
      <div className="container">
          <form onSubmit={saveEmployeeDataHandler}>
              {fieldToDisplay}
          </form>
      </div>
    )
}
export default First;