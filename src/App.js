// import Message from "./Component/Message";
import Messages from "./Component/Messages";
import Counter from "./Component/Counter";
import './App.css'

function App() {
  return (
    <div className="App">
      {/* <Message/> */}
      <Counter/>
      <Messages greet="Good Morning"/>
    </div>
  );
}

export default App;
