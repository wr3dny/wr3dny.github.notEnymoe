const Array1 = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Mike", age: 22 },
  { id: 3, name: "Bob", age: 28 },
  { id: 4, name: "Tom", age: 22 },
  { id: 5, name: "Sam", age: 35 },
  { id: 6, name: "Lulu", age: 22 },
];

const Array2 = ["22"];

const filteredArray = Array1.filter((item) =>
  Array2.includes(item.age.toString())
);

const matchingIds = Array1.filter((item) =>
  Array2.includes(item.age.toString())
).map((item) => item.name);

const notMatchingAge = Array1.filter(
  (item) => !Array2.includes(item.age.toString())
);

const notMatchingAgeIds = notMatchingAge.map((item) => item.id);

// select row
// selected row status
// rows without selected row status => disabled

console.log("not matching id", notMatchingAgeIds);

console.log(filteredArray);
console.log("not matching", notMatchingAge);

console.log(`array1: ${Array1} array2: ${Array2}`);
console.log(`matchingIds: ${matchingIds}`);

export const TestBlok = () => {
  return (
    <div>
      <p>Array</p>
    </div>
  );
};

// const matchingIds = Array1.filter((item) => Array2.includes(item.name)).map(
//   (item) => item.name
// );
