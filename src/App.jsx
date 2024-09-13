import { useState } from "react";
import Register from "./components/test";
import Filter from "./components/search";
import PersonForm from "./components/personForm";
import Persons from "./components/persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchName, setSearchName] = useState("");
  const [filteredPeople, setFilteredPeople] = useState(persons);

  const addContact = (e) => {
    e.preventDefault();

    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };

    if (persons.some((person) => person.name === personObject.name)) {
      alert(`${newName} already exists in phonebooks`);
    } else {
      const updatedPersons = [...persons, personObject];
      setPersons(updatedPersons);
      setNewName("");
      setNewNumber("");

      // Update filteredPeople based on the current searchName
      const filteredItems = updatedPersons.filter((person) =>
        person.name.toLowerCase().includes(searchName.toLowerCase())
      );
      setFilteredPeople(filteredItems);
    }
  };

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const handleSearch = (e) => {
    const search = e.target.value;
    setSearchName(search);
    const filteredItems = persons.filter((person) =>
      person.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredPeople(filteredItems);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={searchName} handleSearch={handleSearch} />
      <div>{}</div>
      <h3>Add a new</h3>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addContact={addContact}
      />
      <h3>Persons</h3>
      <Persons persons={persons} filteredPeople={filteredPeople} />
    </div>
  );
};

export default App;
