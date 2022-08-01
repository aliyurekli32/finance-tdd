import { describe, it, expect } from "bun:test";
import { EmailValueObject } from "./email.value-object";

describe("Email Value Object", () => {
  it("should create an valid email value object", () => {
    const email = "valid_email@mail.com";
    const emailValueObject = EmailValueObject.create(email);
    expect(emailValueObject.getResult().props.value).toBe(email);
  });
});
