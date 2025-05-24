import React, { useState, useEffect } from 'react';

const Randomusers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://randomuser.me/api/?results=5');
      const data = await res.json();
      setUsers(data.results);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <main style={{ padding: '16px', display: 'flex', flexWrap: 'wrap' , gap: '24px'  }}>
      <button onClick={fetchUsers} style={{fontSize: '16px' , fontWeight: '500', color: 'white', backgroundColor: 'darkblue' , padding: '16px', borderRadius: '16px'}}> Get New Users</button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
          {users.map((user, index) => (
            <div key={index} style={{ border: '0.5px solid darkblue', padding: '16px', borderRadius: '10px',  backgroundColor: 'white', minWidth: '250px', gap: '8px', boxShadow: '-moz-initial'}}>
              <img style={{borderRadius: '8px'}}  src={user.picture.medium} alt="User" />
              <h2 style={{fontSize: '18px', fontWeight: '600',  color: 'darkblue'}}>{user.name.first} {user.name.last}</h2>
              <p style={{fontSize: '14px', fontWeight: '400',  color: '#333333'}}> Email: {user.email}</p>
              <p style={{fontSize: '14px', fontWeight: '600',  color: '#111111'}}>Location: {user.location.city}, {user.location.country}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default Randomusers;
