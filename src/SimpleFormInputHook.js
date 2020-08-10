import React from "react";
import useInputState from "./CustomHooks/UseInputState";

export default function SimpleFormHooks() {
  const [email, updateEmail, resetEmail] = useInputState("");
  return (
    <div>
      <h1>The value is {email}</h1>
      <input type="text" value={email} onChange={updateEmail} />
      <button onClick={resetEmail}>Submit</button>
    </div>
  );
}
