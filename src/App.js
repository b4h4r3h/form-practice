import { Fragment, useState } from "react";
import { Login } from "./login";
import { Practice } from "./practice";
import { Goal } from "./conditional-rendering";
import InputForm from "./component";
export const App = () => {
  const submit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target)
    console.log(Object.fromEntries(data.entries()))
  }
  return (
    <Fragment>
      <form onSubmit={submit}>
        <InputForm name="username" placeholder= "User name" />
        <InputForm name="email" placeholder= "last name"/>
        <InputForm name="pass" placeholder= "pass"/>
        <InputForm placeholder= "hello"/>
        <button>submit me</button>
      </form>
      {/* <Login></Login>
      <Practice></Practice> */}
      {/* <Goal gif={false} /> */}
    </Fragment>
  );
};
export default App;
