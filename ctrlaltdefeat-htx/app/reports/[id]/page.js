"use client"
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import QRCodeComponent from "@/app/(components)/QRCode";
import {useRouter} from "next/navigation";
import {set} from "react-hook-form";


export default function EventDetails({params}) {

    const [report, setReport] = useState(null);
    const {currentUser} = useSelector(state => state.user)
    const router = useRouter()

    const {id} = params
    const getReportById = async (reportId) => {

        const res = await fetch(`/api/reports/${reportId}`, {
            method: "GET",
            cache: "no-store"
        })

        const {foundReport} = await res.json()

        setReport(foundReport)
    }

    useEffect(() => {
        getReportById(id)
    }, [id]);


    if (currentUser) {
        return report && (
            <div className="flex justify-center items-center pt-5 pb-5 ">
                <div
                    className=" flex flex-col bg-gray-200/40 justify-between space-y-10 rounded-lg shadow-lg p-8 text-gray-600 border border-cyan-500/50 w-full md:w-11/12 lg:w-5/6 xl:w-2/3">

                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <img src={report.beforeImage}
                             alt='Event picture' className="pr-10 w-full">
                        </img>
                        <div>
                            <p className="pt-3 text-slate-800 text-lg">{report.location}</p>
                            <h1 className="text-4xl xl:text-6xl font-bold my-10">{report.title}</h1>
                            <p>{report.description}</p>
                        </div>
                    </div>

                </div>
            </div>
        );
    } else {
        router.push('/login');
    }
}
