import './index.css'

const Home = props => {
  const {history} = props
  console.log(history)
  const OnClickPageNavigation = () => {
    history.replace('/QuestionPage1')
  }
  return (
    <div className="HomeMainContainer">
      <img src="./img/Frame.png" alt="FrameLogo" className="FrameLogo" />
      <img src="./img/Group 3.png" alt="Group3" className="Group3" />
      <button
        className="HomePageButtonStyle"
        type="button"
        onClick={OnClickPageNavigation}
      >
        Start
      </button>
    </div>
  )
}
export default Home
