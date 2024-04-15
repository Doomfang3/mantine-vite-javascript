import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

 
const API_URL= 'http://localhost:4000'

const UserDetails = () =>{
    const {userID} = useParams()
    const [user,setUser]= useState({})
    const getUser = async() => {
        try {
         const response = await fetch('{API_URL}/users/${userId}')
         if(response.ok) {
            const result = await response.json()
            setUser(result)

         }
        } catch (error) {
            console.log (error)
        }
    }


useEffect(()=>{
    getUser()


},[])



return <>
<div> {user.firstname}
</div>
</>


};
export default UserDetails