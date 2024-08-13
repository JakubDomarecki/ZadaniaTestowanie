import { describe, it, expect, test } from "vitest";
import { multiply, isAdult, getUsername } from "./functions";

describe('tests for multiplication', () => {
    test('4 and 4 is equal to 16', () => {
        expect(multiply(4,4)).toBe(16);
    })

    test('4 and -4 is equal to -16', () => {
        expect(multiply(4, -4)).toBe(-16)
    })

    test('4 and 0 is equal to 0', () => {
        expect(multiply(4, 0)).toBe(0)
    })
}) 


describe('test if person is adult', () => {
    test.each([
        [18, true],
        [20, true],
        [17, false],
        [16, false],
    ])('is adult for %s return %s', (age, expected) => {
        expect(isAdult(age)).toBe(expected)
    })
})

describe('tests for async function', () => {
    test('resolves with the user object for id 1', async () => {
        const resolve = await getUsername(1);
        expect(resolve).toEqual({ id: 1, name: "John Doe" })
    })

    test('reject if the user is not found', () => {
        expect(getUsername(2)).rejects.toThrowError("User not found")
    })


})