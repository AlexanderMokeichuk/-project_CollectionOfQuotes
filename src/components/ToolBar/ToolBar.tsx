import {Link} from "react-router-dom";
import {CATEGORY_OPTIONS} from "../../constants.ts";
import "./ToolBar.css";

const ToolBar = () => {
  return (
    <ul className={"border-bottom pb-1"}>
      <li><Link to={"/"} className={"toolBarLink"}>All</Link></li>
      {CATEGORY_OPTIONS.map((item) => {
        return <li key={item.value}><Link to={`/quotes/${item.value}`} className={"toolBarLink"}>{item.category}</Link></li>;
      })}
    </ul>
  );
};

export default ToolBar;