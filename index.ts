/**
 * Singleton decorator
 */
// export type InstatiableClass<InstanceType extends any> = (new (...args: any[]) => InstanceType) & { instance?: InstanceType; };
// export type FunctionDecorator<InstanceType> = (instatiable: InstatiableClass<InstanceType>) => InstatiableClass<InstanceType>;

// export function Singleton<InstanceType extends any>(): FunctionDecorator<InstanceType> {

//   return (Instatiable: InstatiableClass<InstanceType>) => {

//     function IsSingleton(): InstanceType {
//       const args = [].slice.call(arguments);

//       if (!Instatiable.instance) {
//         Instatiable.instance = new Instatiable(...args);
//       }

//       return Instatiable.instance;
//     }

//     IsSingleton.prototype = Instatiable.prototype;
//     return IsSingleton as Object as InstatiableClass<InstanceType>;
//   };
// }

export function Singleton<T = any>(): any {

  return (Instatiable: any) => {

    function IsSingleton(): any {
      const args = [].slice.call(arguments);

      if (!Instatiable.instance) {
        Instatiable.instance = new Instatiable(...args);
      }

      return Instatiable.instance;
    }

    IsSingleton.prototype = Instatiable.prototype;
    Object.assign(IsSingleton, Instatiable);
    return IsSingleton;
  };
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
