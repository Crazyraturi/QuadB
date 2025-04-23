import React, { useState } from "react";

const App = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [feedback, setfeedback] = useState("");
  const [rating, setrating] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, feedback, rating });
    setSubmitted(true);
  };

  const handleReset = () => {
    setemail("");
    setname("");
    setfeedback("");
    setrating("");
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-orange-200 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-md space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-amber-700">
          Feedback Form
        </h2>
        <p className="text-sm text-gray-500 text-center">
          We'd love to hear your thoughts!
        </p>

        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="font-medium mb-1">Name</label>
          <input
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
            type="text"
            name="name"
            required
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="font-medium mb-1">Email</label>
          <input
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
            type="email"
            name="email"
            required
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>

        {/* Feedback */}
        <div className="flex flex-col">
          <label htmlFor="feedback" className="font-medium mb-1">Feedback</label>
          <textarea
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
            name="feedback"
            rows={4}
            required
            value={feedback}
            onChange={(e) => setfeedback(e.target.value)}
          />
        </div>

        {/* Rating */}
        <div className="flex flex-col">
          <label className="font-medium mb-1">Rating</label>
          <div className="flex gap-3">
            {[1, 2, 3, 4, 5].map((num) => (
              <label key={num} className="flex items-center gap-1">
                <input
                  type="radio"
                  name="rating"
                  value={num}
                  checked={rating === num.toString()}
                  onChange={(e) => setrating(e.target.value)}
                />
                {num}
              </label>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-amber-500 text-white px-4 py-2 rounded-xl hover:bg-amber-600 transition"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="border border-amber-500 text-amber-600 px-4 py-2 rounded-xl hover:bg-amber-100 transition"
          >
            Reset
          </button>
        </div>

        {/* Thank You Message */}
        {submitted && (
          <p className="text-green-600 text-sm text-center pt-2">
            ✅ Thank you for your feedback!
          </p>
        )}
      </form>
    </div>
  );
};

export default App;
