//route handler written
export function GET() {
  //database logic
  return Response.json({
    email: "nalindalal2004@gmail.com",
    name: "nalin",
  });
}

//put method
export function PUT() {
  //database logic
  return Response.json({
    email: "nalindalal2004@gmail.com",
    name: "nalin",
  });
}

/* in express
app.get("/api/user", (req, res) => {
  return res.json({
    email: "nalindalal2004@gmail.com",
    name: "nalin",
  });
});
*/
