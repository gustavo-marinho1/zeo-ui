import Header from "../components/header-2/header";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-[1] py-24 px-16 flex flex-col gap-8">
        <span className="text-xl font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia non iste officiis? Dolorum distinctio, hic maxime provident similique, magni voluptas nobis earum, ipsum voluptatum aut quisquam. Molestiae enim veritatis nostrum!</span>
        <span className="text-xl font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia non iste officiis? Dolorum distinctio, hic maxime provident similique, magni voluptas nobis earum, ipsum voluptatum aut quisquam. Molestiae enim veritatis nostrum!</span>
        <span className="text-xl font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia non iste officiis? Dolorum distinctio, hic maxime provident similique, magni voluptas nobis earum, ipsum voluptatum aut quisquam. Molestiae enim veritatis nostrum!</span>
      </div>
    </div>
  )
}