// Задача 17

// Функція fetchUsers повертає проміс, який через fetch отримує список користувачів з API.

// Завдання:

// Оголосіть інтерфейс User для користувача (перевірте, які властивості користувача містяться у відповіді бекенда).
// Типізуйте функцію fetchUsers.

interface User{
email: string;
id: number;
name: string;
phone: string;
username: string;
website: string;
address:{
    city: string;
    geo:{lat:string; lng:string;};
    street: string;
    suite:string;
    zipcode: string;
};
company:{
    bs:string;
    catchPhrase: string;
    name:string;
};
}

const fetchUsers = async ():Promise<User[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json() as User[];
  return data;
};

fetchUsers().then((users) => console.log(users));