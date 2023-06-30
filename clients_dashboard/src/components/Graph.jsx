// Graph.js
import React from "react";
import useFetchProjects from "../functions/hooks/useFetchProjects";

function Graph() {
  const { count, increment, decrement } = useFetchProjects();
  return ((console.log("hello")))
}

export default Graph;