import React from "react";
import { useRouter } from "next/router";

export default function Post() {
  const router = useRouter();

  console.log("router.query", router.query);

  return <div>Post</div>;
}
