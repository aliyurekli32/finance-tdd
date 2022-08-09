import { describe, it, expect } from "bun:test";
import { EmailValueObject } from "./email.value-object";

describe("Email Value Object", () => {
  it("should create an valid email value object", () => {
    const email = "valid_email@mail.com";
    const emailValueObject = EmailValueObject.create(email);
    expect(emailValueObject.getResult().props.value).toBe(email);
  });
  it("should create an invalid email value object", () => {
    const email = "invalid_email@mail";
    const emailValueObject = EmailValueObject.create(email);
    expect(emailValueObject.isFailure).toBe(true);
  });
  it("should convert upper case email to lower case", () => {
    const email = "VALID_EMAIL@mail.com";
    const emailValueObject = EmailValueObject.create(email);
    expect(emailValueObject.getResult().props.value).toBe(
      "valid_email@mail.com"
    );
  });
});
