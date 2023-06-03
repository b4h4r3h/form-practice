import { useState } from "react"

const InputForm = (props) =>{
    const [data,setData] = useState("")
    function fetchValue(e) {
        setData(e.target.value)
    }
    return(
        <div>
            <lable>username</lable>
            <input placeholder={props.placeholder} onChange={fetchValue} name={props.name}></input>
        </div>
    )
}
export default InputForm