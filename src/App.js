import React, {useState, useEffect} from 'react';

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
      {data.map((member, index) => (
        <h1 key={index}>{member}</h1>
      ))}
    </div>
  );
}


export default App;
