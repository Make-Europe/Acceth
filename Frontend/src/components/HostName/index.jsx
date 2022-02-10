import React from "react";
import "./HostName.css";
import app from "../../App.js"

function HostName(props) {
  const { inputPlaceholder, className, childToParent, currentValue , fieldType} = props;
  
  return (
    <div className={`host-name border-1px-dove-gray ${className || ""}`}>
      <input
        className="t-name_-placeholder montserrat-medium-tower-gray-30px"
        name="hostname_placeholder1"
        placeholder={inputPlaceholder}
        type={fieldType}
        value={currentValue.childdata ? currentValue.childdata : ""}
        onInput={e => childToParent(e.target.value)}
        required
      />
    </div>
  );
}

export default HostName;