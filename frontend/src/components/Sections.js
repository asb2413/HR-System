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
                Add <br /> Employee
              </span>
            </div>
            
            <span className="text">
            This page allows you to register new employees into the system. Please note that only HR accounts are authorized to access this page.
            </span>
          </div>
          <Link to={'/hr/addemp'}>
          <div className="bot-text"><span>
          Add Employee
          </span>
          </div>
          </Link>
        </div>

        <div className=" section section_1">
          <div className="in_section">
            <div className="left-group">
              <FaUsers/>
              <span>
                Employee <br /> Center
              </span>
            </div>
            
            <span className="text">
            This section provides access to employee information and allows you to add more details.
            </span>
          </div>
          <Link to={'/hr/employee'}>
          <div className="bot-text">
            <span>
          Employee Center
          </span>
          </div>
          </Link>
        </div>

        <div className=" section section_1">
          <div className="in_section">
            <div className="left-group">
              <RiProfileFill />
              <span>
                My <br /> Profile
              </span>
            </div>
            
            <span className="text">
            This section shows your profile.
            </span>
          </div>
          <Link to={'/hr/myProfile'}>
          <div className="bot-text">
            <span>
          My Profile
          </span>
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Sections;
