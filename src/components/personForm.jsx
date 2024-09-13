import React from "react";

function PersonForm({
  newName,
  newNumber,
  handleNameChange,
  handleNumberChange,
  addContact,
}) {
  console.log(newName, newNumber);

  return (
    <>
      <form onSubmit={addContact}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit" value="submit">
            add
          </button>
        </div>
      </form>
    </>
  );
}

export default PersonForm;
