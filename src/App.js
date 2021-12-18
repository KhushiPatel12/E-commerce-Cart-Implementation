import ReactDOM from "react-dom";
import React from "react";
import "./index.css";

function Display(props) {
  const items = props.fooditems;
  const [quantity, setquantity] = React.useState(0);
  const [price, setprice] = React.useState(0);
  const [singlequantity, setsinglequantity] = React.useState(0);

  function increment(item) {
    setquantity(quantity + 1);
    setprice((current) => current + item.price);
    setsinglequantity((item.quantity += 1));
  }
  var decrement = (item) => {
    if (quantity === 0 || item.quantity === 0) {
      return quantity;
    } else {
      setquantity(quantity - 1);
      setprice((current) => current - item.price);
      setsinglequantity((item.quantity -= 1));
    }
  };

  return (
    <div>
      {items.map((item) => (
        <div>
          <h2>
            &nbsp; Item : {item.items}, Quantity : {item.quantity}, Price :{" "}
            {item.price}
          </h2>
          <button className="btn" onClick={() => increment(item)}>
            Add To Cart
          </button>
          &nbsp;&nbsp;&nbsp;
          <button className="btn1" onClick={() => decrement(item)}>
            Remove From Cart
          </button>
        </div>
      ))}
      <h1>Total Quantity: {quantity}</h1>
      <h1>Total Price: {price}</h1>
    </div>
  );
}
const iterable = [
  { items: "Sugar", price: 300, quantity: 0 },
  { items: "Milk", price: 150, quantity: 0 },
  { items: "Butter", price: 120, quantity: 0 },
  { items: "Curd", price: 100, quantity: 0 },
  { items: "Cheese", price: 180, quantity: 0 },
  { items: "Paneer", price: 200, quantity: 0 },
  { items: "Tea", price: 140, quantity: 0 },
  { items: "Coffee", price: 110, quantity: 0 }
];

function App() {
  const final = <Display fooditems={iterable}></Display>;
  return final;
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
