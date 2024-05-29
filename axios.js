/*axios.get("https://swapi.dev/api/people/1/")
.then (res => {
    console.log("Response:0", res)
})
.catch ((e) => {
    console.log("Error", e);
});*/

const getStarWarsPerson = async () => {
    const res = await axios.get("https://swapi.dev/api/people/1/");
    console.log(res);
};