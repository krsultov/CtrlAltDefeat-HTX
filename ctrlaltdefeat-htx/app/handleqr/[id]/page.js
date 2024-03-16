export default function QrCodePage({params}){
    const {currentUser} = useSelector(state => state.user)
    return(
        <div className="flex justify-center items-center w-full md:max-w-md mx-auto py-20">
            <div className="flex flex-col bg-gray-200/40 justify-between space-y-10 rounded-lg shadow-lg p-8 text-gray-600 border border-cyan-500/50 w-full md:w-11/12 my-2">
                <div className="mb-0.5">
                    <h1 className="text-3xl font-bold text-center">Well Done!</h1>
                    <h2 className="font-bold text-center">Thanks for cleaning the beach!</h2>
                </div>
                <div>
                    <p>You get {points} points for cleaning the beach.</p>
                </div>
                <button
                    type="submit"
                    className="w-full bg-primaryDark border focus:outline-none focus:ring-emerald-500 focus:border-cyan-500 text-gray-900 text-sm rounded-lg font-bold block p-2.5"
                >Claim</button>
            </div>
        </div>
    );
}