// //creating a new worker

// const worker = new Worker('./generate.js');  //included constructor class - pass in URL to worker script

// document.querySelector('#generate').addEventListener('click', () => { //sending message to worker - generate command and quota #
//     const quota = document.querySelector('#quota').value;

//     worker.postMessage({
//         command: 'generate',
//         quota
//     });
// });

// //listening for worker messages

// worker.addEventListener('message', (message) => {
//     document.querySelector('output').textContent = `Finished generating ${message.data} primes!!`
// });

// //reloadbutton
// document.querySelector("#reload").addEventListener("click", () => {
//     document.querySelector("#user-input").value = 'Try yping in here immediately after pressing "Generate primes"';
//     document.location.reload();
//   });

// Create a new worker, giving it the code in "generate.js"
const worker = new Worker("./generate.js");

// When the user clicks "Generate primes", send a message to the worker.
// The message command is "generate", and the message also contains "quota",
// which is the number of primes to generate.
document.querySelector("#generate").addEventListener("click", () => {
  const quota = document.querySelector("#quota").value;
  worker.postMessage({
    command: "generate",
    quota,
  });
});

// When the worker sends a message back to the main thread,
// update the output box with a message for the user, including the number of
// primes that were generated, taken from the message data.
worker.addEventListener("message", (message) => {
  document.querySelector(
    "#output"
  ).textContent = `Finished generating ${message.data} primes!`;
});

document.querySelector("#reload").addEventListener("click", () => {
  document.querySelector("#user-input").value =
    'Try typing in here immediately after pressing "Generate primes"';
  document.location.reload();
});
