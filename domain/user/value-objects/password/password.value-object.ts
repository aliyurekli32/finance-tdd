import { Result, ValueObject } from "domain/shared";

type PasswordValueObjectProps = {
  value: string;
};
export class PasswordValueObject extends ValueObject<PasswordValueObjectProps> {
  private constructor(props: PasswordValueObjectProps) {
    super(props);
  }
  static create(password: string): Result<PasswordValueObject> {
    return Result.ok<PasswordValueObject>(
      new PasswordValueObject({ value: password })
    );
  }
}
