import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const new_questions = questions.filter(
        (question: Question): boolean => question.published
    );
    return new_questions;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const new_questions = questions.filter(
        (question: Question): boolean =>
            question.body !== "" ||
            question.expected !== "" ||
            question.options.length !== 0
    );
    return new_questions;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const new_questions = questions.filter(
        (question: Question): boolean => question.id === id
    );
    return new_questions.length === 0 ? null : new_questions[0];
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const new_questions = questions.filter(
        (question: Question): boolean => question.id !== id
    );
    return new_questions;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const questionNames = questions.map(
        (question: Question): string => question.name
    );
    return questionNames;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const totalPoints = questions.reduce(
        (currentSum: number, question: Question) =>
            currentSum + question.points,
        0
    );
    return totalPoints;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const publishedPoints = questions.filter(
        (question: Question): boolean => question.published
    );
    const publishedSum = publishedPoints.reduce(
        (currentSum: number, question: Question) =>
            currentSum + question.points,
        0
    );
    return publishedSum;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const questionCSV = questions
        .map(
            (question: Question): string =>
                `${question.id},${question.name},${question.options.length},${question.points},${question.published}`
        )
        .join("\n");
    return "id,name,options,points,published\n" + questionCSV;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    interface Answer {
        questionId: number;
        text: string;
        submitted: boolean;
        correct: boolean;
    }
    const questionAnswers: Answer[] = questions.map((question: Question) => ({
        questionId: question.id,
        text: "",
        submitted: false,
        correct: false
    }));
    return questionAnswers;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const allPublished = questions.map(
        (question: Question): Question => ({ ...question, published: true })
    );
    return allPublished;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    const ifSameType = questions.filter(
        (question: Question): boolean => question.type === questions[0].type
    );
    return questions.length === 0
        ? true
        : ifSameType.length === questions.length;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const new_questions = [
        ...questions,
        {
            id,
            name,
            type,
            body: "",
            expected: "",
            options: [],
            points: 1,
            published: false
        }
    ];
    return new_questions;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const target_id = questions.filter(
        (question: Question): boolean => question.id === targetId
    );
    const new_questions = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const ind = new_questions.findIndex(
        (question: Question): boolean => question.id === target_id[0].id
    );
    new_questions[ind].name = newName;
    return new_questions;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const target_id = questions.filter(
        (question: Question): boolean => question.id === targetId
    );
    const ind = questions.findIndex(
        (question: Question): boolean => question.id === target_id[0].id
    );
    const new_questions = questions.map(
        (question: Question): Question => ({ ...question })
    );
    new_questions[ind].type = newQuestionType;
    if (new_questions[ind].type !== "multiple_choice_question") {
        new_questions[ind].options = [];
    }
    /*
    new_questions[ind].type !== "multiple_choice_question"
        ? (new_questions[ind].options = [])
        : new_questions[ind].options;
        */
    return new_questions;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    const target_id = questions.filter(
        (question: Question): boolean => question.id === targetId
    );
    const new_questions = questions.map(
        (question: Question): Question => ({
            ...question,
            options: [...question.options]
        })
    );
    const ind = new_questions.findIndex(
        (question: Question): boolean => question.id === target_id[0].id
    );
    if (targetOptionIndex === -1) {
        new_questions[ind].options = [...new_questions[ind].options, newOption];
    } else {
        new_questions[ind].options.splice(targetOptionIndex, 1, newOption);
    }
    return new_questions;
}
/*
    if (targetOptionIndex === -1) {
        return questions.map(
            (question: Question): Question =>
                question.id === targetId
                    ? { ...question, options: [...question.options, newOption] }
                    : { ...question }
        );
    } else {
        return questions.map(
            (question: Question): Question =>
                question.id === targetId
                    ? { ...question, options: [...question.options].splice(targetOptionIndex, 1, newOption) }
                    : { ...question }
        );
    }
    return new_questions;
    */

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const target_id = questions.filter(
        (question: Question): boolean => question.id === targetId
    );
    const new_questions = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const ind = new_questions.findIndex(
        (question: Question): boolean => question.id === target_id[0].id
    );
    const copy_question = {
        ...new_questions[ind],
        name: "Copy of " + new_questions[ind].name,
        published: false,
        id: newId
    };
    new_questions.splice(ind + 1, 0, copy_question);
    return new_questions;
}
