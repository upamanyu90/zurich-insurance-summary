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