import  * as readline from 'readline';
import { Question } from "./Questions/Questions";

const IO = readline.createInterface(({
    input: process.stdin,
    output: process.stdout,
}))

export function CorrectMessage() {
    console.log("Correct");
}

const questions:string[] = Question.getQuestions();
const num = Math.floor(Math.random() * questions.length);

const randomQuestions: string = questions[num];

console.log(`Question: ${randomQuestions}`);

if (randomQuestions == "Favorite Color") {
    IO.question("Enter Answer: ", (answer) => {
        if (answer == "Green | Blue") {
            CorrectMessage();
        }
    })
}

if (randomQuestions == "Birthday") {
    IO.question("Enter Answer: ", (answer) => {
        if (answer == "11/17") {
            CorrectMessage();
        }
    })
}

if (randomQuestions == "Name") {
    IO.question("Enter Answer: ", (answer) => {
        if (answer == "Ryan G") {
            CorrectMessage();
        }
    })
}
