import React from "react";
import "./Form.css";

const Form = props => {
  return (
    <div>
      {/* <form onSubmit={props.submit}> */}
      <form>
        <input
          type="text"
          value={props.value}
          placeholder="Wpisz miasto"
          onChange={props.change}
        />
        {/* <button type="submit">Wyszukaj miasto</button> */}
      </form>
    </div>
  );
};

export default Form;
