import React from "react";

export async function generateMetadata({
  params,
}: {
  params: { blogid: string };
}) {
  const { blogid } = params;
  return {
    title: `Blog ${blogid} | Sucoding`,
  };
}

export default function BlogPost({ params }: { params: { blogid: string } }) {
  const { blogid } = params;
  return (
    <div>
      <h1>Blog Post {blogid}</h1>
    </div>
  );
}
