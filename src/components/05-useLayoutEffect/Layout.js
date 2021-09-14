import React, { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "./layaout.css";

export const Layout = () => {
  const { counter, increment } = useCounter(1);

  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { quote } = !!data && data[0];

  const pTag = useRef();
  const [boxsize, setBoxsize] = useState({});

  useLayoutEffect( ()=> {
    setBoxsize(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1>Layaout</h1>
      <hr />

      <figure>
        <blockquote className="blockquote text-end">
          <p 
          className="mb-0"
          ref={pTag}
          >
              {quote}
        </p>
        </blockquote>
      </figure>

      <pre>
          { JSON.stringify(boxsize, null, 3)}
      </pre>

      <button onClick={increment} className="btn  btn-primary">
        Siguiente frase
      </button>

    </div>
  );
};
