import { describe, test, expect } from "vitest";

const isPalindrome = (word) => {

  if (word.toLowerCase() === word.split("").reverse().join("").toLowerCase()) {  
    return true
  } 
  return false
}

describe("isPalindrome function", () => {
  test("should return true for 'kajak'", () => {
    const input = "kajak";
    const output = isPalindrome(input);

    expect(output).toBe(true);
  });

  test("should return false for 'kot'", () => {
    const input = "kot";
    const output = isPalindrome(input);

    expect(output).toBe(false);
  });

  test("should return true for 'Anna', regardless of case", () => {
    const input = "Anna";
    const output = isPalindrome(input);

    expect(output).toBe(true);
  });

  test("should return true for an empty string", () => {
    const input = "";
    const output = isPalindrome(input);

    expect(output).toBe(true);
  });

  test("should throw an error if the argument is not a string", () => {
    const input = 123;
    const testFunction = () => {
      isPalindrome(input);
    };

    expect(testFunction).toThrowError("Wrong argument");
  });
});
