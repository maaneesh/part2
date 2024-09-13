import React, { useState } from "react";

function Register() {
  const [book, setBook] = useState([
    { name: "Manish", email: "mchaudha@gmail.com" },
  ]);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const handleNameChange = (e) => {
    console.log(e.target.value);

    setNewName(e.target.value);
  };
  const handlemailChange = (e) => {
    console.log(e.target.value);
    setNewEmail(e.target.value);
  };

  const addPerson = (e) => {
    e.preventDefault();
    const personObject = { name: newName, email: newEmail };

    setBook([...book, personObject]);
    setNewName("");
    setNewEmail("");

    console.log(book);
  };
  return (
    <>
      <h3>Signin sheet</h3>
      <div>
        {book.map((person) => (
          <p key={person.name}>
            {person.name} {person.email}
          </p>
        ))}
      </div>
      <div>
        register:
        <form onSubmit={addPerson}>
          <input value={newName} onChange={handleNameChange}></input>
          <input value={newEmail} onChange={handlemailChange}></input>
          <button type="submit"> add</button>
        </form>
      </div>
    </>
  );
}

export default Register;
