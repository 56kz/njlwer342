import React, { Component } from 'react';

class App extends Component {
 constructor(props) {
   super(props);
   this.state = {
     tasks: ["Sacar la ropa", "Hacer la cama", "Leer un rato"],
     task : ''
   }
   this.handleChange = this.handleChange.bind(this);
   this.enterHandle = this.enterHandle.bind(this);
 }
 handleChange(e) {
   console.log("change");
   this.setState({
     task: e.target.value
   })
 }
 enterHandle(e) {
   e.preventDefault();
   console.log("enter");
   this.setState({
    tasks: this.state.tasks.concat(this.state.task)
   });
   this.state.task = "";
 }
 render() {
   return (
     <div className="wrapper">
       <div className="list">
         <h3>Por hacer:</h3>
         <ul className="todo">
          {this.state.tasks.map((task, index) =>
            <li key={index}>{task}</li>
          )}
         </ul>
          <form onSubmit={this.enterHandle}>
            <input type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter" value={this.state.task} onChange={this.handleChange} />
          </form>
       </div>
     </div>
   )
 }
}

export default App;
