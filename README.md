## String Calculator Kata with Jasmine & Node

#### 1. Make sure you have gulp installed

__If you have not done so yet, install `gulp` globally:__

```sh
$ npm install --global gulp-cli
```

#### 2. Install packages contained in the `package.json`:

```sh
$ npm install
```

## Practicing the String Calculator Kata

#### 1. Start the default gulp process

__This will start a watch on the `.\spec\calculator-spec.js` & `.\implementation\calculator.js` files. Any changes you make to these files will be picked and cause the `jasmine-node` tests to be executed.__

```sh
$ gulp
```

#### 2. Follow the test as listed below.

__Write a test first in the `.\spec\calculator-spec.js` file, watch your test fail, then write the implementation in `.\implementation\calculator.js`. Rinse and repeat.__

#### 3. Stop after 15 minutes. 

__It does not matter how far you are in the kata, stop and start again.__
 
#### 4. Start again by running `gulp refresh`

__This will archive your progress thus far and start your test and implementation files anew.__

```sh
$ gulp refresh
```

## String Calculator Kata from: http://osherove.com/tdd-kata-1/
__This repo is to help people to get started with jasmine and the string kata as described below.__

1. Create a simple String calculator with a method int Add(string numbers)
  1. The method can take 0, 1 or 2 numbers, and will return their sum (for an empty string it will return 0) for example `“”` or `“1”` or `“1,2”`
  2. Start with the simplest test case of an empty string and move to 1 and two numbers
  3. Remember to solve things as simply as possible so that you force yourself to write tests you did not think about
  4. Remember to refactor after each passing test
2. Allow the Add method to handle an unknown amount of numbers
3. Allow the Add method to handle new lines between numbers (instead of commas).
  1. the following input is ok:  `“1\n2,3”`  (will equal 6)
  2. the following input is NOT ok:  `“1,\n”` (not need to prove it - just clarifying)
4. Support different delimiters
  1. to change a delimiter, the beginning of the string will contain a separate line that looks like this:   `//[delimiter]\n[numbers…]` for example `“//;\n1;2”` should return three where the default delimiter is `“;”` .
  2. the first line is optional. all existing scenarios should still be supported
5. Calling Add with a negative number will throw an exception `“negatives not allowed”` - and the negative that was passed.if there are multiple negatives, show all of them in the exception message

__Stop here if you are a beginner. Continue if you can finish the steps so far in less than 30 minutes.__

6. Numbers bigger than 1000 should be ignored, so adding `2 + 1001  = 2`
7. Delimiters can be of any length with the following format:  `//[delimiter]\n` for example: `//[***]\n1***2***3` should return 6
8. Allow multiple delimiters like this:  `//[delim1][delim2]\n` for example `//[*][%]\n1*2%3` should return 6.
9. make sure you can also handle multiple delimiters with length longer than one char