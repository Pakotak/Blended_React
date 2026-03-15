// Задача 19

// Функція fetchUser повертає проміс, який через axios отримує одного користувача з API по userId.

// Завдання:

// Оголосіть інтерфейс User для користувача (перевірте, які властивості користувача містяться у відповіді бекенда).
// Типізуйте функцію fetchUser.
import axios from "axios";
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

const fetchUser = async (userId:number | string):Promise<User> => {
  const response = await axios.get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`);
  return response.data;
};

const getUserName = async (id:number | string):Promise<void> => {
  const user = await fetchUser(id);
  console.log(user.name);
};

getUserName(1);