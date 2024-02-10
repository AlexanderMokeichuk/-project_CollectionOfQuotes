import {Link} from "react-router-dom";

const ToolBar = () => {
  return (
    <ul>
      <li><Link to={""}>All</Link></li>
      <li><Link to={""}>Star Wars</Link></li>
      <li><Link to={""}>Famous people</Link></li>
      <li><Link to={""}>Saying</Link></li>
      <li><Link to={""}>Humor</Link></li>
      <li><Link to={""}>Motivational</Link></li>
    </ul>
  )
};

export default ToolBar;