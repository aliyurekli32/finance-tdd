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
     const emailIsNotValidEmail = !isEmail(email);
     if (emailIsNotValidEmail) {
       return Result.fail<EmailValueObject>("Invalid email");
     }
    return Result.ok<EmailValueObject>(
      new EmailValueObject({ value: email.toLocaleLowerCase() })
    );
  }
}
