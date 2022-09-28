import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(
    () => {
      fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(data => setUsers(data))
    },
    []
  );

  return(
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}