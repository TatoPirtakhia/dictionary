
async function Words(word){
    try {
       const response = await axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/" + word)
       console.log(response.data[0])
       const getData = response.data[0]
       return getData
    } catch (error) {
       console.log(error)
       return false
    }
   }
   export default Words