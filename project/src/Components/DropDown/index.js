import React from "react";

//This is passing in the setTopic prop to get a value defined by the onchange.

function DropDown({ setTopic }) {
  return (
    <div>
      <select id="dropDown" onChange={(e) => setTopic(e.target.value)}>
        <option value="">filter by topic</option>
        <option value="Git">Git</option>
        <option value="react">React</option>
        <option value="NodeJS">NodeJS</option>
        <option value="SQL">SQL</option>
        <option value="JavaScript">JavaScript</option>
        <option value="CSS">CSS</option>
      </select>
    </div>
  );
}

export default DropDown;
