import React, {useCallback, useEffect, useState} from "react";
import ToolBar from "../../components/ToolBar/ToolBar.tsx";
import {GetPost, Quotes} from "../../type";
import {useParams} from "react-router-dom";
import axiosApi from "../../axiosApi.ts";
import Spinner from "../../components/Spinner/Spinner.tsx";
import AlertQuote from "../../components/AlertQuote/AlertQuote.tsx";

const Quotes: React.FC = () => {
  const params = useParams();
  const [quotes, setQuotes] = useState<Quotes[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchQuotes = useCallback(async () => {
    setLoading(true);
    let url = "/quotes.json";
    if (params.id) url = url + "?orderBy=\"category\"&equalTo=" + `"${params.id}"`;

    const {data: response} = await axiosApi.get<GetPost | null>(url);
    if (response) {
      setQuotes(Object.keys(response).map(id => ({
        ...response[id],
        id,
      })).reverse());
    } else {
      setQuotes([]);
    }
    setLoading(false);
  }, [params.id]);

  useEffect(() => {
    void fetchQuotes();
  }, [fetchQuotes]);

  let blockQuotes = (
    <>
      <div className={"col-3"}>
        <ToolBar/>
      </div>

      <div className={"col"}>
        {quotes.map((quote) => <AlertQuote quote={quote}/>)}
      </div>
    </>
  );

  if (loading) blockQuotes = <Spinner/>;

  return (
    <div className={"row"}>
      {blockQuotes}
    </div>
  );
};

export default Quotes;