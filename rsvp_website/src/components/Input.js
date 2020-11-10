import React from 'react';

let Input = (props) =>{
    let formElements = null;

    switch(props.elementType){ 
      case 'text':
        formElements = <div className="form-group">
         <label>{props.label}</label>
            <input type= {props.elementType} className="form-control" {...props.elementConfig} onChange={props.getInput} />
        </div>
        break;    
      case 'number':
        formElements = <div className="form-group">
         <label>{props.label}</label>
            <input type= {props.elementType} className="form-control" {...props.elementConfig} onChange={props.getInput} />
        </div>
        break;
     case 'date':
     formElements = <div className="form-group">
        <label>{props.label}</label>
        <input type= {props.elementType} className="form-control" {...props.elementConfig} onChange={props.getInput} />
     </div>
    break;
      case 'textarea':
       formElements = <div className="form-group">
        <label>{props.label}</label>
            <textarea type= {props.elementType} className="form-control" {...props.elementConfig} onChange={props.getInput} />
        </div>
        break;
        case 'button':
        formElements = <div className="form-group">
            <button className="btn btn-info">{props.label}</button>
        </div>
        break;

        default:
        formElements = <div>
            <lable>something went wrong</lable>
        </div> 
    }
    return(  
        <div>
            {formElements}
        </div>
    )
}
export default Input;