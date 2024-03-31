import React, { useEffect, useState } from 'react';
import './users.css';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <div className="cartmap">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Avatar</th>
            </tr>
          </thead>

          <tbody>
           {users.map((obj)=><>
           <tr>

            <td>{obj.id}</td>
            <td>{obj.name}</td>
            <td>{obj.email}</td>
            <td><img src={obj.avatar} alt="" /></td>
           </tr>
           </>)}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
