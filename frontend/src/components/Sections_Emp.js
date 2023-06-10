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
            The employee portal provides access only to the employee center, where you can view all your personal information such as payroll, attendance, and requests. Additionally, you can submit requests and await approval, and track the status of your requests along with the name of the approver.
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
