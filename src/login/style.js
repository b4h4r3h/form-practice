import styled from "styled-components";
export const Styles = styled.div`
.container{
    max-width: 800px;
    margin: 0 auto;
}
.main-content{
    display:flex;
    gap: 24px;
    margin-top: 32px;
    justify-content: center;
}
.form-class{
    display:flex;
    flex-direction: column;
    gap:16px;
}
// input{
//     outline-color: #854fff;
//     border: 1px solid rgb(209, 209, 209);
//     height: 32px;
//     padding: 0px 80px 0px 8px;
//     border-radius: 8px;
// }
button{
    padding: 8px 0;
    background: #854fff;
    border:none;
    border-radius: 8px;
    color: #fff;
    cursor:pointer;
}
`