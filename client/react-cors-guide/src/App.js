
import { useEffect, useState } from 'react';
import './App.css';
function App() {
  // const makeAPICall = async () => {
  //   try {
  //     const response = await fetch('http://localhost:8080/items', { mode: 'cors',headers: {
  //       'Access-Control-Allow-Origin':'*'
  //     } });
  //     const data = await response.json();
  //     console.log({ data })
  //   }
  //   catch (e) {
  //     console.log(e)
  //   }
  // }
  // useEffect(() => {
  //   makeAPICall();
  // }, [])

  async function getItems() {
    fetch(`http://localhost:8080/items`, {
      mode: 'cors',
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin':'*'
      },
    }).then (response=>response.json())
    .then((data) => {
      document.getElementById("data").innerHTML = JSON.stringify(
        data,
        null,
        2
      );
    })
    .catch((e) => {
      document.getElementById("data").innerHTML = e.message;
    });
  } 
   useEffect(() => {
      getItems();
    }, [])

  return (
    <div className="App">
      <div id="data">React Cors Guideee</div>
    </div>
  );
}
export default App;





