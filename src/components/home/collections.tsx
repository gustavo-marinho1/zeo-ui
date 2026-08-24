export const Collections = () => {
    return (
        <div className="w-full flex flex-col">
            {/*<div className="px-2 pb-1">
                <label className="text-md font-light tracking-wide">Collections</label>
            </div>*/}

            <div className="w-full flex flex-col md:flex-row">
                <div className="flex-[1]">
                    <img
                        src={`./images/collections/01.jpg`}
                        alt="Collection 01"
                        className="object-cover size-full"
                        loading="lazy"
                    />
                </div>
                <div className="flex-[1]">
                    <img
                        src={`./images/collections/02.jpg`}
                        alt="Collection 02"
                        className="object-cover size-full"
                        loading="lazy"
                    />
                </div>
                <div className="flex-[1]">
                    <img
                        src={`./images/collections/03.jpg`}
                        alt="Collection 03"
                        className="object-cover size-full"
                        loading="lazy"
                    />
                </div>
            </div>

        </div>
    )
}