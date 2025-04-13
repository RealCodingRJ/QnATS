
export type GetAnswer = {
    answers: string[];
}

export function GetAnswers<GetAnswer>(answer: GetAnswer):GetAnswer {

    return answer as GetAnswer;

}
