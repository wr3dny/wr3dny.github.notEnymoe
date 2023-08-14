const whatToDo = () => {
  if (1 === 1) {
    return "come in";
  } else {
    return "skip and exit";
  }
};

export const Select = () => {
  <select onChange={whatToDo}>
    <option value="1">whana come in</option>
    <option value="2">skip and exit</option>
  </select>;
};
