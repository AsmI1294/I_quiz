import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

import { useLoaderData } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const submit = () => {
    if (state.includes(undefined)) {
      window.scrollTo(0, 0);

      document.getElementById(
        "score"
      ).innerHTML = `Score: 0/${questions.length}`;
      toast.warn("Please answer all the questions!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      let Total = state.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
      );
      document.getElementById(
        "score"
      ).innerHTML = `Score: ${Total}/${questions.length}`;
      window.scrollTo(0, 0);
    }
  };
  return (
    <div>
      <div
        id="score"
        className="text-center display-3 bg-info fw-semibold text-secondary"
      ></div>
      <div>
        {questions.map((ques, id) => (
          <Quiz key={ques.id} id={id} isCorrect={isCorrect} ques={ques}></Quiz>
        ))}
      </div>
      <div className="d-flex justify-content-center m-5 ">
        <Button
          variant="info"
          className="w-50 text-light fs-4"
          onClick={submit}
        >
          Submit
        </Button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Quizes;
