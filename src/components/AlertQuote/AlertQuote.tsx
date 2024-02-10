import React from "react";
import {Quotes} from "../../type";
import {format} from "date-fns";
import {Link, useNavigate} from "react-router-dom";
import "./AlertQuote.css";
import axiosApi from "../../axiosApi.ts";
import deleteImage from "../../assets/delete.svg";
import editImage from "../../assets/edit.svg";


interface Props {
  quote: Quotes,
}

const AlertQuote: React.FC<Props> = ({quote}) => {
  const navigate = useNavigate();

  const deleteQuote = async (id: string) => {
    await axiosApi.delete("/quotes/" + id + ".json");
    navigate(-1);
  };

  const style = {
    width: 30,
    height: 30,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const deleteBtn = {
    ...style,
    backgroundImage: `url(${deleteImage})`,
  };

  const editBtn = {
    ...style,
    backgroundImage: `url(${editImage})`,
  };

  return (
    <div className={"quote alert alert-light"}>
      <div className={"d-flex align-items-center justify-content-between"}>
        <div className={"text-secondary"} style={{fontSize: 12}}>
          <strong className={"text-primary border-bottom border-primary"}>Created
            on:</strong> {format(quote.createdAt, "dd.MM.yyyy HH:mm")}
        </div>
        <div className={"d-flex flex-row gap-1"}>
          <Link to={"/delete"} onClick={() => deleteQuote(quote.id)} className={"btn btn-primary"}
                style={deleteBtn}></Link>
          <Link to={"/new-quotes/" + quote.id + "/edit"} className={"btn btn-primary"} style={editBtn}></Link>
        </div>
      </div>
      <div>
        <div className={"text-break mt-4 border border-primary rounded p-4 overflow-y-auto"} style={{maxHeight: 200}}>
          {quote.text}
        </div>
        <div className={"text-break text-end mt-2"}><strong
          className={"text-primary"}>Author:</strong> ____{quote.author}</div>
      </div>
    </div>
  );
};

export default AlertQuote;