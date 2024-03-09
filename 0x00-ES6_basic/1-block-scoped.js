/* eslinit-disable no-unused-vars */
export default function taskBlock(trueOrFalse) {
  var  task = false;
  var  task2 = true;

  if (trueOrFalse) {
    // eslint
    const task = true;
    // eslint
    const task2 = false;
  }

  return [task, task2];
}
