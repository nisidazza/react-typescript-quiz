//specifies type for each property
export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answer: string[];
    question: string;
    type: string
}

// combining correct and incorrect answers together => it uses the type Question and adds a property called "answers"
export type QuestionState = Question & {answers: string[]};

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty ) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    // awaits the fetch itself and then when we convert it to json
    const data = await (await fetch(endpoint)).json();
    console.log(data);
}