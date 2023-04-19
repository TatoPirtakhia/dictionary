import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Error from "./error";
function App() {
  const [data, setData] = useState("");
  const [dark, setDark] = useState(false);
  const [font, setFont] = useState("inter");
  const swich = () => {
    setDark(!dark);
    console.log(data);
  };
  return (
    <div className={dark ? `dark_body ${font}` : `notDark_body ${font}`}>
      <Header dark={dark} setDark={setDark} swich={swich} setData={setData} font={font} setFont={setFont}/>
      {data!=='' ? (data === false || data.phonetics.length === 0 )?<Error font={font} /> : <Main data={data} font={font} dark={dark}/> :""}
    </div>
  );
}

export default App;
