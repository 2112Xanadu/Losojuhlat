import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { List } from "./components/List";
import { useState } from "react";
import "./styles.css";

const persons = [
  { name: "Tiia Nyholm", age: 30, email: "tiia.nyholm@fraktio.fi" },
  { name: "Loso Losonen", age: 100, email: "loso.losonen@fraktio.fi" },
  { name: "Mimmi Mimmonen", age: 33, email: "mimmi.mimmonen@fraktio.fi" },
  { name: "Tussi Lussunen", age: 57, email: "tussi.lussunen@fraktio.fi" }
];

export default function App() {
  const [people, setPeople] = useState(persons);
  return (
    <div className="App">
      <Header title="Losojuhlat" />
      <List persons={people} />
      <Form submitPerson={setPeople} persons={people} />
    </div>
  );
}
