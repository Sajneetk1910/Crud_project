import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";

function GetUser({ setEditdata, setFormData }) {
  const [data, setData] = useState([]);
  const API_URL = "http://localhost:3000/users";

  const getUserData = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Response is not ok");
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-6 mt-8 px-4">
      {data.map((user, id) => (
        <Card
          key={id}
          sx={{
            width: 300,
            p: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            alt={user.name}
            src={user.image}
            sx={{ width: 100, height: 100, mb: 2 }}
          />
          <CardContent sx={{ textAlign: "center" }}>
            <Typography gutterBottom variant="h6" component="div">
              {user.name}
            </Typography>
            <Typography variant="outlined" color="text.secondary">
              {user.description || "No description."}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default GetUser;
