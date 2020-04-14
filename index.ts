/**
 * Singleton decorator
 */
type InstatiableClass<T extends any> = (new (...args: any[]) => T) & { instance?: T; };

function Singleton<T extends any>() {

  return (instatiable: InstatiableClass<T>) => {

    function isSingleton() {
      const args = [];
      for (let i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
      }

      if (!instatiable.instance) {
        instatiable.instance = new instatiable(...args);
      }

      return instatiable.instance;
    }

    isSingleton.prototype = instatiable.prototype;
    return isSingleton;
  }
}

/**
 * Enum Type Guard
 */
export function enumTypeGuard<T extends string | number>(
  nativaValue: any, enumeration: { [prop in T]: T }
): nativaValue is T {
  const enumAsObject: {
    [prop: string]: string | number
  } = Object(enumeration);
  const indexNotFound = -1;

  return Object.keys(enumeration).map(
    key => enumAsObject[key]
  ).indexOf(nativaValue) !== indexNotFound;
}
