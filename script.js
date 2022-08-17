const readlineSync = require(`readline-sync`);
const chalk = require(`chalk`);

//Welcome Message

const userName = readlineSync.question(
  chalk.yellowBright.bold(`Please enter your user name -> `)
);

const validation = readlineSync.keyInSelect(
  [chalk.greenBright(`Yes, try me.`), chalk.red(`No, I am dumb.`)],
  chalk.greenBright.bold(`Welcome ${userName}! Do you think you are smart?`),
  { cancel: false }
);

//Global Variables

let diamonds = 0;

const highScore = 9;

const topPlayer = `Goblin`;

const leaderBoard = [
  {
    name: `Goblin`,
    diamonds: 9,
  },

  {
    name: `Hulk`,
    diamonds: 7,
  },

  {
    name: `Oswald`,
    diamonds: 6,
  },
];

//function

const play = function (question, options, answer) {
  const userAnswer = readlineSync.keyInSelect(options, question, {
    cancel: false,
  });

  if (userAnswer == answer) {
    console.log(
      chalk.greenBright.bold(`
Correct! You deserve a diamond for your smartness!`) +
        chalk.magenta.bold(`
-----
Total Diamonds: ${(diamonds = diamonds + 1)}`)
    );
    console.log(
      chalk.white.bold(`
==========
`)
    );
  } else {
    console.log(
      chalk.red.bold(`
Incorrect! Try eating almonds every day. The almonds cost you a diamond.`) +
        chalk.yellowBright.bold(`
-----
Total Diamonds: ${(diamonds = diamonds - 1)}`)
    );
    console.log(
      chalk.white.bold(`
==========
`)
    );
  }
};

//Questions

const qNa = [
  {
    question: `Jimmy's father has three sons- Paul I and Paul II. Can you guess the name of the third son? `,
    options: [`Paul III`, `Jerin`, `Jimmy`, `None`],
    answer: 2,
  },

  {
    question: `You're 4th place right now in a race. What place will you be in when you pass the person in 3rd place?`,
    options: [`1st`, `2nd`, `3rd`, `None of the above`],
    answer: 2,
  },

  {
    question: `How many 0.5cm slices can you cut from a bread that is 25cm long`,
    options: [`25`, `75`, `100`, `50`],
    answer: 3,
  },

  {
    question: `The answer is really big.`,
    options: [`THE ANSWER`, `really big`, `Your ego`, `Data insufficient`],
    answer: 0,
  },
  {
    question: `Divide 30 by half and add ten. `,
    options: [
      `25`,
      `40.5`,
      `70`,
      `I know this is a trick question, so NONE. Ha!`,
    ],
    answer: 2,
  },

  {
    question: `There are two clocks of different colors: The green clock is broken and doesn't run at all, but the yellow clock loses one second every 24 hours. Which clock is more accurate? `,
    options: [`The green clock`, `The yellow clock`, `both`, `neither`],
    answer: 0,
  },

  {
    question: `Just try your luck with this one.`,
    options: [
      `I am correct.`,
      `No I am correct.`,
      `They are lying! Number 4 is correct!`,
      `NO, I am not correct!`,
    ],
    answer: 3,
  },

  {
    question: `Math? :)
    A grocer sells 100 kg of jaggery partly at 10% profit and partly at 20% profit, gaining 12% on his outlay. How much does he sell at 10% profit ?`,
    options: [`80 Kg`, `85 Kg`, `70 Kg`, `Just take a diamond from me`],
    answer: 0,
  },
  {
    question: `Roman Numerals? :)
    What number is this? XLII`,
    options: [`92`, `42`, `52`, `Take another diamond, please`],
    answer: 1,
  },

  {
    question: `How many letters are in the alphabet?`,
    options: [`26`, `11`, `22`, `25`],
    answer: 1,
  },
];

//Validation Check

