import Image from "next/image";
import Card from "../(components)/Card";
import React from 'react';

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

  return (
    <div className="flex gap-3 lg:flex-wrap p-8">
      <Card
        title="Място"
        image="https://i.natgeofe.com/k/cd784533-e5ef-439a-8167-2ba61b0a9a4b/wave_16x9.jpg?w=1200"
        description="Така ще ни изглеждат хубавите картички"
        location="Варна, плаж Хубав"
        date="26.07.2024"
        organizer="Цветомир Александров"
        id="1"
      />
      <Card
        title="Място"
        image="https://i.natgeofe.com/k/cd784533-e5ef-439a-8167-2ba61b0a9a4b/wave_16x9.jpg?w=1200"
        description="Така ще ни изглеждат хубавите картички"
        location="Варна, плаж Хубав"
        date="26.07.2024"
        organizer="Цветомир Александров"
        id="2"
      />
      <Card
        title="Място"
        image="https://i.natgeofe.com/k/cd784533-e5ef-439a-8167-2ba61b0a9a4b/wave_16x9.jpg?w=1200"
        description="Така ще ни изглеждат хубавите картички"
        location="Варна, плаж Хубав"
        date="26.07.2024"
        organizer="Цветомир Александров"
        id="3"
      />
      <div className="p-5">
      <div>
          {reports && uniqueStatuses?.map((uniqueStatus, statusIndex) => (
              <div key={statusIndex} className="mb-4">
                  <h2>{uniqueStatus}</h2>
                  <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                      {reports.filter((report) => report.category === uniqueStatus).map((filteredReport, _index) => (
                          <Card id={_index} key={_index} ticket={filteredReport}/>
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