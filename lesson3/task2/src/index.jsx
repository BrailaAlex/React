import "./search.scss";
import "./index.scss";
import React, {Component} from "react";
import ReactDOM from "react-dom";

const rootElem = document.querySelector("#root");

// const Greeting = (props) => {
// 	return (
//   <div className='Search'>
//     <h1 className='search__title'>
//       Hello, 
//       {' '}
//       {props.name}
//       . What to search for you
//     </h1>
//     <div className='search__field'>
//       <input type='text' className='search__input' />
//       <button className='search__button'>Search</button>
//     </div>
//   </div>
// 	);
// };

// ReactDOM.render(<Greeting name='Bob' age={17} />, rootElem);

export default class Search extends Component {
  render() {
    console.log(this.props);
    return (
  <div className='Search'>
    <h1 className='search__title'>
      Hello,
      {this.props.name}
      . What to search for you
    </h1>
    <div className='search__field'>
      <input type='text' className='search__input' />
      <button className='search__button'>Search</button>
    </div>
  </div>
	);
}
}

ReactDOM.render(<Search name = "Bob" />, rootElem);

