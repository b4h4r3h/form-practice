import { Fragment, useState } from "react";
import Stylesheet from "./style";
const InputForm = (props) =>{
    // const [data,setData] = useState("")
    // function fetchValue(e) {
    //     setData(e.target.value)
    // }
    const {lable,onChange,id,errorm,...inputProps} = props;
    const [focused,setFocused] = useState(false);
    const handleFocus = (e) =>{
        setFocused(true);
    }
    return(
        <Stylesheet>
        <div className="input-form">
            <lable>{lable}</lable>
            {/* <input placeholder={props.placeholder} onChange={fetchValue} name={props.name}></input>
             */}
             <input {...inputProps} onChange={onChange}
             onBlur={handleFocus}
             focused={focused.toString()}
             onFocus={() =>
                inputProps.name==="password2" && setFocused(true)}
             >
             </input>
             <span>{errorm}</span>
        </div>
        </Stylesheet>
    )
}
export default InputForm