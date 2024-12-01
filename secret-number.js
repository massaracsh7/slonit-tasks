const guessSecretNumber = () => {
  const secretNumber = Math.floor(Math.random() * 100 + 1);
  let attemps = 0;
  let result = false;
  let min = 1;
  let max = 100;
  const middleNumber = (minNum, maxNum) => Math.round((maxNum + minNum) / 2);
  console.log(`Компьютер 1 загадал число: ${secretNumber}\n`);
  
  while (!result) {
    attemps++;
    let num = middleNumber(min, max);
    console.log(`Компьютер 2: Пробую число ${num}\n`)
    if (num === secretNumber) {
      console.log(`Компьютер 1: Угадал!\n`);
      console.log(`Всего попыток ${attemps}`);
      result = true;
    }
    else if (
      num > secretNumber
    ) {
      console.log(`Компьютер 1: Меньше.\n`);
      max = num - 1;
      num = middleNumber(min, max);
    }
    else {
      console.log(`Компьютер 1: Больше.\n`);
      min = num + 1;
      num = middleNumber(min, max);
    }
  }

}

guessSecretNumber();
