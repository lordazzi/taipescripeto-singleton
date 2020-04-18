import { Singleton } from './index';

@Singleton()
class InstantiableService { }

@Singleton()
class StatefullService {
  constructor(
    public clientName: string,
    public clientAge: number
  ) { }
}

@Singleton()
class OldSchoolSingleton {
  static getInstance(): OldSchoolSingleton {
    return new OldSchoolSingleton();
  }
}

class ExtendedService extends InstantiableService { }

describe('Singleton', () => {
  it('Singleton sem nada', () => {
    const instance1 = new InstantiableService();
    const instance2 = new InstantiableService();
    expect(instance1 instanceof InstantiableService).toBe(true);
    expect(instance2 instanceof InstantiableService).toBe(true);
    expect(instance1 === instance2).toBe(true);
  });

  it('Singleton statefull service', () => {
    const age = 29;
    const statefull1 = new StatefullService('Azzi', age);
    const statefull2 = new StatefullService('Non valid data', age);

    expect(statefull1 instanceof StatefullService).toBe(true);
    expect(statefull2 instanceof StatefullService).toBe(true);
    expect(statefull1 instanceof InstantiableService).toBe(false);
    expect(statefull1).toBe(statefull2);

    expect(statefull1.clientName).toBe(statefull2.clientName);
    expect(statefull1.clientAge).toBe(statefull2.clientAge);
  });

  it('Singleton statefull service', () => {
    const age = 29;
    const statefull1 = new StatefullService('Azzi', age);
    const statefull2 = new StatefullService('Non valid data', age);

    expect(statefull1 instanceof StatefullService).toBe(true);
    expect(statefull2 instanceof StatefullService).toBe(true);
    expect(statefull1 instanceof InstantiableService).toBe(false);
    expect(statefull1).toBe(statefull2);

    expect(statefull1.clientName).toBe(statefull2.clientName);
    expect(statefull1.clientAge).toBe(statefull2.clientAge);
  });

  it('Singleton with static stuff', () => {
    const static1 = OldSchoolSingleton.getInstance();
    const static2 = OldSchoolSingleton.getInstance();

    expect(static1 instanceof OldSchoolSingleton).toBe(true);
    expect(static2 instanceof OldSchoolSingleton).toBe(true);
    expect(static1).toBe(static2);
  });

  it('Class that extends singleton', () => {
    const nonSingletonClass1 = new ExtendedService();
    const nonSingletonClass2 = new ExtendedService();

    expect(nonSingletonClass1 === nonSingletonClass2).toBe(false);
  });
});


