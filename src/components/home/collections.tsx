export const Collections = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <label className="text-md font-light tracking-wide">Collections</label>

      <div className="w-full flex flex-col md:flex-row gap-x-1 gap-y-2">
        <div className="flex-[1]">
          <img
            src="./images/collections/11.jpg"
            alt="Poster 01"
            className="object-cover size-full"
          />
        </div>

        <div className="flex-[1]">
          <img
            src="./images/collections/02.jpg"
            alt="Poster 02"
            className="object-cover size-full"
          />
        </div>

        <div className="flex-[1]">
          <img
            src="./images/collections/03.jpg"
            alt="Poster 03"
            className="object-cover size-full"
          />
        </div>
      </div>
    </div>
  )
}