export class UtilityHelper {
  static isStringOrArrayEmpty<T>(value: string | T[]): boolean {
    return !value ? true : value?.length === 0;
  }

  static isObjEmpty<T>(value: T): boolean {
    return !value ? true : Object.keys(value).length === 0;
  }

  static isStringBool(value: string): boolean {
    const caseInsensitiveValue: string = value.toLowerCase();
    return caseInsensitiveValue === 'true' || caseInsensitiveValue === 'false';
  }
}
