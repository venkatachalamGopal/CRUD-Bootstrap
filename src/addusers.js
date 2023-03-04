import { Form,Button } from "react-bootstrap"
import { useState } from "react"
import { useNavigate } from "react-router-dom";


export default function AddUsers(){
    const navigate=useNavigate();
    const[name,setName]=useState()
    const[age,setAge]=useState();
    const[state,setState]=useState();

    function adduser(){
        const newUser={
            name:name,age:age,state:state
        }
        console.log(newUser);
        fetch(`https://6402dbabf61d96ac48721530.mockapi.io/user`,{
            method:"POST",
            body:JSON.stringify(newUser),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(()=>navigate('/'))
    }
    return (
        <>
        <Form>
            <Form.Group className="mb-2">
                <Form.Label>Name</Form.Label>
                <Form.Control onChange={(event)=>setName(event.target.value.toUpperCase())} type="text" placeholder="Enter ur name"/>
            </Form.Group>
            <Form.Group className="mb-2">
                <Form.Label>Age</Form.Label>
                <Form.Control onChange={(event)=>setAge(event.target.value)} type='text' placeholder="Enter Age"/>
            </Form.Group>
            <Form.Group className="mb-2">
                <Form.Label>State</Form.Label>
                <Form.Control onChange={(event)=>setState(event.target.value)} type='text' placeholder="Enter state"/>
            </Form.Group>
            <Button onClick={()=>adduser()}>ADD</Button>
        </Form>
        
        </>
    )
}