let url = "https://cat-fact.herokuapp.com/facts";

const fetchData = async () => {
  console.log("Fetching Data.....");
  let response = await fetch(url); //convert it JSON() format.
  console.log(response);
  let data = await response.json(); //in this way we can access all the data one by one.
  console.log(data[0].text);
};
