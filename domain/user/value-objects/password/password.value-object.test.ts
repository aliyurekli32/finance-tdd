import { describe, it, expect } from "bun:test";
import { PasswordValueObject } from "./password.value-object";

describe("", () => {
  it("should create valid password", () => {
    const password = "valid_password";
    const passwordValueObject = PasswordValueObject.create(password);
    expect(passwordValueObject.getResult().props.value).toBe(password);
  });
});
