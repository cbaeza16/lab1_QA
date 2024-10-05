const AGE_FOR_DRIVE = 18;

export class Person {
  private age: number = 0;

  getAge(): number {
    return this.age;
  }
  setAge(age: number): void {
    this.age = age;
  }
  canDrive(): boolean {
    return this.getAge() >= AGE_FOR_DRIVE;
  }
}
