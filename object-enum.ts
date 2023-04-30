
enum Role {ADMIN, READ_ONLY, AUTHOR}

// const person: {
//     name: string;
//     age: number;
//  } = {
const person = {
    name: "Mandeep",
    age: 21,
    hobbies: ["Sports", "Study"],
    role: Role.ADMIN
};

console.log(person)