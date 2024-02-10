import React, {useCallback, useEffect, useState} from "react";
import {GetPost, PostQuote, Quote} from "../../type";
import {useNavigate, useParams} from "react-router-dom";
import axiosApi from "../../axiosApi.ts";
import Spinner from "../../components/Spinner/Spinner.tsx";
import {CATEGORY_OPTIONS} from "../../constants.ts";

const defaultState: Quote = {
  author: "",
  category: "star-wars",
  text: "",
};

const NewQuote: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState<Quote>(defaultState);

  const fetchQuote = useCallback(async () => {
    setLoading(true);
    const {data: response} = await axiosApi.get<GetPost | null>("/quotes/" + params.id + ".json");
    if (response) {
      setQuote({
        author: `${response.author}`,
        category: `${response.category}`,
        text: `${response.text},`
      });
    }
    setLoading(false);
  }, [params.id]);

  useEffect(() => {
    if (params.id) {
      void fetchQuote();
    } else {
      setQuote(defaultState);
    }
  }, [fetchQuote, params.id]);

  const changeForm = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setQuote(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const date = new Date();
    const newDate = date.toISOString();

    const post: PostQuote = {
      ...quote,
      createdAt: newDate,
    };

    try {
      if (params.id) {
        await axiosApi.patch("/quotes/" + params.id + ".json", {...quote});
        navigate(-1);
      } else {
        await axiosApi.post("/quotes.json", post);
      }
      setQuote(defaultState);
    } finally {
      setLoading(false);
    }

  };

  let form = (
    <form onSubmit={onFormSubmit} className={"form-control w-75 d-flex gap-3 flex-column"}>
      <div className={"form-group text-primary"}>
        <label className={"fs-5"}>Category</label>
        <select
          name={"category"}
          className={"form-select form-select-sm text-primary"}
          required

          value={quote.category}
          onChange={changeForm}
        >
          <option defaultValue={defaultState.category}>Category</option>
          {CATEGORY_OPTIONS.map((category) => {
            return <option key={`${category.value}`} value={`${category.value}`}>{category.category}</option>;
          })}
        </select>
      </div>

      <div className="mb-3">
        <label className={"fs-5 text-primary"}>Author</label>
        <input
          type="text"
          name={"author"}
          className="form-control"
          required

          value={quote.author}
          onChange={changeForm}
        />
      </div>

      <div className="mb-3">
        <label className={"fs-5 text-primary"}>Text</label>
        <textarea
          name={"text"}
          className="form-control"
          style={{minHeight: 300}}
          required

          value={quote.text}
          onChange={changeForm}
        ></textarea>
      </div>
      <button type={"submit"} className={"btn btn-primary px-4 ms-auto"}>add</button>
    </form>
  );

  if (loading) form = <Spinner/>;

  return (
    <div className={"d-flex justify-content-center"}>
      {form}
    </div>
  );
};

export default NewQuote;