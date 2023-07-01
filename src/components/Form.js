import React, { useState, useEffect } from "react";

const Form = () => {
  const [reply, setReply] = useState(null);
  const [question, setQuestion] = useState("");

  const fetchReply = async () => {
    try {
      const response = await fetch("/reply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });
      const data = await response.json();
      setReply(data.reply);
      console.log(data);
    } catch (error) {
      console.error("Error fetching reply:", error);
    }
  };

  const handleInputChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchReply();
  };

  return (
    <div className="bg-black text-white flex flex-col items-center justify-center py-10">
      <h3 className="text-3xl">Start Chatting Now !!</h3>

      <form className="w-full max-w-md mt-4" onSubmit={handleSubmit}>
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Write your question here"
            aria-label="Question"
            value={question}
            onChange={handleInputChange}
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Ask a Question
          </button>
        </div>
      </form>

      {reply && <h1>{reply}</h1>}
    </div>
  );
};

export default Form;
