import { Fragment, useState } from "react";
import { Login } from "./login";
import { Practice } from "./practice";
import { Goal } from "./conditional-rendering";
import InputForm from "./component";
import { Styles } from "./globalStyle";
export const App = () => {
  const [values, setValues] = useState({
    username: " ",
    email: " ",
    birthday: " ",
    password: " ",
    password2: " ",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "username",
      errorm:"Username should be 3-16 characters",
      lable: "user",
      pattern:"^{3,10}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "email",
      errorm: "your email is not valid",
      lable: "email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "birthday",
      lable: "birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "password",
      errorm: "your password should be 6 characters, include numbers, special characters, small and capital character",
      lable: "password",
      required: true,
      pattern: "^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$"
    },
    {
      id: 5,
      name: "password2",
      type: "password",
      placeholder: "password2",
      errorm: "passwords don't match",
      lable: "password2",
      pattern:values.password,
      required: true,
    },
  ];
  const onChange = (e) => {
    setValues({ ...values,[e.target.name]: e.target.value});
  };
  // [e.target.name]: 
  console.log(values);

  const submit = (e) => {
    e.preventDefault();
    alert("your information has been sent successfully")
    // const data = new FormData(e.target)
    // console.log(Object.fromEntries(data.entries()))
  };
  return (
    <Styles>
    <div className="main-content">
      <form onSubmit={submit}>
      <h1>Register</h1>
        {inputs.map(function (input) {
          return(
            <InputForm
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          ></InputForm>
          );
        })}
        {/* <InputForm name="username" placeholder= "User name" />
        <InputForm name="email" placeholder= "last name"/>
        <InputForm name="pass" placeholder= "pass"/>
        <InputForm placeholder= "hello"/> */}
        <button>submit me</button>
      </form>
      {/* <Login></Login>
      <Practice></Practice> */}
      {/* <Goal gif={false} /> */}
    </div>
    </Styles>
  );
};
export default App;
