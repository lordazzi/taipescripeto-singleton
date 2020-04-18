/**
 * Singleton decorator
 */
export type InstatiableClass<T extends any> = (new (...args: any[]) => T) & { instance?: T; };

export function Singleton<T extends any>() {

  return (instatiable: InstatiableClass<T>) => {

    function IsSingleton() {
      const args = [].slice.call(arguments);

      if (!instatiable.instance) {
        instatiable.instance = new instatiable(...args);
      }

      return instatiable.instance;
    }

    IsSingleton.prototype = instatiable.prototype;
    return IsSingleton;
  }
}

/**
 * Enum Type Guard
 */
export function enumTypeGuard<EnumType extends string | number>(
  value: any, enumeration: { [prop in EnumType]: EnumType }
): value is EnumType {
  const enumAsObject: { [prop: string]: string | number } = Object(enumeration);
  //  includes is not compatible with some browsers
  const indexNotFound = -1;

  return Object.keys(enumeration).map(
    key => enumAsObject[key]
  ).indexOf(value) !== indexNotFound;
}
