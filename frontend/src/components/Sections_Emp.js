import { Link } from "react-router-dom";
import { ImUserPlus  } from "react-icons/im";
import { FaUsers } from "react-icons/fa";
import { RiProfileFill } from "react-icons/ri";
function Sections() {
  return (
    <div className="sections">
      <div className="container">
        <div className=" section section_1">
        
          <div className="in_section">
            <div className="left-group">
              <ImUserPlus />
              <span>
                Employee <br /> Center
              </span>
            </div>
            
            <span className="text">
              From this page, you can register new employees 
               in the system.
               Only HR accounts can use this page.
            </span>
          </div>
          <Link to={'/emp/empdetails'}>
          <div className="bot-text"><span>
          Employee Center
          </span>
          </div>
          </Link>
        </div>

      </div>
    </div>
  );
}
export default Sections;
