const readline = require(`readline`);
const readlineInterface = readline.createInterface(
  process.stdin,
  process.stdout
);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, input => {
      resolve(input);
    });
  });
}

async function nameLength() {
  // your code here
  let firstName = await ask("What is your first name?: ");
  //console.log(firstName);
  let lastName = await ask("What is your last name?: ");
  // remember to use `await`
  console.log(`Hello, ${firstName} ${lastName}!`);
  let combinedLength = firstName.length + lastName.length;
  console.log(`Your name is ${combinedLength} characters long.`)
  readlineInterface.close();
}
nameLength();