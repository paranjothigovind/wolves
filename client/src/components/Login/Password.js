import React, { useRef } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import './Password.css'


function Test(props) {
  const { register, errors, handleSubmit, watch } = useForm({});
  const password = useRef({});
  password.current = watch("password", "");

  
  const onSubmit = async data => {
    // alert(JSON.stringify(data));
    props.submitBtn()
    props.fetchPassword(data.password)
  };

  return (
    <form onSubmit={e => e.preventDefault()}>
      <label class="pure-material-textfield-outlined" style={{ marginTop: '10px' }}>
        <input 
          placeholder=" "
          name="password"
          type="password"
          style={{ width: "380px" }}
          ref={register({
            required: "You must specify a password",
            minLength: {
              value: 8,
              message: "Password must have at least 8 characters"
            }
          })}
        />
        <span>Password</span>
      </label>
      {errors.password && <p>{errors.password.message}</p>}


      <label class="pure-material-textfield-outlined" style={{ marginTop: '0px' }}>
        <input 
          placeholder=" "
          name="password_repeat"
          type="password"
          style={{ width: "380px" }}
          ref={register({
            validate: value =>
              value === password.current || "The passwords do not match"
          })}
        />
        <span>Confirm Password</span>
      </label>
      {errors.password_repeat && <p>{errors.password_repeat.message}</p>}

      <button type="submit" className="buttonSmall" onClick={handleSubmit(onSubmit)}> Next </button>
    </form>
  );
}
export default Test