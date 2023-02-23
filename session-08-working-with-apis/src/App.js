import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    try {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((resp) => resp.json())
        .then((usersList) => {
          console.log(usersList);
          setData(usersList);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {data.length > 0
          ? data.map((userobj) => {
              return (
                <div key={userobj.id}>
                  Name : {userobj.name} <br />
                  Phone : {userobj.phone}
                  <hr />
                </div>
              );
            })
          : "Loading Data ..."}
        {/* <button onClick={fetchData}>Fetch data</button> */}
      </header>
    </div>
  );
};

export default App;
