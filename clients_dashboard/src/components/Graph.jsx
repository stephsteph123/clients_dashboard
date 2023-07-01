// Graph.js
import React from "react";
import useFetchProjects from "../hooks/useFetchProjects";

function Graph() {
  const { count, increment, decrement } = useFetchProjects();
  return (count)
}

export default Graph;