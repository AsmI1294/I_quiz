import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import "./Quiz.css";

const Quiz = ({ ques, id, isCorrect }) => {
  let ele = document.getElementsByName(ques.id);
  //state to show correct value if eye icon is pressed
  const [success, setSuccess] = useState(false);
  const [eyeId, setEyeId] = useState(0);
  function displayRadioValue() {
    for (let i = 0; i < ele.length; i++) {
      if (ele[i].checked) {
        if (ele[i].value === ques.correctAnswer) {
          isCorrect(id, 1);
        } else {
          isCorrect(id, 0);
        }
      }
    }
  }
  useEffect(() => {
    for (let i = 0; i < ele.length; i++) {
      if (ele[i].value === ques.correctAnswer) {
        setEyeId(i);
      }
    }
  }, [ele, ques.correctAnswer]);

  useEffect(() => {
    if (success === true) {
      ele[eyeId].parentElement.classList.add("successBg");
    } else {
      ele[eyeId].parentElement.classList.remove("successBg");
    }
  }, [success, ele, eyeId]);

  function createMarkup(as) {
    return { __html: as };
  }

  return (
    <div>
      <div className="qContainer">
        <div className="ques">
          <h2>
            <div dangerouslySetInnerHTML={createMarkup(ques.question)} />
          </h2>
          <FontAwesomeIcon
            icon={faEye}
            className="eye"
            onClick={() => setSuccess(!success)}
          />
        </div>
        <ul>
          {ques.options.map((option) => {
            return (
              <li onClick={displayRadioValue}>
                <input type="radio" id={option} name={ques.id} value={option} />
                <label
                  htmlFor={option}
                  dangerouslySetInnerHTML={createMarkup(option)}
                ></label>

                <div className="check"></div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
