import Image from "next/image";
import Link from "next/link";
import LinkButton from "./(components)/LinkButton";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-7xl font-">Name</h1>
        <p>Text entrance</p>
      </div>
      <div className="flex align-center justify-center gap-5">
        <LinkButton link="#login" text="Log in"/>
        <LinkButton link="#signin" text="Sign in"/>
      </div>
    </>
  );
}