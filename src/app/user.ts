export class User {
  constructor(
    public Id: number,
    public Name: string,
    public Surname: string,
    public Age: number,
    public HireDate: Date
  ) {
    this.Id = Id;
    this.Name = Name;
    this.Surname = Surname;
    this.Age = Age;
    this.HireDate = HireDate;
  }
}
