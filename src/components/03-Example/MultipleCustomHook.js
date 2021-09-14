import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "../02-useEffect/effect.css";

export const MultipleCustomHook = () => {
  const { counter, increment } = useCounter(1);

  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0];

  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {loading ? (
        <div className="alert alert-info text-center">loading..</div>
      ) : (
        <figure>
          <blockquote className="blockquote text-end">
            <p className="mb-0">{quote}</p>
          </blockquote>
          <figcaption className="blockquote-footer text-end">{author}</figcaption>
        </figure>
      )}

      <button onClick={increment} className="btn  btn-primary">
        Siguiente frase
      </button>
    </div>
  );
};
