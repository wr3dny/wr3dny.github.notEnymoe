const handleClick = (msg: string) => {
  alert(msg);
};

export const Button = (msg: any) => {
  return <button onClick={() => handleClick(msg)}>Click me</button>;
};
