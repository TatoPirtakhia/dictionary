import "./error.css"
function Error(props) {
  return (
    <div className="errorpage">
      <div className="smile">&#x1F615;</div>
      <p className={`errorTitle ${props.font}Bold`}>No Definitions Found</p>
      <p className="errorParagraph">
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </div>
  );
}

export default Error
