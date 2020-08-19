import React, { useEffect, useState} from 'react';


function App() {

const [repos, setRepos] = useState([{}])

useEffect(() => {
 
  async function fetchdata(){
  const response = await fetch("https://api.github.com/users/muddasserrasool/repos") 

  const data = await response.json();
  
  setRepos(data)
  console.log(data)

  //   fetch('https://jsonplaceholder.typicode.com/todos/1')
  //     .then(response => response.json())
  //     .then(json => {
  //       setData(json)
  //     })
  }

fetchdata()
 }, [])



  return (
    <div>
      <ul>
        {
          repos.map((resposObj, ind)=>{
            return(<li key={ind}>
              <span>
                {resposObj.name}           
              </span>

            </li>
           ) })
        }
      </ul>
    </div>
  );
}

export default App;
