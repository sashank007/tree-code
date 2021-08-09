// import authHost from "../config/app";

// const BACKEND_URI = authHost.HOST;
const BACKEND_URI = "http://localhost:8080";
export const getTreeData = async (treeNodeTitle = "Root") => {
  const response = await fetch(`${BACKEND_URI}/findTree`, {
    method: "post",
    headers: new Headers({
      "content-type": "application/json",
    }),
    body: JSON.stringify({ title: treeNodeTitle }),
  })
    .then((res) => {
      console.log("res from get main tree : ", res);
      return res.json();
    })
    .then((data) => data)
    .catch((error) =>
      console.error("Error fetching data from getMainTreeData : ", error)
    );

  return response;
};

export const saveTreeData = async (parentNode, childNodeTitle) => {
  const response = await fetch(`${BACKEND_URI}/updateSubTree`, {
    method: "post",
    headers: new Headers({
      "content-type": "application/json",
    }),
    body: JSON.stringify({ parentNode, childNodeTitle }),
  })
    .then((res) => {
      console.log("res from save tree : ", res);
      return res.json();
    })
    .then((data) => data)
    .catch((error) =>
      console.error("Error fetching data from save tree data : ", error)
    );
  console.log("done saving data");
  return response;
};

export const updateProblems = async (parentNode, problemTitle) => {
  const response = await fetch(`${BACKEND_URI}/updateProblems`, {
    method: "post",
    headers: new Headers({
      "content-type": "application/json",
    }),
    body: JSON.stringify({ parentNode, problemTitle }),
  })
    .then((res) => {
      console.log("res  : ", res);
      return res.json();
    })
    .then((data) => data)
    .catch((error) => console.error("Error fetching data : ", error));
  console.log("done saving data");
  return response;
};
