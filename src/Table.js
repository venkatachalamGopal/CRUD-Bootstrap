import { Table,Button } from "react-bootstrap";
import React,{useState,useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

// const navigate=useNavigate();
 function TableExample(){
    const navigate=useNavigate();
    const[user,setUser]=useState([]);

    
    

    //GetCall Function
    async function getdata(){
        const response=await fetch(`https://6402dbabf61d96ac48721530.mockapi.io/user`)
        setUser(await response.json());
       
    }
    useEffect(()=>{
    getdata()
    },[])


    //Delete Call Function-After delete have to call again get-callfunction
    async function deleteuser(id){
        await fetch(`https://6402dbabf61d96ac48721530.mockapi.io/user/${id}`,{
            method:"DELETE"
        })
        await getdata()

    }

  
    return(
        <>
        <h1 className="heading text-primary" ><u>UsersList - Table</u></h1>

        <Button className="addbtn" variant="success" onClick={()=>{
        navigate('/add-user')}}>Add New users</Button>

        <Table bordered striped hover style={{border:'2px'}} className='table' >
            <thead className="table-success">
                <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>State</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
        
        {user.map((elem)=><tbody key={elem.id}>
            <tr>
                <td>{elem.id}</td>
                <td>{elem.name}</td>
                <td>{elem.age}</td>
                <td>{elem.state}</td>
                <td><Button variant="danger" onClick={()=>deleteuser(elem.id)}>Delete</Button></td>
                <td><Button variant="warning" onClick={()=>navigate(`/edit-user/${elem.id}`)}>Edit</Button></td>

            </tr>
            </tbody>)}
            </Table>
        </>
    );
}

       
export{TableExample}
