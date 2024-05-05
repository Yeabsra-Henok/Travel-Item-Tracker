const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Log />
      <Form />
      <Packinglist />
      <Stats />
    </div>
  );
}

function Log() {
  return <h1>🌴Far Away 💼 </h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your trip</h3>
    </div>
  );
}
function Item({ item }) {
  return (
    <li>
      <span>
        {item.quantity} {item.description}
      </span>

      <button>❌</button>
    </li>
  );
}

function Packinglist() {
  return (
    <div className="list">
      <ul>
        {initialItems.map(
          //the call back function...
          (item) => (
            <Item item={item} />
          )
        )}
      </ul>
    </div>
  );
}
//test

function Stats() {
  return (
    <footer className="stats">
      <em> You Have X items on your list and you already packed X (X%) </em>
    </footer>
  );
}
