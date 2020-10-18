import React from "react";

export default function TodidCategory(props) {
  if (props.iterations === 5) {
    return (
      <div style={{ marginTop: "20px" }}>
        Things I've done more than five times:
      </div>
    );
  } else if (props.iterations === 2) {
    return (
      <div style={{ marginTop: "20px" }}>Things I've done at least twice:</div>
    );
  }
  return <div style={{ marginTop: "20px" }}>Things I've done once:</div>;
}
