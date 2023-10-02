import './index.css'

const Result = () => (
  <div className="QuestionPage1">
    <div className="QuestionSubContainer">
      <h1 className="ResultHeading">Your result</h1>

      <div className="CorrectContainer">
        <span className="dot"> </span>
        <p className="CorrectParaStyle">
          3 <span className="CorrectParaSpanStyle">Correct</span>
        </p>
      </div>

      <div className="CorrectContainer bgColor">
        <span className="dot color"> </span>
        <p className="CorrectParaStyle">
          3 <span className="CorrectParaSpanStyle">Incorrect</span>
        </p>
      </div>

      <button className="HomePageButtonStyle" type="button">
        Start Again
      </button>
    </div>
  </div>
)
export default Result
