

import React, { Component } from 'react';
import {users} from './read.js';

export default class Delete extends Component {

    constructor(props) { 
    super(props)

    this.state = {
        dataList: users
       
      }
    }

  render() {

    

      const filteredInfo = (e) => {
        // console.log(e.target.value);
       let filtered =  users.filter((value) => value.name.includes(e.target.value) || value.status.includes(e.target.value))
      
       this.setState({
        dataList: filtered
       })
      }

      const onDelete = (id) => {
        let filtered = this.state.dataList.filter((value) => value.id !== id)
        
        this.setState({
            dataList: filtered
        })
      }

    return (
        <div>  
          <input onChange={filteredInfo} type="text" placeholder='search...' /> <br /> <br />
          
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
         this.state.dataList.length ?
      this.state.dataList.map(({id,name,status}) => {
        return(
          <tbody key={id}>
            <tr>
              <td>{id}</td>
              <td>{name}</td>
              <td>{status}</td>
              <td><button onClick={()=>onDelete (id)}>delete</button></td>
              <td><button>edit</button></td>
            </tr>
          </tbody>
        )
      })
      : 

      <tbody>
        <tr>
            <th colSpan={5}>
         
                <h1> No user</h1>

            </th>
        </tr>
          
      </tbody>
      
    }
	</table>
	</div>
           

          
          
        </div>
    )
  }
} 
