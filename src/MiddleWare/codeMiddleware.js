// import authHost from "../config/app";

// const BACKEND_URI = authHost.HOST;
const BACKEND_URI = "http://localhost:8080";
export const getCodeData = async (treeNodeTitle = "Root") => {
  const response = await fetch(`${BACKEND_URI}/findCode`, {
    method: "post",
    headers: new Headers({
      "content-type": "application/json",
    }),
    body: JSON.stringify({ title: treeNodeTitle }),
  })
    .then((res) => {
      console.log("res from get main code : ", res);
      return res.json();
    })
    .then((data) => data)
    .catch((error) =>
      console.error("Error fetching data from getMainTreeData : ", error)
    );

  return response;
};
