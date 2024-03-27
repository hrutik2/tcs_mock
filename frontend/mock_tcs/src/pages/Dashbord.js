import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,Button, Center, Input, Select, useStepContext
  } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteData, GetData, postData } from '../redux/action'

export const Dashbord=()=>{
    const dispatch=useDispatch()
    
    const Data=useSelector(state=>state.data)
    const [Dat,setdata]=useState(Data)
    const [FirstName,setFirstName]=useState("")
    const [LastName,setLastName]=useState("")
    const [Email,setEmail]=useState("")
    const [salary,setSalary]=useState("")
    const [job,setjob]=useState("")
    const { isOpen, onOpen, onClose } = useDisclosure()
    const handleClick=(e)=>{
        e.preventDefault();
        let obj={
            FirstName,LastName,Email,salary,job
        }
        console.log(obj)
        dispatch(postData(obj))

         setdata([...Dat,obj])
        
    }
    const handleDelete=(id)=>{
        dispatch(DeleteData(id))
    }
    useEffect(()=>{
      dispatch(GetData())
      setdata(Data)
    },[Dat])
    return(
        <>
        <h1 >Employee Management</h1>
        
        <Button onClick={onOpen}>Open Modal</Button>
  
        <Modal isOpen={isOpen} onClose={onClose} >
          <ModalOverlay />
          
          <ModalContent w="30%" margin="auto"  marginTop="100px" padding="20px" backgroundColor="blue">
          <ModalCloseButton  w="100%" margin="auto"   backgroundColor="transparent"  border="none"/>
            <ModalHeader textAlign="center">Employee data</ModalHeader>
           
            <ModalBody w="100%" padding="10px" margin="auto" alignContent="center">
               <Input  w="90%" margin="auto" marginBottom="10px" marginTop="10px"  padding="5px" borderRadius="20px" placeholder='First Name' onChange={(e)=>setFirstName(e.target.value)}></Input>
               <br/>
               <Input placeholder='Last Name' w="90%" margin="auto" marginBottom="10px" marginTop="10px"  padding="5px" borderRadius="20px " onChange={(e)=>setLastName(e.target.value)}></Input>
               <br/>
               <Input placeholder='Email' w="90%" margin="auto" marginBottom="20px" marginTop="10px"  padding="5px" borderRadius="20px" onChange={(e)=>setEmail(e.target.value)} ></Input>
               <br/>
               <select style={{width:"93%", padding:"5px",marginBottom:"20px" ,marginBottom:"10px", borderRadius:"20px"}} onChange={(e)=>setjob(e.target.value)}>
               <option value=""  >select job Description</option>
                <option value="Tech"  >Tech</option>
                <option value="Marketing" >Marketing</option>
                <option value="Operations" >Operations</option>
               </select>
               <Input placeholder='salary' w="90%"  margin="auto" marginBottom="20px" marginTop="10px"  padding="5px" borderRadius="20px"  onChange={(e)=>setSalary(+(e.target.value))}></Input>
               <Button w="90%" padding="7px" borderRadius="20px" margin="auto" onClick={(e) => {
    handleClick(e);
    onClose();
  }}  >Submit </Button>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              
            </ModalFooter>
          </ModalContent>
        </Modal>


        <div  style={{marginTop:"30px" }}>
            <table style={{width:"100%" }}>
                <thead>
                    <tr>
                     <th>No</th>
                     <th>FirstName</th>
                     <th>LastName</th>
                     <th>Email</th>
                     <th>salary</th>
                     <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {Data.map((item,i)=>(
                        <tr>
                            <th>{i+1}</th>
                            <th>{item.FirstName}</th>
                            <th>{item.LastName}</th>
                            <th>{item.Email}</th>
                            <th>{item.salary}</th>
                            <th>
                                <button>Edit</button>
                                <button >Delete</button>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
      </>

    )
}