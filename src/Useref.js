import React, { useRef, useState } from "react";

const Useref = () => {
  const [name, setname] = useState("");

  const newuseref = useRef();
  const Addname = () => {
    newuseref.current.style.backgroundColor = "Red";
    newuseref.current.style.fontSize = "25px";
    newuseref.current.focus();
  };
  return (
    <>
      <div style={{ width: "50%", margin: "10px auto" }}>
        <input
          type="text"
          placeholder="Enter Name"
          ref={newuseref}
          style={{ padding: "10px 20px", width: "300px" }}
          onChange={(e) => setname(e.target.value)}
        />

        <button onClick={Addname} style={{ padding: "10px", margin: "10px" }}>
          Addname
        </button>
        <h2>{name}</h2>
      </div>
    </>
  );
};

export default Useref;
