import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import SingleUser from './SingleUser'

export default function Content() {
  const [users, setUsers] = useState([]);
  const { sessionActive } = useSelector(state => state.loginReducer)
  let displayData = []

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/users'); // Calling the server-side API
        const data = await response.json();
        setUsers(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    if (sessionActive) {
      fetchData();
    }
  }, [sessionActive]);


  displayData = users.map(user => <SingleUser key={user.id} firstName={user.first_name} lastName={user.last_name} id={user.id} />)
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {displayData}
      </ul>
    </div>
  );
}