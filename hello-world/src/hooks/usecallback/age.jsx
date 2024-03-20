import React from "react";
function Age({ ageHandler, children }) {
    console.log("Age rendered");
    return <button onClick={ageHandler}>{children}</button>;
  }

export default React.memo(Age)