function processdata(usersData) {
    return usersData.filter(user => {
        if(user?.first_name[0].toLowerCase() === 'g' || user?.last_name[0].toLowerCase() === 'w') {
            return user
        }
    })
}

export async function GET() {
    try {
        const finalData = []
        const response = await fetch('https://reqres.in/api/users?page=1');
        const resp = await response.json();
        finalData.push(...processdata(resp.data))
        for(let i = 2; i <= resp.total_pages; i++) {
            const response = await fetch(`https://reqres.in/api/users?page=${i}`);
            const resp = await response.json();
            finalData.push(...processdata(resp.data)) 
        }
        return Response.json({...resp, data: finalData})
      } catch (error) {
        console.error('Error fetching data:', error);
        return Response.json({ error: 'Internal server error' });
      }
    
  }

  export async function POST(request) {
    try {
        const reqBody = await request.json()
        const response = await fetch(`https://reqres.in/api/users/${reqBody.id}`)
        const resp = await response.json();
        return Response.json(resp.data.email)
      } catch (error) {
        console.error('Error fetching data:', error);
        return Response.json({ error: 'Internal server error' });
      }
    
  }