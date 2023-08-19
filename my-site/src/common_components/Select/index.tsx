const whatToDo = () => {
  if (1 === 1) {
    alert("come in");
  } else {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  }
};

export const Select = () => {
  <select onChange={whatToDo}>
    <option value="1">whana come in</option>
    <option value="2">skip and exit</option>
  </select>;
};
