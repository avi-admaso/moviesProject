import React, { useState } from "react";
function Input(props) {
  let { nameTitle, nameInput, disable } = props;

  return (
    <section>
      <label for={nameTitle}>{nameTitle}</label>

      <input name={nameInput} type={disable} />
    </section>
  );
}
export default Input;
