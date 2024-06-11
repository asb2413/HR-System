import linkdin from '../imgs/linkedin.svg'
import github from '../imgs/github.svg'

function Footer() {
  return (
    <div className="footer">

        <div className="left-group">
          <div className="social">
            <a href="https://www.linkedin.com/in/abdullah-s-bouladame-8811731a3/">
            <img src={linkdin} alt="" />
            </a>
            <a href="https://github.com/asb2413">
            <img src={github} alt="" />
            </a>
          </div>
          <span>Created by Abdullah Bouladame 2023</span>
        </div>
        <div className="right-group">
          <span>Email: abdullahs2413@gmail.com<br/>
                     Location: Saudi Arabia
          </span>
        </div>

    </div>
  )
}
export default Footer