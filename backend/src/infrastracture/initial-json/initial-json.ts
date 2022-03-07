export = {
  quest: [{
    name: "initial",
    id: "initial",
    graph: [
      { id: '0', name: "firstTask", children: ['1'] },
      { id: '1', name: "secondTask", children: ['2', '3'] },
      { id: '2', name: "thirdTask", children: [] },
      { id: '3', name: "fourthTask", children: ['4'] },
      { id: '4', name: "fifthTask", children: [] },
    ],
  },
  ],
}