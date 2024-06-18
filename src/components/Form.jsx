import React from "react";
import { useState } from "react";

export const Form = () => {
  const [form, setForm] = useState("A");
  const [phoneNumber, setPhoneNumber] = useState()
  const [name, setName] = useState("")

  return (
    <div className="bg-[#E2FCEF] w-3/5 h-3/5 mx-auto py-8 rounded">
      <h2 className="flex justify-center text-4xl my-6">FORM {form}</h2>

      <div className="flex flex-col w-4/5 h-2/5 m-auto gap-4 mt-12">
        <input
          className="h-12 px-4 rounded border border-[#5C164E]"
          placeholder="Name"
        ></input>


        <input
          className="h-12 px-4 rounded border border-[#5C164E]"
          placeholder="Phone Number"
        ></input>
      </div>

      <div className="flex justify-around ">
        <button
          className="bg-[#944484] hover:bg-[#5C164E] text-white font-bold py-2 px-4 rounded"
          onClick={() => setForm("A")}
        >
          Form A
        </button>
        <button
          className="bg-[#944484] hover:bg-[#5C164E] text-white font-bold py-2 px-4 rounded"
          onClick={() => setForm("B")}
        >
          Form B
        </button>
      </div>
    </div>
  );
};
