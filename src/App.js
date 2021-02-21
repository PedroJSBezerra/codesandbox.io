import "./styles.css";

export default function App() {
  function Item(props) {
    return (
      <div className="item">
        <b>Name: </b>
        {props.name} <br />
        <b>Price: </b>
        {props.price}
      </div>
    );
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Item name="cheese" price="29.99" />
      <Item name="coke" price="7.99" />
      <Item name="coffee" price="2.99" />
      <Item name="bread" price="4.55" />
    </div>
  );
}
