"use client"

import Image from "next/image";
import Test_One from "./components/test_one/Test_One";
import Test_two from "./components/test_two/Test_two";
// import { Button } from "@/components/ui/button"

export default function Home() {
  return (
  <div>
  <Test_One/>
  <Test_two/>
  </div>
  );
}
