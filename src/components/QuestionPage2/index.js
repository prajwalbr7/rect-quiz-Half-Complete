import {IoMdArrowRoundForward} from 'react-icons/io'
import './index.css'

const QuestionPage2 = props => {
  const {history} = props
  const OnClickQuestionPage2 = () => {
    history.replace('/QuestionPage3')
  }
  return (
    <div className="QuestionPage1">
      <div className="QuestionSubContainer">
        <div className="CircleContainer">
          <div className="circle-border">
            <div className="circle">
              <h1 className="QuestionPage1Heading">
                2<span className="SpanQuestionPage1Heading">/5</span>
              </h1>
            </div>
          </div>
        </div>
        <h1 className="QuestionPage1TitleQuestion">
          How do you judge what should be added in the next version of the app?
        </h1>
        <ul className="ulQuestionPage1">
          <li className="ListStylingQuestionPage1">
            <input
              type="radio"
              className="inputCheckBoxStyle"
              id="Data Analysis"
            />
            <label className="labelTextStyle" htmlFor="Data Analysis">
              Data Analysis
            </label>
          </li>

          <li className="ListStylingQuestionPage1">
            <input
              type="radio"
              className="inputCheckBoxStyle"
              id="Data Analysis"
            />
            <label className="labelTextStyle" htmlFor="Data Analysis">
              Data Analysis
            </label>
          </li>
        </ul>

        <button
          className="QuestionPage1ButtonStyle"
          type="button"
          onClick={OnClickQuestionPage2}
        >
          <p className="QuestionPage1ButtonPara">
            Next{' '}
            <span className="">
              <IoMdArrowRoundForward />
            </span>
          </p>
        </button>
      </div>
    </div>
  )
}
export default QuestionPage2
