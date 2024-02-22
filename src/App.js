import logo from './logo.svg';
import './App.css';
var res= json => setData(json)
function getdata(){
fetch('http://localhost:1000/getdata')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));}
function getprise(){
 fetch('http://localhost:1000/getprise')
              .then(response => response.json())
              .then(json => setData(json))
              .catch(error => console.error(error));}

function App() {{getdata()}
{getprise()}
  return (
    <div className="App">
 <div >{res.name.age.gender}</div>

    </div>
  );
}

export default App;
