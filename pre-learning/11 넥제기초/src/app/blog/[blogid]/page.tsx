import React from "react";

export function generateMetadata({ params }) {
  const { id } = params;
  return {
    title: `Blog ${id} | Sucoding`,
  };
}

export default function BlogPost({ params }) {
  const { id } = params;
  return (
    <div>
      <h1>Blog Post {id}</h1>
    </div>
  );
}
