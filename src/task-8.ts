// Задача 8

// Завдання:
// 1. Створіть функцію getPermissions, яка приймає параметр role типу Role.
// 2. Функція має повертати масив рядків, які описують права доступу для кожної ролі:
// Admin має права: "create", "read", "update", "delete"
// User має права: "read", "update"
// Guest має лише право: "read"
// 3. Типізуйте параметр і тип повернення функції getPermissions.
// 4. Перевірте, що TypeScript не дозволяє передати в getPermissions значення, якого немає в Role.


enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

function getPermissions(role: Role): string[] {
    switch (role) { 
        case Role.Admin:
            return ["create", "read", "update", "delete"];
        case Role.User:
            return ["read", "update"];
        case Role.Guest:
            return ["read"];
    }
        
}

getPermissions(Role.Admin)
