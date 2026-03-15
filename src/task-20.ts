// Задача 20

// Функція fetchPosts повинна отримати список постів з API за допомогою бібліотеки axios.

import axios from "axios";



// Завдання:

// Оголосіть інтерфейс Post для поста (перевірте, які властивості користувача містяться у відповіді бекенда).
// Типізуйте функцію fetchPosts, вказавши, що вона повертає проміс, який містить масив об'єктів типу Post.
// Оголосіть функцію logThreePosts, яка виведе в консоль дані перших 3 постів, виводячи їхні title та body.

interface Post{
    body: string;
id: number;
title: string;
userId: number;
}

const fetchPosts = async ():Promise<Post[]> => {
  const response = await axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
  return response.data;
  
};

const logThreePosts = async () => {
    const allPosts = await fetchPosts();
    const threePosts = allPosts.slice(0, 3);
    threePosts.forEach(({title, body}) => console.log({title, body})
    )
}

logThreePosts();