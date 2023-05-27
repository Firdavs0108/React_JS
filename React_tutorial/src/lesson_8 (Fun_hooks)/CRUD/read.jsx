

import {useState} from 'react'
import {users} from '../data.js'



export const Read = () => {

    const [data, setUsers] = useState(users);
    const [filter, setFilter] = useState('');
  


    //   Searching function

  const filteredInfo = (e) => {
    let filtered =  users.filter((value) => value.name.toLowerCase().includes(e.target.value.toLowerCase()) || value.status.toLowerCase().includes(e.target.value.toLowerCase()))

  setData(filtered);
};


    // Input function

    const multiFunction = (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
  }
 
  return (

    <div>
        <input onChange={filteredInfo} type="text" placeholder='search...' /> <br /> <br />
        <h1>Name: {data.name}</h1>
        <h1>Status: {data.status}</h1>
        <input onChange={multiFunction} name='name' type="text" placeholder='name' />
        <input onChange={multiFunction} name='status'type="text" placeholder='status' />
        <hr /> <br />

        <div className="App">
	<table border={1} style={{borderCollapse:'collapse'}} width={'50%'} >
    <thead>

		<tr>
		<th>Id</th>
		<th>Name</th>
		<th>Status</th>
		<th>Delete</th>
		<th>Edit</th>
   
		</tr>
    
    </thead>
		{
      users.map(({id,name,status}) => {
        return(
          <tbody key={id}>
            <tr>
              <td>{id}</td>
              <td>{name}</td>
              <td>{status}</td>
              <td><button>delete</button></td>
              <td><button>edit</button></td>
            </tr>
          </tbody>
        )
      })
    }
	</table>
	</div>
    </div>
  )
}

export default Read





