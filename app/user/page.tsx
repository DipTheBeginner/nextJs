

import axios from "axios";

async function fetchData() {
    const response = await axios.get("https://67b40e71392f4aa94fa91ef1.mockapi.io/api/v1/dUser/user")

    await new Promise(r => setTimeout(r, 5000));

    console.log("reponse is " + JSON.stringify(response.data))
    return response.data;

}

export default async function User() {
    const data = await fetchData();
    return (
        <div>

            {data.map(user => (
                <div key={user.id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
                    <h3>{user.name}</h3>
                    <p>Email: {user.email}</p>
                </div>
            ))}


        </div>
    )
}