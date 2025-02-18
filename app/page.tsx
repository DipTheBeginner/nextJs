import axios from "axios";
import Image from "next/image";
import { use } from "react";

async function getUser(){
  await new Promise((r)=>{setTimeout(r,2000)})
  const response=await axios.get("http://localhost:3000/api/user")
  return response.data;
}

export default async function Home() {
  const userDetails=await getUser();
  return (
    <div >
       {userDetails.map(user => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.avatar}</p>
        </div>
      ))}
      Hello
    </div>
  );
}
