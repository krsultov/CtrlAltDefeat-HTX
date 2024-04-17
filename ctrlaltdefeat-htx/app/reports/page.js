"use client"
import React, {useEffect, useState} from 'react';
import Link from "next/link";
import Card from "@/app/(components)/Card";
import ReportCard from "@/app/(components)/ReportCard";

const Reports = () => {
    const [reports, setReports] = useState(null);

    const getReports = async () => {
        try {
            const res = await fetch("/api/reports", {
                method: "GET",
                cache: "no-store",
            })

            const {reports} = await res.json()

            return setReports(reports)
        } catch (e) {
            console.log("Failed to fetch reports", e);
        }
    }

    useEffect(() => {
        getReports()
    }, []);


    return reports && (

        <div>
            <div className="p-5 w-full">
                <div className="flex items-center gap-5">
                    <Link href={"/reports/new"}>
                        <button
                            className="my-5 border py-2 border-solid border-base-500 rounded-lg px-5 bg-secondary hover:bg-secondaryDark">Create
                            a Report
                        </button>
                    </Link>

                </div>
                <h1 className="text-3xl font-bold mb-5">Reports</h1>
                <div className="grid sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {reports.map((report, _index) => <ReportCard id={_index} key={_index} report={report}/>)}
                </div>


            </div>

        </div>
    );
}

export default Reports;