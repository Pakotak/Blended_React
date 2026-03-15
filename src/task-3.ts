// Задача 3
// Завдання:
// Типізуйте user.
// Зробіть властивість id тільки для читання.
// Опис: Є об’єкт користувача:

interface User {
    readonly id: string;
    name: string;
    age: number;
    active: boolean;
}

const user: User = { id: "1", name: "Charlie", age: 25, active: true };

console.log(user)