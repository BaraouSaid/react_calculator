import React from 'react';
import { useState, useEffect } from 'react';

const Display = ({ input, output }) => {
  <div className="output">
    <span className="result">{output}</span>
    <span id="display" className="input">
      {input}
    </span>
  </div>;
};

const App = () => {
  const [input, setInput] = useState('0');
  const [output, setOutput] = useState('');
  const [calcData, setCalcData] = useState('');

  const handleInput = () => {};

  const handleOutput = () => {};

  useEffect(() => {
    handleOutput();
  });

  return (
    <React.Fragment>
      <div className="flex bg-slate-300 min-h-screen">
        <div className="p-5 mx-auto rounded-lg bg-slate-700 w-96">
          <div className="flex items-center w-full h-16 pl-2 space-x-2 text-2xl font-bold text-white header">
            <p> CALCULATOR </p>
          </div>

          <div className="w-full h-20 py-3 screen bg-black text-3xl text-right p-3">
            <Display input={input} output={output} />
          </div>

          <div className="grid grid-cols-4 gap-2 mt-10 font-semibold">
            <button
              id="clear"
              value="AC"
              className="h-20 col-span-2 text-2xl text-black bg-red-500 w-30 rounded-3xl hover:border-solid hover:border-2"
            >
              AC
            </button>
            <button
              id="divide"
              value="/"
              className="w-20 h-20 text-2xl text-black bg-slate-300 rounded-3xl"
            >
              /
            </button>
            <button
              id="multiply"
              value="X"
              className="w-20 h-20 text-2xl text-black bg-slate-300 rounded-3xl"
            >
              X
            </button>
            <button
              id="seven"
              value="7"
              className="w-20 h-20 text-2xl text-black bg-slate-300 rounded-3xl"
            >
              7
            </button>
            <button
              id="eight"
              value="8"
              className="w-20 h-20 text-2xl text-black bg-slate-300 rounded-3xl"
            >
              8
            </button>
            <button
              id="nine"
              value="9"
              className="w-20 h-20 text-2xl text-black bg-slate-300 rounded-3xl"
            >
              9
            </button>
            <button
              id="substract"
              value="-"
              className="w-20 h-20 text-2xl text-black bg-slate-300 rounded-3xl"
            >
              ‑
            </button>
            <button
              id="four"
              value="4"
              className="w-20 h-20 text-2xl text-black bg-slate-300 rounded-3xl"
            >
              4
            </button>
            <button
              id="five"
              value="5"
              className="w-20 h-20 text-2xl text-black bg-slate-300 rounded-3xl"
            >
              5
            </button>
            <button
              id="six"
              value="6"
              className="w-20 h-20 text-2xl text-black bg-slate-300 rounded-3xl"
            >
              6
            </button>
            <button
              id="add"
              value="+"
              className="w-20 h-20 text-2xl text-black bg-slate-300 rounded-3xl"
            >
              +
            </button>
            <button
              id="one"
              value="1"
              className="w-20 h-20 text-2xl text-black bg-slate-300 rounded-3xl"
            >
              1
            </button>
            <button
              id="two"
              value="2"
              className="w-20 h-20 text-2xl text-black bg-slate-300 rounded-3xl"
            >
              2
            </button>
            <button
              id="three"
              value="3"
              className="w-20 h-20 text-2xl text-black bg-slate-300 rounded-3xl"
            >
              3
            </button>
            <button
              id="equals"
              value="="
              className="w-20 row-span-2 text-2xl text-black h-30 bg-sky-700 rounded-3xl"
            >
              =
            </button>
            <button
              id="zero"
              value="0"
              className="h-20 col-span-2 text-2xl text-black w-30 bg-slate-300 rounded-3xl"
            >
              0
            </button>
            <button
              id="decimal"
              value="."
              className="w-20 h-20 text-2xl text-black bg-slate-300 rounded-3xl"
            >
              .
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
