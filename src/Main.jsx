import "./Main.css";

function Main(props) {
  const { phonetics, word, meanings, sourceUrls } = props.data;
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
    console.log(sourceUrls);
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
                {item.example !== undefined ? (
                  <p className="example">{`"${item.example}"`}</p>
                ) : (
                  ""
                )}
              </li>
            );
          })}
          <div className="synonym_box">
            {data.synonyms !== undefined && data.synonyms.length !== 0 ? (
              <p className={`${props.font}Regular Synonyms`}>Synonyms</p>
            ) : (
              ""
            )}
            <div className="synonym">
              {data.synonyms !== undefined && data.synonyms.length !== 0
                ? data.synonyms.map((word, id) => {
                    return (
                      <p key={id} className={`synonyms ${props.font}Bold`}>
                        {word}
                      </p>
                    );
                  })
                : ""}
            </div>
          </div>
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
      <div className="source">
        <p className={`${props.font}Regular source_title`}>Source</p>
        <div className="link_icon">
          <a href={sourceUrls} className="link" target="_blank">
            Click for more imformation
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
          >
            <path
              fill="none"
              stroke="#838383"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455 0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5"
            />
          </svg>
        </div>
      </div>
    </main>
  );
}
export default Main;
