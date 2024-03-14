import Link from "next/link";

export default function Home() {
    return (
        <div className="text-white">
            <section className="py-12 bg-black bg-opacity-10">
                <div className="container mx-auto px-4 py-16">
                    <div>
                        <h1 className="text-6xl text-bgSecondary font-bold mb-10">Baywatch</h1>
                        <p className="text-xl sm:text-xl mb-6">
                            <b>Tired of seeing trash in your favorite places? We are too!</b> That's why we created this
                            app
                            – to empower everyday people to take action for a greener planet.</p>
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold text-bgSecondary mb-2">With Baywatch you can:</h1>
                        <ul className="ml-10 list-disc text-lg mb-6">
                            <li>Create reports for polluted areas and other issues</li>
                            <li>Find or create local cleanup events</li>
                            <li>Earn points and level up your volunteer status</li>
                            <li>See your impact with before/after photos</li>
                            <li>Connect with a community of like-minded people</li>
                        </ul>
                    </div>
                    <Link href={"/signup"}>
                        <button
                            className="bg-secondary hover:bg-secondaryDark focus:outline-none focus:ring-0 focus:ring-offset-1 focus:ring-secondaryDark text-black font-semibold py-3 px-6 rounded-md">
                            Sign Up
                        </button>
                    </Link>
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

            <section className="py-12 bg-black bg-opacity-10">
                <div className="container mx-auto px-4 py-16">
                    <h1 className="text-4xl font-bold mb-4">Noticed something?</h1>
                    <p className="text-lg mb-6">
                        You can create a report or create an event to help the environment!
                    </p>
                    <div className="flex space-x-5">
                        <Link href={"/#reports"}>
                            <button
                                className="bg-secondary focus:outline-none focus:ring-0 focus:ring-offset-1 focus:ring-secondaryDark hover:bg-secondaryDark text-black font-semibold py-3 px-6 rounded-md">
                                Create a Report
                            </button>
                        </Link>
                        <Link href={"/signup"}>
                            <button
                                className="bg-secondary focus:outline-none focus:ring-0 focus:ring-offset-1 focus:ring-secondaryDark hover:bg-secondaryDark text-black font-semibold py-3 px-6 rounded-md">
                                Sign Up
                            </button>
                        </Link>
                        <Link href={"/events"}>
                            <button
                                className="bg-secondary focus:outline-none focus:ring-0 focus:ring-offset-1 focus:ring-secondaryDark hover:bg-secondaryDark text-black font-semibold py-3 px-6 rounded-md">
                                View Events
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

        </div>

    );
}