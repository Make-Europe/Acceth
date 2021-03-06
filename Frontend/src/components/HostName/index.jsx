import React from "react";
import "./HostName.css";

function HostName(props) {
  const { inputPlaceholder, className, childToParent, currentValue , fieldType} = props;
  if(className === "price"){
    return(
    <div className={`host-name border-1px-dove-grey ${className || ""}`}>
        <input
          className="t-name_-placeholder montserrat-medium-tower-gray-30px"
          name="hostname_placeholder1"
          placeholder="No Price In Beta"
          type={fieldType}
          value={currentValue.childdata != 0 ? 0 : currentValue.childdata}
          onInput={e => childToParent(e.target.value)}
          required
        />
      </div>
    )
  }
  else if(currentValue === ''){
    return (
      <div className={`host-name border-1px-dove-red ${className || ""}`}>
        <input
          className="t-name_-placeholder montserrat-medium-tower-gray-30px"
          name="hostname_placeholder1"
          placeholder={inputPlaceholder}
          type={fieldType}
          value={currentValue.childdata ? currentValue.childdata : ''}
          onInput={e => childToParent(e.target.value)}
          required
        />
      </div>
    );
  }
  else{
    return (
      <div className={`host-name border-1px-dove-grey ${className || ""}`}>
        <input
          className="t-name_-placeholder montserrat-medium-tower-gray-30px"
          name="hostname_placeholder1"
          placeholder={inputPlaceholder}
          type={fieldType}
          value={currentValue.childdata ? currentValue.childdata : ''}
          onInput={e => childToParent(e.target.value)}
          required
        />
      </div>
    );
  }
  }
  

export default HostName;
