import { useEffect } from "react";


const UserPage = () => {
   
const fetchAllUser = async() =>{
try {
    const response = await fetch ()
    if (!response.ok) {
        throw new Error
    }


} catch (error) {
    console.log(error)
}

}

useEffect(() => {
    fetchAllUsers();
}, []);

return (
    <div>
        <h1>All Users</h1>
        {/* Você pode renderizar os usuários buscados aqui */}
    </div>
);
}

export default UserPage;






