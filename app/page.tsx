async function getUser() {
  // No need for `http://localhost:3000` since it's the same server
  const response = await fetch("/api/user", { cache: "no-store" });
  
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  
  return response.json(); // Automatically parses JSON
}

export default async function Home() {
  const userDetails = await getUser();

  return (
    <div>
      {userDetails.map(user => (
        <div key={user.id}>
          <p>{user.username}</p>
          <p>{user.avatar}</p>
        </div>
      ))}
      <p>Hello</p>
    </div>
  );
}
