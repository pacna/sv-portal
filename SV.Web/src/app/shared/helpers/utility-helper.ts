export class UtilityHelper {
  static isStringOrArrayEmpty<TValue>(value: string | TValue[]): boolean {
    return value?.length === 0;
  }

  static isObjEmpty<TValue>(value: TValue): boolean {
    return Object.keys(value).length === 0;
  }

  static isStringBool(value: string): boolean {
    const caseInsensitiveValue: string = value.toLowerCase();
    return caseInsensitiveValue === 'true' || caseInsensitiveValue === 'false';
  }
}
