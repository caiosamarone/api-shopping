import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sub, sum } from "../store/actions/calculator";
export default function Calculator() {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.calculator);
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  function onChangeA(e) {
    setA(Number(e.target.value));
    console.log(e.target.value);
  }

  function onChangeB(e) {
    setB(Number(e.target.value));
  }

  return (
    <div>
      <input type="text" placeholder="a" onChange={onChangeA} value={a} />
      <input type="text" placeholder="b" onChange={onChangeB} value={b} />

      <button
        onClick={() => {
          dispatch(sum(a, b));
        }}
      >
        somar
      </button>
      <button
        onClick={() => {
          dispatch(sub(a, b));
        }}
      >
        subtrair
      </button>

      <div> {result} </div>
    </div>
  );
}
