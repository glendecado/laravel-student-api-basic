import { useEffect, useState } from "react";
import axiosInstance from "./axiosInstance";

const App = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getUsers = async () => {
            setLoading(true);
            try {
                const response = await axiosInstance.get("/students");
                setUsers(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setUsers([]);
                setLoading(false);
            }
        };

        getUsers();
    }, []);
    return (
        <>
            <h1>Users:</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            {user.fname} {user.lname}
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default App;
