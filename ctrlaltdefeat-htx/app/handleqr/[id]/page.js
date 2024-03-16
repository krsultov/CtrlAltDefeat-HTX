"use client"
import {useSelector} from "react-redux";
import {useRouter} from "next/navigation";

export default function QrCodePage({params}) {
    const router = useRouter()

    const {id} = params
    console.log(id)

    const addPoints = async (eventId, amount) => {
        try {
            const response = await fetch(`/api/events/attendance/${eventId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({userId: currentUser.userContent._id})
            });

            if (response.ok) {
                // Success! Update frontend state if needed
                console.log('User added to attendance');
            } else {
                console.error('Error adding to attendance:', response.statusText);
            }
        } catch (error) {
            console.error('Request error:', error);
        }

        //Add points :)

        router.push('/')
    }

    const checkSecure = async () => {
        const res = await fetch(`/api/events/attendance/${id}`, {
            method: "GET",
            cache: "no-store",
            headers: {'Content-Type': 'application/json'}
        })

        const {attendance} = res.json()

        if(array.includes(currentUser.userContent._id)){
            router.push('/')
        }else return true
    }

    const {currentUser} = useSelector(state => state.user)
    return checkSecure && (
        <div className="flex justify-center items-center w-full md:max-w-md mx-auto py-20">
            <div
                className="flex flex-col bg-gray-200/40 justify-between space-y-10 rounded-lg shadow-lg p-8 text-gray-600 border border-cyan-500/50 w-full md:w-11/12 my-2">
                <div className="mb-0.5 space-y-3">
                    <h1 className="text-3xl font-bold text-center">Well Done!</h1>
                    <h2 className="font-bold text-center">Thanks for participating in the event!</h2>
                </div>
                <div>
                    <p>You get 5 points for your participation.</p>
                </div>
                <button
                    type="submit" onClick={() => addPoints(id, 5)}
                    className="w-full bg-primaryDark border focus:outline-none focus:ring-emerald-500 focus:border-cyan-500 text-gray-900 text-sm rounded-lg font-bold block p-2.5"
                >Claim
                </button>
            </div>
        </div>
    );
}