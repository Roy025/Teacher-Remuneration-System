import React from "react";
import "./FAQ.css";
import Questions from "./Questions";
import { QuestionSet } from "./QuestionList"

function FAQ() {
  return (
    <div>
      <div className="Main-container">
        <h1 className="Headline">সাধারণ জিজ্ঞাসাসমূহ</h1>
        <p className="Top-text">সমস্যার সম্মুখীন হলে উত্তরণ পাবেন এখানেই!</p>
        <form action="" className="Search-bar">
          <input
            type="text"
            placeholder="প্রশ্ন খোঁজ করুন ..."
            name="Search-bar"
          />
          <button type="submit">
            <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
          {QuestionSet.map((item, index) => {
            return(
              <Questions key={index} {...item}/>
            )
          })}
      </div>
    </div>
  );
}

export default FAQ;
