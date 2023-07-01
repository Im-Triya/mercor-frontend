import React, {useState, useEffect} from 'react';
import Hero from './components/Hero';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/members")
      .then(res => res.json())
      .then(data => {
        setData(data.members);
        console.log(data.members);
      });
  }, []);

  return (
    <div className="App">

    <Hero />

   
      {/* {data.map((member, index) => (
        <h1 key={index}>{member}</h1>
      ))} */}
    </div>
  );
}


export default App;
