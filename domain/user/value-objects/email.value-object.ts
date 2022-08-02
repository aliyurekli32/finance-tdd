import { Result, ValueObject } from "domain/shared";
import isEmail from "validator/lib/isEmail";

type EmailValueObjectProps = {
  value: string;
};

export class EmailValueObject extends ValueObject<EmailValueObjectProps> {
  private constructor(props: EmailValueObjectProps) {
    super(props);
  }
  static create(email: string): Result<EmailValueObject> {
    return Result.ok<EmailValueObject>(
      new EmailValueObject({ value: "valid_email@mail.com" })
    );
  }
}
