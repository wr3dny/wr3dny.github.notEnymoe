// const Array1 = [
//   { id: 1, name: "John", age: 25 },
//   { id: 2, name: "Mike", age: 22 },
//   { id: 3, name: "Bob", age: 28 },
//   { id: 4, name: "Tom", age: 22 },
//   { id: 5, name: "Sam", age: 35 },
//   { id: 6, name: "Lulu", age: 22 },
// ];

const rows = [
  {
    packingUnitId: 312,
    packingUnitNumber: "DC555",
    packingUnitStatus: "IN_DISPOSITION",
    redirectionStatus: null,
  },

  {
    packingUnitId: 48,
    packingUnitNumber: "1111111121",
    packingUnitStatus: "LOADED",
    redirectionStatus: null,
  },
  {
    packingUnitId: 6,
    packingUnitNumber: "1111111126",
    packingUnitStatus: "LOADED",
    redirectionStatus: "REJECTED",
  },
  {
    packingUnitId: 4,
    packingUnitNumber: "1111111171",
    packingUnitStatus: "CREATED",
    redirectionStatus: "REJECTED",
  },
  {
    packingUnitId: 141,
    packingUnitNumber: "1231",
    packingUnitStatus: "CREATED",
    redirectionStatus: null,
  },
  {
    packingUnitId: 49,
    packingUnitNumber: "4",
    packingUnitStatus: "IN_DISPOSITION",
    redirectionStatus: "SENT",
  },
  {
    packingUnitId: 7,
    packingUnitNumber: "1111111130",
    packingUnitStatus: "IN_DISPOSITION",
    redirectionStatus: null,
  },
  {
    packingUnitId: 8,
    packingUnitNumber: "1111111131",
    packingUnitStatus: "IN_DISPOSITION",
    redirectionStatus: null,
  },
  {
    packingUnitId: 9,
    packingUnitNumber: "1111111132",
    packingUnitStatus: "LOADED",
    redirectionStatus: null,
  },
  {
    packingUnitId: 10,
    packingUnitNumber: "1111111133",
    packingUnitStatus: "LOADED",
    redirectionStatus: null,
  },
];
//1
const selectedRow = ["1111111131"];

const toSelect = () => {
  const selectedRowFull = rows.filter((item) =>
    selectedRow.includes(item.packingUnitNumber)
  );
  const status = Object.values(selectedRowFull).map((item) => {
    return item.packingUnitStatus;
  });
  const filteredRows = rows.filter(
    (row) =>
      row.packingUnitStatus === status.toString() &&
      row.redirectionStatus === null
  );
  const rowsToBlock = rows.filter(
    (row) =>
      row.packingUnitStatus !== status.toString() ||
      row.redirectionStatus !== null
  );
  const rowsIdOnly = rowsToBlock.map((item) => item.packingUnitNumber);

  console.log("1. select row", selectedRow);
  console.log("2. find selected row", selectedRowFull);
  console.log("3. status", status.toString());
  console.log("4. rows no to block", filteredRows);
  console.log("5. rows to block", rowsToBlock);
  console.log("6. rows to block Ids", rowsIdOnly);
  return rowsIdOnly;
};

console.log(toSelect());

// //2
// const selectedRowFull = rows.filter((item) =>
//   selectedRow.includes(item.packingUnitNumber)
// );

// //3

// const status = Object.values(selectedRowFull).map((item) => {
//   return item.packingUnitStatus;
// });

// //4

// const filteredRows = rows.filter(
//   (row) =>
//     row.packingUnitStatus === status.toString() &&
//     row.redirectionStatus === null
// );

// //5
// const rowsToBlock = rows.filter(
//   (row) =>
//     row.packingUnitStatus !== status.toString() ||
//     row.redirectionStatus !== null
// );

// //6

// const rowsIdOnly = rowsToBlock.map((item) => item.packingUnitNumber);

// const riwTer = rows.filter((item) =>
//   selectedRow.includes(item.packingUnitNumber)
// );

// const rowsNotMatch = rows.filter(
//   (item) => !rows.includes(item.packingUnitNumber)
// );

// const Array2 = ["22"];

const filteredArray = rows.filter((item) =>
  selectedRow.includes(item.packingUnitStatus)
);

const matchingIds = rows
  .filter((item) => selectedRow.includes(item.packingUnitNumber))
  .map((item) => item.packingUnitNumber);

const nonLoadedElements = rows.filter(
  (row) => row.packingUnitStatus !== "LOADED"
);

const rowsIdOnlyTo = nonLoadedElements.map((item) => item.packingUnitNumber);

// const notMatchingAge = Array1.filter(
//   (item) => !Array2.includes(item.age.toString())
// );

// const notMatchingAgeIds = notMatchingAge.map((item) => item.id);

// select row
// selected row status
// rows without selected row status => disabled

// console.log("not matching id", notMatchingAgeIds);

// console.log(filteredArray);
// console.log("not matching", notMatchingAge);

// console.log(`array1: ${Array1} array2: ${Array2}`);
// console.log(`matchingIds: ${matchingIds}`);

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
