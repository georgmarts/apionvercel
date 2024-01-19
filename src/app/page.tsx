"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  async function getData() {
    const res = await fetch("/api/get");
    const data = await res.json();
    setMessage(data.message);
  }
  useEffect(() => {
    getData();
  }, []);

  return <main>{message}</main>;
}
