import { Form,Button } from "react-bootstrap"
import {useParams,useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Edituser(){
    const navigate=useNavigate();
    const {id}=useParams()
    const [name,setName]=useState()
    const [age,setAge]=useState()
    const [state,setState]=useState()
    
    useEffect(()=>{
        fetch(`https://6402dbabf61d96ac48721530.mockapi.io/user/${id}`)
        .then((response)=>response.json())
        .then((data)=>{
        setName(data.name);setAge(data.age);setState(data.state);
        })
    },[])
    


    // EditData function

    function editdata(){
        const editobj={
            name,age,state
        }
        fetch(`https://6402dbabf61d96ac48721530.mockapi.io/user/${id}`,{
            method:"PUT",
            body:JSON.stringify(editobj),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(()=>navigate('/'))
    }

    return(
        <div className="d-grid ">
        <Form>
            <Form.Group className="mb-2">
                <Form.Label>Name</Form.Label>
                <Form.Control value={name} onChange={(event)=>setName(event.target.value)} type="text" placeholder="Enter ur name"/>
            </Form.Group>
            <Form.Group className="mb-2">
                <Form.Label>Age</Form.Label>
                <Form.Control value={age} onChange={(event)=>setAge(event.target.value)} type='text' placeholder="Enter Age"/>
            </Form.Group>
            <Form.Group className="mb-2">
                <Form.Label>State</Form.Label>
                <Form.Control value={state} onChange={(event)=>setState(event.target.value)} type='text' placeholder="Enter state"/>
            </Form.Group>
            <Button onClick={()=>editdata()}>SAVE</Button>
        </Form>
        </div>
    )
}
