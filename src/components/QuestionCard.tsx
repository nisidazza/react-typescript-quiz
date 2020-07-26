import React from "react";

type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: boolean;
  questionNr: number;
  totalQuestions: number;
};

//FC tells React that this is a functional component
const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => (
  <div>
    <p className="number">
      Question: {questionNr} / {totalQuestions}
    </p>
    {/*renders some HTML*/}
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div>
      {answers.map((answer) => (
        <div>
            <button disabled={userAnswer} onClick={callback}>
                <span dangerouslySetInnerHTML={{__html: answer}} />
            </button>
        </div>
      ))}
    </div>
  </div>
);

export default QuestionCard;
