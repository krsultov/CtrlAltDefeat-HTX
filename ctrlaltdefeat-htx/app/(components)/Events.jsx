import Image from "next/image";
import Card from "./(components)/Card"

export default function Home() {
    return (
      <div className="flex gap-3 flex-wrap">
        <Card title="Място" image="https://i.natgeofe.com/k/cd784533-e5ef-439a-8167-2ba61b0a9a4b/wave_16x9.jpg?w=1200" description="Така ще ни изглеждат хубавите картички" location="Варна, плаж Хубав" date="26.07.2024" organizer="Цветомир Александров" />
        <Card title="Място" image="https://i.natgeofe.com/k/cd784533-e5ef-439a-8167-2ba61b0a9a4b/wave_16x9.jpg?w=1200" description="Така ще ни изглеждат хубавите картички" location="Варна, плаж Хубав" date="26.07.2024" organizer="Цветомир Александров" />
        <Card title="Място" image="https://i.natgeofe.com/k/cd784533-e5ef-439a-8167-2ba61b0a9a4b/wave_16x9.jpg?w=1200" description="Така ще ни изглеждат хубавите картички" location="Варна, плаж Хубав" date="26.07.2024" organizer="Цветомир Александров" />
        </div>
          );
        }