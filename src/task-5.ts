// Задача 5

// Завдання:
// Типізуйте функцію повністю: параметри і повернення функції.

interface CreateUserParams { 
    name: string;
    age: number;
}
// interface CreateUserReturn { 
//     name: string;
//     age: number;
//     isAdmin: boolean;
// }
type CreateUserReturn = CreateUserParams & {isAdmin: boolean};


function createUser({name, age}: CreateUserParams): CreateUserReturn {
  return {
    name,
    age,
    isAdmin: false
  };
}

createUser({ name: "Alice", age: 30 });
