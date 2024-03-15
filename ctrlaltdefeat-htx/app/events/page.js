import Image from "next/image";
import Card from "../(components)/Card";
import React from 'react';

const getEvents = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/events", {
            cache: "no-store",
        })

        return res.json()
    } catch (e) {
        console.log("Failed to fetch events", e);
    }
}

const Events = async () => {

  const {events} = await getEvents()

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
          {events && uniqueStatuses?.map((uniqueStatus, statusIndex) => (
              <div key={statusIndex} className="mb-4">
                  <h2>{uniqueStatus}</h2>
                  <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                      {events.filter((event) => event.category === uniqueStatus).map((filteredEvent, _index) => (
                          <Card id={_index} key={_index} ticket={filteredEvent}/>
                      ))}
                  </div>

              </div>
          ))}
      </div>
    </div>
    </div>
  );
}

export default Events;