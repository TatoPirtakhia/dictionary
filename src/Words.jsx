
async function Words(word){
    try {
       const response = await axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/" + word)
       const getData = response.data[0]
      console.log(getData)
       return getData
    } catch (error) {
      //  console.log(error)
       return false
    }
   }
   export default Words