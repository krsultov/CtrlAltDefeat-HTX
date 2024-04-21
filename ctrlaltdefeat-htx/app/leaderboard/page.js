"use client"
import React, {useEffect, useState} from 'react';
import ReactPaginate from 'react-paginate';


const LeaderBoard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await fetch('/api/users',{method: "GET", cache: "no-store", headers: {'Content-Type': 'application/json'}});
            const data = await res.json();
            const sortedUsers = data.sort((a, b) => b.points - a.points);
            setUsers(sortedUsers);
        };

        fetchUsers();
    }, []);

    const [currentPage, setCurrentPage] = useState(0);

    const PER_PAGE = 10;

    const offset = currentPage * PER_PAGE;

    const currentPageData = users
        .slice(offset, offset + PER_PAGE)
        .map((user, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="bg-gray-100 text-gray-700 py-3 px-6 text-left whitespace-nowrap">{user.username}</td>
                <td className="bg-gray-100 text-gray-700 py-3 px-6 text-left">{user.points}</td>
            </tr>
        ));

    const pageCount = Math.ceil(users.length / PER_PAGE);

    return (
        <div className='p-3'>
            <h1 className="text-3xl font-bold mb-5 text-gray-600">Leaderboard</h1>
            <div className="rounded-lg overflow-hidden">
                <table className="table-auto w-full rounded-3xl bg-white">
                    <thead>
                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">Username</th>
                        <th className="py-3 px-6 text-left">Points</th>
                    </tr>
                    </thead>
                    {currentPageData}
                </table>
            </div>


            <ReactPaginate
                previousLabel={"← Previous"}
                nextLabel={"Next →"}
                pageCount={pageCount}
                onPageChange={({selected}) => setCurrentPage(selected)}
                containerClassName={" flex justify-center list-none m-0 mt-5 p-0 gap-4 items-center"}
                previousLinkClassName={" text-gray-600 pagination__link font-bold"}
                nextLinkClassName={"text-gray-600 pagination__link font-bold"}
                disabledClassName={"text-gray-400"}
                activeClassName={" text-gray-800 font-bold bg-secondary rounded-full w-8 h-8 flex items-center justify-center"}
            />
        </div>
    );
}

export default LeaderBoard;