import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];

export default function App() {
  return (
    <div className="app">
      <Log />
      <Form />
      <Packinglist />
      <Stats />
      <Test3 />
    </div>
  );
}

function Log() {
  return <h1>🌴Far Away 💼 </h1>;
}

function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(5);

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {/*
        this does the same job..
        <option value={1}>1</option>
        <option value={2}>3</option>
        <option value={3}>1</option> 
        as this one 👇
        */}

        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button> Add </button>
    </form>
  );
}

function Packinglist() {
  return (
    <div className="list">
      <ul>
        {initialItems.map(
          //the call back function...
          (item) => (
            <Item item={item} key={item.id} />
          )
        )}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>

      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em> You Have X items on your list and you already packed X (X%) </em>
    </footer>
  );
}

function Test3() {
  return {console.log(e)};
}
