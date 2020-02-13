import React, { useState } from 'react';
import './App.css';
import { pizzaList } from './data/pizzalist';
import PizzaCard from './components/PizzaCard';


const App = () => {
 const [pizzaArr, setPizzaArr] = useState([...pizzaList]);

  const handleFilterByPrice = (e) => {
    const resultArr = pizzaList.filter(pizza => {
      return pizza.price >= e.target.value
    })
    setPizzaArr(resultArr);
  }

  return(
  <>
    <header> 
      <h3>Total count: {pizzaArr.length}</h3>
      <label htmlFor="inp">Find by price</label>
      <input 
        placeholder="Enter price" 
        id="inp" 
        type="search" 
        onChange = {handleFilterByPrice} />
    </header>
    <main>
      {
        pizzaArr.map((pizzaObj, i) => {
          const generatedKey = `pizzaCard${pizzaObj.id}`;
          return <PizzaCard 
            pizza={pizzaObj} 
            index={i} 
            key = {generatedKey}/>
        }) 
      }
    </main>

    <footer>

    </footer>
  </>
  );
}

export default App;


// export class App2 extends React.Component{
//   constructor(props){
//     super();
//     this.state = {
//       name: 'Vasya',
//       isValid: true,
//     }
//   }

//   handleOnChange = (e) =>{
//     const value = e.target.value
//     if (value.match(/[\d]/g)) {
//       this.setState({ name: value, isValid: false})
//       return;
//     }
//     this.setState({name: value, isValid: true})
  
//   }

//   render() {
//     return (
//       <>
//       <div className="App">
//       {'As' + ' ' + this.state.name}
//       <br />
//       <input
//         className = {`'Input' ${!this.state.isValid ? 'invalid' : '' }`}
//         placeholder="Enter name" 
//         onChange={this.handleOnChange.bind(this)}
//         />
//         {!this.state.isValid && <h3>not valid</h3>}
//       {/* <button onClick={()=>this.setState({name: 'Kolya'})}> set Kolya </button> */}
//       </div>
//     </>
//     )
//   }
// }

// const App = (props) => {
//   const [name, setName] = useState('Nikita')
//   const [isValid, setIsValid] = useState(true)

//   const handleOnChange = (e) =>{
//     const value = e.target.value;
//     setName(value);
//     if (value.match(/[\d]/g)) {
//       setIsValid(false)
//       return;
//     }
//     setIsValid(true)
//   }

//   return (
//     <>
//       <div className="App">
//         {'As' + ' ' + name}

//         <br />

//         <input
//         placeholder="Enter name" 
//         onChange={handleOnChange}
//         />

//       {!isValid && <h3>not valid</h3>}
//       </div>
//     </>
//   );
// }



