import { useEffect } from "react";
import { Link } from "react-router-dom";


const UserPage = () => {
    const [ user,setUser] = useState([])
   
const fetchAllUser = async() =>{
try {
    const response = await fetch ()
    if (!response.ok) {
        const userData = await response.json()
        setUser(usersData)
    }


} catch (error) {
    console.log(error)
}

}

useEffect(() => {
    fetchAllUsers();
}, []);

return (
    <>
        <h1>All Users</h1>
        {users.map(user => (
            <Link key={user.Id} to={`/userdetails/${user.id}`} key={user.id}>
                <p>Name :{user.cocktailname}</p>
            </Link>
        ))}
    </>
);
};

export default UserPage;



