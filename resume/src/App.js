import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {ChromePicker} from "react-color"

function App() {

	const [text,setText] = useState("Enter text here!");
	const [color,setColor] = useState("blue");

	function textChange(e){
		setText(e.target.value);
		console.log(e);
	}

	function changeColor(c,e){
		console.log(c.hex);
		setColor(c.hex);
	}

  return (
    <div className="App">
			<h1 className="bigText"
				style={{color:color}}
				>{text}</h1>
			<h2>{color}</h2>
			<ChromePicker
				onChange={changeColor}
				color={color}/>
      <textarea
				value={text}
				onChange={textChange}
				/>
    </div>
  );
}

export default App;