if (validation == 0) {
  console.log(
    chalk.gray.bold(`
==========
`)
  );
  console.log(chalk.bold(`Impressive! Let's see how smart you are ;)`));

  console.log(
    chalk.gray.bold(`
==========
`)
  );

  //loop

  for (i = 0; i < qNa.length; i++) {
    play(chalk.cyanBright(qNa[i].question), qNa[i].options, qNa[i].answer);
  }

  //conclusion

  if (diamonds < 0) {
    console.log(
      chalk.white.bold(`
==========
`)
    );
    console.log(
      chalk.red(
        `The game has finished with you buried under the debt of ${chalk.bold(
          diamonds
        )} diamonds! Maybe go back to kindergarten?`
      )
    );

    console.log(
      chalk.white.bold(`
==========
`)
    );
  } else if (diamonds == 0) {
    console.log(
      chalk.white.bold(`
==========
`)
    );
    console.log(
      chalk.red(
        `The game has finished and you are left with ${chalk.bold(
          diamonds
        )} diamonds. Atleast you can eat those almonds now! (Go buy some for real, you need them.)`
      )
    );

    console.log(
      chalk.white.bold(`
==========
`)
    );
  } else if (diamonds > 0 && diamonds < 5) {
    console.log(
      chalk.white.bold(`
==========
`)
    );
    console.log(
      chalk.cyanBright(
        `The game has finished and you are left with ${chalk.bold(
          diamonds
        )} diamonds. Maybe play something that require less thinking.`
      )
    );

    console.log(
      chalk.white.bold(`
==========
`)
    );
  } else if (diamonds == 5 || diamonds == 6) {
    console.log(
      chalk.white.bold(`
==========
`)
    );
    console.log(
      chalk.blue(
        `The game has finished and you are left with ${chalk.bold(
          diamonds
        )} diamonds. You are pretty smart, you should consider playing more games built for smarties like you ;)`
      )
    );

    console.log(
      chalk.white.bold(`
==========
`)
    );
  } else {
    console.log(
      chalk.white.bold(`
==========
`)
    );
    console.log(
      chalk.greenBright(
        `The game has finished and you are left with ${chalk.bold(
          diamonds
        )} diamonds. You are REALLY SMART. You should be sitting with the big league!`
      )
    );

    console.log(
      chalk.white.bold(`
==========
`)
    );
  }

  //High Score

  if (diamonds < highScore) {
    console.log(
      chalk.magentaBright(
        `You need ${chalk.bold(
          highScore - diamonds
        )} more diamonds to beat the current highscore. Send me a screen shot of your score if you want to be in the leaderboard :)`
      )
    );

    console.log(
      chalk.white.bold(`
==========
`)
    );
  } else if (diamonds == highScore) {
    console.log(
      chalk.magenta.bold(
        `You match the highscore! Send me a screen shot and I will add your name and score in the leaderboard ;)`
      )
    );

    console.log(
      chalk.white.bold(`
==========
`)
    );
  } else {
    console.log(
      chalk.magentaBright.bold(
        `Supercalifragilisticexpialidocious! You beat the highscore! Send me a screen shot and I will add your name and score in the leaderboard ;)`
      )
    );

    console.log(
      chalk.white.bold(`
==========
`)
    );
  }

  //Top PLayer

  console.log(
    chalk.white.bold(`
==========
`)
  );

  console.log(
    chalk.black.bold.bgGreenBright(
      `The top player is ${topPlayer} with ${highScore} diamonds!`
    )
  );

  console.log(
    chalk.white.bold(`
==========
`)
  );

  //Leaderboard

  console.log(chalk.bold(`Leaderboard:`));
  console.table(leaderBoard);

  console.log(
    chalk.gray.bold(`
==========
`)
  );
} else {
  console.log(
    chalk.gray.bold(`
==========
`)
  );
  console.log(
    chalk.red.bold(`You should leave this game then, you can't sit with us!`)
  );
  console.log(
    chalk.gray.bold(`
==========
`)
  );
  console.log(`You can feel jealous by looking at the leader board though :)`);
  console.table(leaderBoard);
}
console.log(
  chalk.gray.bold(`
==========
`)
);
