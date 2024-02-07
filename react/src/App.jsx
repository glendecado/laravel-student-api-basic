import { useEffect, useState } from "react";
import axiosInstance from "./axiosInstance";

const App = () => {
    const [users, setUsers] = useState([]); // Initialize users state to an empty array
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
                    {/* Map over the users array and render each user's first name */}
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
