/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const new_numbers = [numbers[0], numbers[numbers.length - 1]];
    return numbers.length === 0 ? [] : new_numbers;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled_numbers = numbers.map((num: number): number => num * 3);
    return tripled_numbers;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const ints = numbers.map((num: string): number =>
        isNaN(parseInt(num)) ? 0 : parseInt(num)
    );
    return ints;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const new_amounts = amounts.map((amount: string): string =>
        amount[0] === "$" ? amount.substring(1) : amount
    );
    const new_new_amounts = new_amounts.map((new_amount: string): number =>
        isNaN(parseInt(new_amount)) ? 0 : parseInt(new_amount)
    );
    return new_new_amounts;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const shouting = messages.filter(
        (message: string): boolean => message[message.length - 1] !== "?"
    );
    const shouting_array = shouting.map((shout: string): string =>
        shout[shout.length - 1] === "!" ? shout.toUpperCase() : shout
    );
    return shouting_array;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const short_words = words.filter(
        (word: string): boolean => word.length < 4
    );
    const words_numbered = short_words.map((): number => 1);
    const short_numbered = words_numbered.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    return short_numbered;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const color_truth = colors.every(
        (color: string): boolean =>
            color === "red" ||
            color === "blue" ||
            color === "green" ||
            color === ""
    );
    return color_truth;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const addends_sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const new_addends = addends.join("+");
    return new_addends === ""
        ? "0=0"
        : addends_sum.toString() + "=" + new_addends;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const firstNegNum = values.findIndex((value: number): boolean => value < 0);
    const values_sum = values.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const values_before_neg = values.slice(0, firstNegNum);
    const values_before_neg_sum = values_before_neg.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const neg_pos_values = [...values];
    neg_pos_values.splice(firstNegNum + 1, 0, values_before_neg_sum);
    const push_values_sum = [...values];
    push_values_sum.push(values_sum);
    return firstNegNum !== -1 ? neg_pos_values : push_values_sum;
}
