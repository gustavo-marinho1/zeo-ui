import Header from "../components/header-2/header";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-neutral-50">
      <Header />
      <main className="flex-[1] py-16 px-16 flex flex-col gap-8">
        <div className="mb-2">
          <p className="text-center font-semibold">About</p>
        </div>
        <span className="text-xl font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia non iste officiis? Dolorum distinctio, hic maxime provident similique, magni voluptas nobis earum, ipsum voluptatum aut quisquam. Molestiae enim veritatis nostrum!</span>
        <span className="text-xl font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia non iste officiis? Dolorum distinctio, hic maxime provident similique, magni voluptas nobis earum, ipsum voluptatum aut quisquam. Molestiae enim veritatis nostrum!</span>
        <span className="text-xl font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia non iste officiis? Dolorum distinctio, hic maxime provident similique, magni voluptas nobis earum, ipsum voluptatum aut quisquam. Molestiae enim veritatis nostrum!</span>
      </main>
    </div>
  )
}