/*  HigherOrderAndCallBack  */

// CHALLENGE 1

const addOne = (arr) => {
  let addOneArray = [];
  arr.forEach((element) => {
    addOneArray.push(++element);
  });
  return addOneArray;
};

addOne([1, 2, 3]); // => [2,3,4]

// CHALLENGE 2

const addExclamation = (arr) => {
  let addExclamationArray = [];
  arr.forEach((element) => {
    addExclamationArray.push(element + "!");
  });
  return addExclamationArray;
};

addExclamation(["one", "two", "three"]); // => ["one!","two!","three!"]

// CHALLENGE 3

const addOneByMap = (arr) => {
  return arr.map((element) => {
    return ++element;
  });
};

addOneByMap([1, 2, 3]); // => [2,3,4]

// CHALLENGE 4

const addQuestion = (arr) => {
  return arr.map((element) => {
    return element + "?";
  });
};

addQuestion(["one", "two", "three"]); // => ["one?","two?","three?"]

// CHALLENGE 5

const forLoopTwoToThe = (arr) => {
  return arr.map((element) => {
    return Math.pow(2, element);
  });
};

forLoopTwoToThe([1, 2, 3]); // => [2,4,8]

// CHALLENGE 6

const typeNum = (arr) => {
  return arr.filter((element) => {
    return typeof element == "number";
  });
};

typeNum([1, "bob", 3]); // => [1,3]

// CHALLENGE 7

const containsAnd = (arr) => {
  return arr.filter((element) => {
    return element.includes("and");
  });
};

containsAnd(["panda", "ran", "and"]); // => ['panda', 'and']

// CHALLENGE 8

const oddValues = (arr) => {
  return arr.filter((element) => {
    return element % 2 !== 0;
  });
};

oddValues([1, 2, 3]); // => [1,3]

// CHALLENGE 9

const addValues = (arr) => {
  return arr.reduce((acc, element) => {
    acc += element;
    return acc;
  }, 0);
};

addValues([1, 2, 3, 4]); // => 10

// CHALLENGE 10

const countNumberOfElements = (arr) => {
  return arr.reduce((acc) => {
    acc += 1;
    return acc;
  }, 0);
};

countNumberOfElements([1, 2, 3, 4, 5]); // => 5

// EXTRA //

// CHALLENGE 1

const items = [
  {
    item: "switch",
    purchasePrice: 399,
  },
  {
    item: "nike",
    purchasePrice: 150,
  },
];

const addPurchases = (arr) => {
  return arr.reduce((acc, element) => {
    acc += element.purchasePrice;
    return acc;
  }, 0);
};

addPurchases(items); // => 549

// CHALLENGE 2

const sortNumbers = (arr) => {
  return arr.sort((a, b) => {
    return a - b;
  });
};

sortNumbers([1, 45, 2, 10, 0]); // => [0, 1, 2, 10, 45]

// CHALLENGE 3

const sortBackwards = (arr) => {
  return arr.sort((a, b) => {
    return b - a;
  });
};

sortBackwards([1, 45, 2, 10, 0]); // => [45, 10, 2, 1, 0]

/*  Objects  */

//  CHALLENGE 1

const checkValues = (obj, value) => {
  return Object.values(obj).indexOf(value) > -1;
};

checkValues({ name: "ahmed", age: 15 }, 15); // => true

//  CHALLENGE 2

const courseInfo = {
  name: "Code 301",
  duration: { dayTrack: "4 weeks", eveningTrack: "8 weeks" },
  topics: [
    "SMACSS",
    "APIs",
    "NodeJS",
    "SQL",
    "jQuery",
    "functional programming",
  ],
  finalExam: true,
};

const getCourseKeys = (obj) => {
  return Object.keys(obj);
};

getCourseKeys(courseInfo); // => ['name', 'duration', 'topics', 'finalExam']

//  CHALLENGE 3

const hrData = {
  "Grace Hopper": "222-303-5938",
  "Ada Lovelace": "222-349-9842",
  "Alan Turing": "222-853-5933",
};

const updateNumbers = (obj) => {
  let dataArray = [];
  for (const key in obj) {
    dataArray.push(`${key}: ${hrData[key]}`);
  }
  return dataArray;
};

updateNumbers(hrData); //  => [ 'Grace Hopper: 222-303-5938','Ada Lovelace: 222-349-9842','Alan Turing: 222-853-5933' ]

//  CHALLENGE 4

const PassedOrFailed = function (studentGrades) {
  for (const subject in studentGrades) {
    if (studentGrades[subject]["grade"] / studentGrades[subject]["total"] < 0.5) {
      return "The student have failed";
    }
  }
  return "The student have passed";
};

const studentOne = {
  math: { grade: 70, total: 120 },
  english: { grade: 80, total: 100 },
  art: { grade: 90, total: 100 },
};

const studentTwo = {
  math: { grade: 59, total: 120 },
  english: { grade: 80, total: 100 },
  art: { grade: 90, total: 100 },
};

PassedOrFailed(studentOne); // =>  "The student have passed"
PassedOrFailed(studentTwo); // =>  "The student have failed"

//  CHALLENGE 5

const totalCharacters = (arr) => {
  let totalChar = 0;
  arr.forEach((element) => {
    totalChar += element.length;
  });
  return totalChar;
};

totalCharacters(["abc", "yz"]); // => 5

//  CHALLENGE 6

const houseSize = (arr) => {
  let sizes = [];
  for (let i = 0; i < arr.length; i += 2) {
    sizes.push({ house: arr[i], members: arr[i + 1] });
  }
  return sizes;
};

houseSize(["Stark", 7, "Arryn", 3]); // => [{ house: 'Stark', members: 7 }, { house: 'Arryn', members: 3 }]

//  CHALLENGE 7

const uniqueDogs = {
  max: { breed: "Labrador Retriever", color: "blond" },
  rex: { breed: "German Shepherd", color: "black and brown" },
  lucy: { breed: "Bulldog", color: "white" },
  lucifer: { breed: "Chihuahua", color: "brown" },
};

const createDog = function (name, dogBreed, furColor) {
  for (const dogName in uniqueDogs) {
    if (dogName === name) {
      return "The dog isn't unique enough :(";
    }
  }
  uniqueDogs[name] = { breed: dogBreed, color: furColor };
  return "Added the dog successfully";
};

createDog("luna", "Husky", "black and white"); // => "Added the dog successfully"
createDog("rex", "Golden Retriever", "blond"); // => "The dog isn't unique enough :("
