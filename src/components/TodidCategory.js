import React from "react";

export default function TodidCategory(props) {
  if (props.todiderations === 5) {
    return (
      <div style={{ marginTop: "20px" }}>
        Things I did more than five times:
      </div>
    );
  } else if (props.todiderations === 2) {
    return (
      <div style={{ marginTop: "20px" }}>Things I did at least twice:</div>
    );
  }
  return <div style={{ marginTop: "20px" }}>Things I did once:</div>;
}
