import axios from "axios";
// Функція fetchUsers повертає проміс, який через axios отримує список користувачів з API.
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
  const response = await axios.get<User[]>("https://jsonplaceholder.typicode.com/users");
  return response.data;
};

const getUsers = async () => {
  const users = await fetchUsers();
  console.log(users);
};

getUsers();

// Завдання:

// Оголосіть інтерфейс User для користувача (перевірте, які властивості користувача містяться у відповіді бекенда).
// Типізуйте функцію fetchUsers.