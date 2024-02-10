import React, {useState} from "react";
import {PostQuote, Quote} from "../../type";
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
        navigate("/");
      } else {
        await axiosApi.post("/quotes.json", post);
      }
      setQuote(defaultState);
    } finally {
      setLoading(false);
    }

  };

  let form = (
    <form onSubmit={onFormSubmit} className={"form-control d-flex flex-column"}>
      <div className={"form-group"}>
        <label>Category</label>
        <select
          name={"category"}
          className={"form-select form-select-sm"}
          required

          value={quote.category}
          onChange={changeForm}
        >
          <option selected disabled>Category</option>
          {CATEGORY_OPTIONS.map((category) => {
            return <option key={`${category.value}`} value={`${category.value}`}>{category.category}</option>;
          })}
        </select>
      </div>

      <div className="mb-3">
        <label>Author</label>
        <input
          type="text"
          name={"author"}
          className="form-control"
          placeholder="author"
          required

          value={quote.author}
          onChange={changeForm}
        />
      </div>

      <div className="mb-3">
        <label>Text</label>
        <textarea
          name={"text"}
          className="form-control"
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
    <div>
      {form}
    </div>
  );
};

export default NewQuote;