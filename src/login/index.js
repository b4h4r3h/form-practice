import React, { Fragment, useState } from "react";
import { InputAdornment, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Visibility } from "@mui/icons-material";
import { VisibilityOff } from "@mui/icons-material";
import { Styles } from "./style";
export function Login() {
  const [data, setData] = useState("");
  const [pass, setPass] = useState("");
  const [update, setUpdate] = useState("");
  const [loading, isLoading] = useState(false);
  const initalData = (e) => {
    setData(e.target.value);
    console.log(data);
  };
  const password = (e) => {
    setPass(e.target.value);
    console.log(pass);
  };
  const handleSubmit = (event) =>{
    event.preventDefault();
    alert(`your password is:${pass} and your username is: ${data}`)
  }
  function comparison() {
    return data === "ali" && pass === "1234";
  }
  function result() {
    alert("false")
  }
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <Styles>
      <div className="container">
        <div className="main-content">
          <form
            className="form-class"
            onSubmit={ comparison() ? handleSubmit : result }>
            <TextField
              onChange={initalData}
              id="outlined-basic"   
              label="Username"
              variant="outlined"
              value={data}
            />
            <TextField
              onChange={password}
              id="outlined-basic"
              label="Password"
              value={pass}
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </InputAdornment>
              }
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </Styles>
  );
}
