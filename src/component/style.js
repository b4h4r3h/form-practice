import styled from "styled-components";
const Stylesheet = styled.div`
span{
    display:none;
}
input{
    padding: 10px 4px;
    width:280px;
    border-radius:8px;
    border: 1px solid grey;
}
input:invalid[focused="true"]{
    border:1px solid red;
}
input:invalid[focused="true"] ~ span{
    display:block;
    color:red;
}
.input-form{
    display:flex;
    flex-direction:column;
    margin-top:12px;
    width:100%;
}

`
export default Stylesheet;