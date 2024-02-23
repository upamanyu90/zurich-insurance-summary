import React, { useState } from 'react';
import '../../styles/Login.modules.css';

function SingleUser({firstName, lastName, id}) {
    const [email, setEmail] = useState('******@reqres.in')

    const getEmail= async (userId) => {
        try {
            console.log(userId)
            const response = await fetch('/email',{
                method: "POST",
                body: JSON.stringify({
                    "id": userId
                })
            }); // Calling the server-side API
            const data = await response.json();
            setEmail(data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
    }
    return (
        <div className="user-info">
  <span data-testid="first-name" className="first-name">First Name: {firstName}</span>
  <span data-testid="last-name" className="last-name">Last Name: {lastName}</span>
  <span data-testid="email" className="email">Emails: {email}</span>
  <button className="show-email-btn" onClick={() => getEmail(id)}>Show Email</button>
</div>
    )
  
}

export default SingleUser