import Image from "next/image";
import Link from "next/link";
import LinkButton from "./(components)/LinkButton";
import ContentWrapper from "./(components)/ContentWrapper";

export default function Home() {
    return (
        <div className="relative text-white">
            <section className="py-12 bg-black bg-opacity-25">
                <div className="container mx-auto px-4 py-16">
                    <h1 className="text-4xl font-bold mb-4">Save Our Sea!</h1>
                    <p className="text-lg mb-6">
                        Join the fight to protect our oceans. Report problems, organize events, and make a difference.
                    </p>
                    <button
                        className="bg-primaryDark hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondaryDark text-white font-semibold py-3 px-6 rounded-md">
                        Sign Up
                    </button>
                </div>
            </section>

            <section className="py-12 bg-black bg-opacity-15">
                <div className="container mx-auto px-4 grid gap-20 lg:grid-cols-3">
                    <div className="text-center bg-black bg-opacity-10 rounded-lg border border-gray-400 py-5">
                        <h3 className="text-7xl font-bold mb-2">171</h3>
                        <p>Successful Events</p>
                    </div>
                    <div className="text-center bg-black bg-opacity-10 rounded-lg border border-gray-400 py-5">
                        <h3 className="text-7xl font-bold mb-2">126</h3>
                        <p>Submitted Reports</p>
                    </div>
                    <div className="text-center bg-black bg-opacity-10 rounded-lg border border-gray-400 py-5">
                        <h3 className="text-7xl font-bold mb-2">453</h3>
                        <p>Registered Volunteers</p>
                    </div>
                </div>
                <div className="container mx-auto px-4 py-12">
                    <div className="text-center">
                        <p className="text-xl italic mb-4">"The website made it so easy to report an oil spill. I feel
                            like I made a difference."</p>
                        <p className="font-medium">- Sarah J.</p>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-black bg-opacity-25">
                <div className="container mx-auto px-4 py-16">
                    <h1 className="text-4xl font-bold mb-4">Save Our Sea!</h1>
                    <p className="text-lg mb-6">
                        Join the fight to protect our oceans. Report problems, organize events, and make a difference.
                    </p>
                    <button
                        className="bg-primaryDark hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondaryDark text-white font-semibold py-3 px-6 rounded-md">
                        Sign Up
                    </button>
                </div>
            </section>

        </div>

    );
}