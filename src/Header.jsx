import { useState } from "react";
import "./Header.css";
import Words from "./Words";
function Header(props) {
  const [input, setInput] = useState("");
  const [empty,setEmpty] = useState(true)
  let data = "";
  async function getData(word) {
    data = await Words(word);
    props.setData(data);
  }
  const typed = (event) => {
    setInput(event.target.value);
    setEmpty(true)
  };
  const shearchWord = (event) => {
    if (event.key === "Enter") {
      if(input!==''){ 
      getData(input);
      setInput("");
    }else{
      setEmpty(false)
    }
    }
  };
  return (
    <header>
      <nav>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="38"
          viewBox="0 0 34 38"
        >
          <g fill="none" fillRule="evenodd" stroke="#838383" strokeWidth="1.5">
            <path d="M1 33V5a4 4 0 0 1 4-4h26.8A1.2 1.2 0 0 1 33 2.2v26.228M5 29h28M5 37h28" />
            <path strokeLinejoin="round" d="M5 37a4 4 0 1 1 0-8" />
            <path d="M11 9h12" />
          </g>
        </svg>
        <div className="right">
          <select
            className={
              props.dark
                ? `dark_fonts ${props.font}Bold`
                : `fonts ${props.font}Bold`
            }
            onChange={(event) => props.setFont(event.target.value)}
          >
            <option value="inter">Sans Serif</option>
            <option value="lora">Serif</option>
            <option value="inconsolata">Mono</option>
          </select>

          <div className="darkmode">
            <div
              className={
                props.dark ? "dark_circle_container" : "circle_container"
              }
              onClick={props.swich}
            >
              <div className="circle"></div>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
            >
              <path
                fill="none"
                stroke={props.dark ? "#A445ED" : "#838383"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
              />
            </svg>
          </div>
        </div>
      </nav>
      <div className="input_icon">
      <input
      maxLength={20}
        className={props.dark? empty?`dark_input ${props.font}Bold` :`dark_inputDisable ${props.font}Bold`: empty? `input ${props.font}Bold`:`inputDisable ${props.font}Bold`
        }
        type="text"
        onChange={typed}
        value={input}
        onKeyDown={shearchWord}
        placeholder="Search for any word…"
      />
      <span className={empty?`spanActive ${props.font}Regular`:`spanDisable ${props.font}Regular`}>Whoops, can’t be empty…</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        className="shearch"
      >
        <path
          fill="none"
          stroke="#A445ED"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"
        />
      </svg>
      </div>
    </header>
  );
}

export default Header;
