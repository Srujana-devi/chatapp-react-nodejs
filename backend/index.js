const express = require("express");//runs http server
const cors = require("cors");//calls server from any  origin 
const axios = require("axios");


const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try{
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      {
        username:username, secret:username, first_name:username
      },
      {headers: {"private-key":"67a70fd1-500d-4797-b0d4-63e1ccd84767"}}
    )
    return  res.status(r.status).json(r.data)
  }
  catch(e){
    return  res.status(e.response.status).json(e.response.data);
  }
  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3000);
//0e468b41-91b2-4011-a962-6c81c11da4aa
//private-key: 67a70fd1-500d-4797-b0d4-63e1ccd84767
