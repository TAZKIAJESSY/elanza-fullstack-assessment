const express = require("express");
const cors = require("cors");
const app = express();

const Request = require("./models").carerequest;

const PORT = process.env.PORT || 8080;

//middlewares
app.use(cors());
app.use(express.json());

//Get all carerequests
//http GET :8080/carerequests
app.get("/carerequests", async (req, res, next) => {
  try {
    const allRequest = await Request.findAll();
    res.status(200).send(allRequest);
  } catch (error) {
    next(error.message);
  }
});

//Create a new request
// http POST :8080/carerequests careType="household" clientName:"jessy"
app.post("/carerequests", async (req, res, next) => {
  const { careType, startDate, endDate, clientName, extraInformation } =
    req.body;
  try {
    if (!careType || !clientName) {
      res.status(400).send("Please provide required information");
    } else {
      const carerequests = await Request.create({
        careType,
        startDate,
        endDate,
        clientName,
        extraInformation,
      });
      res.json(carerequests);
    }
  } catch (error) {
    next(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
