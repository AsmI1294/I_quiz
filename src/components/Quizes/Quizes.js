import React, { useState } from "react";
import { Button } from "react-bootstrap";

import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";

const Quizes = () => {
  const { data } = useLoaderData();
  const { questions } = data;
  const [state, setState] = useState(new Array(questions.length));
  function isCorrect(id, ans) {
    let newState = [...state];
    newState[id] = ans;
    setState(newState);
    console.log(newState);
  }
  return (
    <div>
      <div>
        {questions.map((ques, id) => (
          <Quiz key={ques.id} id={id} isCorrect={isCorrect} ques={ques}></Quiz>
        ))}
      </div>
      <div className="d-flex justify-content-center m-5 ">
        <Button variant="info" className="w-50 text-light fs-4">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Quizes;
