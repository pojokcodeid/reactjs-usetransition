import { useState, useTransition } from "react";

const MyForm = () => {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const list_Size = 20000;

  function handleChange(e) {
    setInput(e.target.value);
    startTransition(() => {
      const l = [];
      for (let i = 0; i < list_Size; i++) {
        l.push(e.target.value);
      }
      setList(l);
    });
  }
  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
      {isPending
        ? "Loading ..."
        : list.map((i, index) => {
            return <div key={index}>{i}</div>;
          })}
    </div>
  );
};

export default MyForm;
