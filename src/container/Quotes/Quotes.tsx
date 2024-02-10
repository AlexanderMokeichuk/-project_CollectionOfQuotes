import React from "react";
import ToolBar from "../../components/ToolBar/ToolBar.tsx";

const Quotes: React.FC = () => {
  return (
    <div className={"row"}>
      <div className={"col-3"}>
        <ToolBar/>
      </div>

      <div className={"col"}>
        <div className={"alert alert-primary"}>Quotes</div>
      </div>
    </div>
  );
};

export default Quotes;