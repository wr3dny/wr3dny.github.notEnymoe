import "./styles.scss";
import React, { KeyboardEventHandler, ReactHTMLElement, useState } from "react";

export const Container = () => {
  const [message, setMessage] = useState("");

  const messageInput = (event: any) => {
    setMessage(event.target.value);
  };

  const messageKeyDown = (event: KeyboardEventHandler<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setMessage(message);
    }

    setMessage("");
  };

  return (
    <div className="pageContainer">
      <input type="text" onChange={messageInput} onKeyDown={message} />
      <p>{message}</p>
      <p>Container</p>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div></div>
    </div>
  );
};
