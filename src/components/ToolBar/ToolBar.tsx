import {Link} from "react-router-dom";
import {CATEGORY_OPTIONS} from "../../constants.ts";

const ToolBar = () => {
  return (
    <ul>
      <li><Link to={"/quotes"}>All</Link></li>
      {CATEGORY_OPTIONS.map((item) => {
        return <li><Link to={`/quotes/${item.value}`}>{item.category}</Link></li>;
      })}
    </ul>
  );
};

export default ToolBar;