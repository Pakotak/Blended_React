// Є функція sendDoneStatus:
// function sendDoneStatus(callback) {
//   callback("done");
// }
// Завдання:

// Типізуйте параметр callback, щоб це була функція, яка приймає рядок і повертав void.
type Callback = (string: string) => void;

function sendDoneStatus(callback: Callback) {
  callback("done");
}

sendDoneStatus((string) => console.log(string));