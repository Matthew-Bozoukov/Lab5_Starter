// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

import * as functions from "../code-to-unit-test/unit-test-me.js";

describe("isPhoneNumber", () => {
  test("returns true for valid phone number", () => {
    expect(functions.isPhoneNumber("123-456-7890")).toBe(true);
  });

  test("returns true for valid phone number but with paranthesis", () => {
    expect(functions.isPhoneNumber("(123) 456-7890")).toBe(true);
  });

  test("returns false for phone number with no dashes", () => {
    expect(functions.isPhoneNumber("1234567890")).toBe(false);
  });

  test("returns false for non-phone-number text", () => {
    expect(functions.isPhoneNumber("hello")).toBe(false);
  });
});

describe("isEmail", () => {
  test("returns true for a valid email", () => {
    expect(functions.isEmail("student@example.com")).toBe(true);
  });

  test("returns true for a valid email with underscore", () => {
    expect(functions.isEmail("student_name@example.edu")).toBe(true);
  });

  test("returns false for email without @ symbol", () => {
    expect(functions.isEmail("student.example.com")).toBe(false);
  });

  test("returns false for email without a valid domain extension", () => {
    expect(functions.isEmail("student@example")).toBe(false);
  });
});

describe("isStrongPassword", () => {
  test("returns true for valid password starting with a letter", () => {
    expect(functions.isStrongPassword("abcd")).toBe(true);
  });

  test("returns true for vaLID password with letters, numbers, and underscore", () => {
    expect(functions.isStrongPassword("A123_456")).toBe(true);
  });

  test("returns false for password starting with a number", () => {
    expect(functions.isStrongPassword("1abc")).toBe(false);
  });

  test("returns false for password with invalid character", () => {
    expect(functions.isStrongPassword("abc!")).toBe(false);
  });
});

describe("isDate", () => {
  test("returns true for valid date", () => {
    expect(functions.isDate("1/2/2026")).toBe(true);
  });

  test("returns true for valid date with two digit month and day", () => {
    expect(functions.isDate("12/31/2026")).toBe(true);
  });

  test("returns false for date with dashes", () => {
    expect(functions.isDate("12-31-2026")).toBe(false);
  });

  test("returns false for date with two digit year", () => {
    expect(functions.isDate("12/31/26")).toBe(false);
  });
});

describe("isHexColor", () => {
  test("returns true for valid 3 character hex color with #", () => {
    expect(functions.isHexColor("#fff")).toBe(true);
  });

  test("returns true for valid 6 character hex color", () => {
    expect(functions.isHexColor("123abc")).toBe(true);
  });

  test("returns false for hex color with too few characters", () => {
    expect(functions.isHexColor("#12")).toBe(false);
  });

  test("returns false for hex color with invalid characters", () => {
    expect(functions.isHexColor("#ggg")).toBe(false);
  });
});
