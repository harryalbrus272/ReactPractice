import React from 'react'
import Header from "./components/Header";
function App() {
  const name = 'Shashwat';
  const x = true;
  return (
    <div className="container">
      <Header title="Props"/>
      <h1> Hello from React</h1>
      <h2>Rockstar Singh { name }</h2>
      <h3>{x ? 'Yes' : 'No'}</h3>
    </div>
  );
}
//class App extends React.Component{
  //   render(){
  //     return <h1>Hello from a class</h1>
  //   }
  // }

export default App;
