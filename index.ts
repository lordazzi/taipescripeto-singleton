export type InstatiableClass<InstanceType extends any> = (new (...args: any[]) => InstanceType)
  & { instance?: InstanceType; } & { [staticStuff: string]: any };
export type FunctionDecorator<InstanceType> = (instatiable: InstatiableClass<InstanceType>) => InstatiableClass<InstanceType>;

/**
 * Singleton decorator
 */
export function Singleton<InstanceType extends any>(): any {

  return (instatiable: any) => {
    const Instatiable: InstatiableClass<InstanceType> = instatiable;

    const IsSingleton = function (): InstanceType {
      const args = [].slice.call(arguments);

      if (Instatiable.prototype !== this.constructor.prototype) {
        return new Instatiable(...args);
      }

      if (!Instatiable.instance) {
        Instatiable.instance = new Instatiable(...args);
      }

      return Instatiable.instance;
    } as Function as InstatiableClass<InstanceType>;

    IsSingleton.prototype = Instatiable.prototype;
    Object.keys(Instatiable).forEach(staticStuff => IsSingleton[staticStuff] = Instatiable[staticStuff]);
    return IsSingleton as Object as InstatiableClass<InstanceType>;
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
