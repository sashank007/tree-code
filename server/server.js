const express = require("express");
const morgan = require("morgan");
const axios = require("axios");
const path = require("path");
const mongoose = require("mongoose");
const TreeSchema = require("./schemas/TreeSchema");
const CodeRepoSchema = require("./schemas/CodeRepoSchema");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;

const dbPassword = "sashank007";
const dbName = "tree-code";

//mongo db uri
const mongoDbUri = `mongodb+srv://sas:${dbPassword}@cluster0.cuwwy.mongodb.net/${dbName}?retryWrites=true&w=majority`;

//HTTP request logger
app.use(morgan("tiny"));
app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

mongoose.connect(mongoDbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Get the default connection
const db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const MainTreeCollection = mongoose.model("MainTree", TreeSchema);

const CodeRepoCollection = mongoose.model("CodeRepo", CodeRepoSchema);

// newMainTree
app.post("/findTree", (req, res) => {
  console.log("fetching from main trees...", req);

  let query = req.body;
  //TODO Fetch query from request object.
  console.log("query : ", query);

  if (!query) return;

  MainTreeCollection.find(query)
    .then((data) => {
      console.log("retrieved data : ", data);
      return res.json(data);
    })
    .catch((error) => res.send("Error fetching data :  " + error));
});

app.post("/findCode", (req, res) => {
  console.log("fetching from code repo ...", req);

  let query = req.body;
  //TODO Fetch query from request object.
  console.log("query : ", query);

  if (!query) return;

  CodeRepoCollection.find(query)
    .then((data) => {
      console.log("retrieved data : ", data);
      return res.json(data);
    })
    .catch((error) => res.send("Error fetching data :  " + error));
});

app.post("/updateSubTree", async (req, res) => {
  console.log("update sub tree...", req);

  let result = "Error saving sub tree";
  const { parentNode, childNodeTitle } = req.body;

  if (parentNode && childNodeTitle) {
    console.log("parent and child : ", parentNode, childNodeTitle);
    let query = { title: parentNode };
    const updateDocument = {
      $push: { children: childNodeTitle },
    };

    result = await MainTreeCollection.updateOne(query, updateDocument);
    saveTreeNode(childNodeTitle);
  }

  res.send(result);
});

app.post("/saveProblem", async (req, res) => {
  console.log("saving problem..", req);

  const { title, explanation, code } = req.body;

  console.log("reqeust body vor save problem ", req.body);

  const result = await saveProblem(title, explanation, code);

  res.send(result);
});

app.post("/updateProblems", async (req, res) => {
  console.log("saving problem..", req);

  const { parentNode, problemTitle } = req.body;

  console.log("reqeust body for update problem ", req.body);

  const result = await updateProblems(parentNode, problemTitle);

  res.send(result);
});

function saveTreeNode(nodeTitle) {
  const childNode = {
    title: nodeTitle,
    children: [],
    problems: [],
  };

  const treeNode = new MainTreeCollection(childNode);

  treeNode.save((err, res) => {
    if (err) return console.error(err);
    console.log("Succesfully saved ", childNode);
  });
}

async function saveProblem(title, explanation, code) {
  if (title !== "" && explanation !== "" && code !== "") {
    const childNode = {
      title: title,
      explanation: explanation,
      code: code,
    };

    const newProblem = new CodeRepoCollection(childNode);

    try {
      return await newProblem.save();
    } catch (e) {
      return e;
    }
  }
}

async function updateProblems(parentNode, problemTitle) {
  if (parentNode && problemTitle) {
    console.log("parent and problem : ", parentNode, problemTitle);
    let query = { title: parentNode };

    const updateDocument = {
      $push: { problems: problemTitle },
    };

    try {
      return await MainTreeCollection.updateOne(query, updateDocument);
    } catch (e) {
      return e;
    }
  }
}

app.listen(PORT, console.log(`Server starting at ${PORT}`));
