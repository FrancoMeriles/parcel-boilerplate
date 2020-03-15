interface Person {
  firstName: string;
  lastName: string;
}
export const hello = (person: Person) => {
  return `Hello ${person.firstName} ${person.lastName}`;
};
