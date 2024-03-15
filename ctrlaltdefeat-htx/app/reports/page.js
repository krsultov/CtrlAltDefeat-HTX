import React from 'react';
import ReportCard from "@/app/(components)/ReportCard";

const getReports = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/reports", {
            cache: "no-store",
        })

        return res.json()
    } catch (e) {
        console.log("Failed to fetch reports", e);
    }
}

const Reports = async () => {

    const {reports} = await getReports()

    const uniqueStatuses = [
        ...new Set(reports?.map(({status}) => status))
    ]

    return (
        <div className="flex gap-3 lg:flex-wrap p-8">
            <div className="p-5">
                <div>
                    {reports && uniqueStatuses?.map((uniqueStatus, statusIndex) => (
                        <div key={statusIndex} className="mb-4">
                            <h2>{uniqueStatus}</h2>
                            <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                                {reports.filter((report) => report.category === uniqueStatus).map((filteredReport, _index) => (
                                    <ReportCard id={_index} key={_index} report={filteredReport}/>
                                ))}
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Reports;