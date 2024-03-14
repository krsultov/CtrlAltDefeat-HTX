import Image from "next/image";
import Link from "next/link";
import LinkButton from "./(components)/LinkButton";
import ContentWrapper from "./(components)/ContentWrapper";

export default function Home() {
  return (
    <div className="bg-[url('../public/image.png')] bg-fixed flex bg-center h-screen bg-no-repeat bg-cover">
      <ContentWrapper>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-7xl font-">Name</h1>
        <p>Text entrance</p>
      </div>
      <div className="flex align-center justify-center gap-5">
        <LinkButton link="/login" text="Log in" color="bg-primary" colorHover="hover:bg-primaryDark"/>
        <LinkButton link="#signin" text="Sign up" color="bg-secondary" colorHover="hover:bg-secondaryDark"/>
      </div>
      </ContentWrapper>
    </div>
  );
}