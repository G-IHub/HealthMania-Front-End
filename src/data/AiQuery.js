// export const Query = [
//   {
//     Query1: { id: 1, Question: "Gender ?", Answer1: "Male", Answer2: "Female" },
//     Query2: { id: 2, Question: "How many Hours do you Sleep ?" },
//     Query3: { id: 3 },
//   },
// ];

export const Query = [
  {
    id: 0,
    question: "Gender ?",
    option: ["Male", "Female"],
    type: "option",
  },
  {
    id: 1,
    question: "How old are you ?",
    unit: "year old",
    type: "input",
  },

  {
    id: 2,
    question: "How many Hours do you Sleep ?",
    unit: "hours",
    type: "input",
  },
  {
    id: 3,
    question: "What is your Occupation ?",
    type: "input",
  },
  {
    id: 4,
    question: "What is your Weight ?",
    type: "input",
    unit: "kg",
  },
  {
    id: 5,
    question: "What is your Height ?",
    type: "input",
    unit: "feet",
  },
  {
    id: 6,
    question: "What is your Systolic BP ?",
    type: "input",
    unit: "mmHg",
  },
  {
    id: 7,
    question: "What is your Diastolic BP ?",
    type: "input",
    unit: "mmHg",
  },
];
