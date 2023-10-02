import axios from "axios"

  const  getNews = async () => {
    const url = "http://localhost:8080";
    try {
      return await axios.get(`${url}/news`)
        
    } catch (error) {
        console.log("Error while calling the getNews api",error)
        
    }
}
export default getNews;
