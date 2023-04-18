import "./Main.css";

function Main(props) {
  const { phonetics, word, meanings } = props.data;
  let audiourl = "";
  for (let index = 0; index < phonetics.length; index++) {
    if (phonetics[index].audio !== "") {
      audiourl = phonetics[index].audio;
    }
  }
  let phonetic = "";
  for (let index = 0; index < phonetics.length; index++) {
    if (phonetics[index].text !== "") {
      phonetic = phonetics[index].text;
    }
  }
  const playAudio = () => {
    console.log(phonetics);
    const audio = new Audio(audiourl);
    audio.play();
  };
  const aboutWords = meanings.map((data, id) => {
    return (
      <div key={id} className="box">
        <h1 className={`main_title ${props.font}`}>{data.partOfSpeech}</h1>
        <p className={`Meaning ${props.font}Regular`}>Meaning</p>
        <ul>
          {data.definitions.map((item, key) => {
            return (
              <li key={key} className={`definition ${props.font}Regular`}>
                <p>{item.definition}</p>
                {item.example!==undefined? <p className="example">{`"${item.example}"`}</p> : ""}
              </li>
            );
          })}
        </ul>
      </div>
    );
  });

  return (
    <main>
      <div className="word_audio">
        <div className="word">
          <h1 className={`title ${props.font}Bold`}>{word}</h1>
          <p className={`phonetic ${props.font}Regular`}>{phonetic}</p>
        </div>
        <svg
          onClick={playAudio}
          className="audio"
          xmlns="http://www.w3.org/2000/svg"
          width="75"
          height="75"
          viewBox="0 0 75 75"
        >
          <g fill="#A445ED" fillRule="evenodd">
            <circle cx="37.5" cy="37.5" r="37.5" opacity=".25" />
            <path d="M29 27v21l21-10.5z" />
          </g>
        </svg>
      </div>
      <div className="meanings">{aboutWords}</div>
    </main>
  );
}
export default Main;
