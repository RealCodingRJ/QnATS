export namespace Question {

    export function getQuestions<QUEST>(): QUEST {

        const QUESTION: QUEST | string[] = [] ;

        QUESTION.push("Birthday");
        QUESTION.push("Favorite Color");
        QUESTION.push("Name")

        return QUESTION as QUEST;


    }

}