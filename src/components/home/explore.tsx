import { Link } from "react-router-dom"

export const ExploreMore = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-6/8 md:w-6/8 xl:w-6/9 2xl:w-5/9 h-full flex flex-col justify-center items-center gap-2">

        <label className="text-lg">Explore more</label>

        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-4">
          <Link to={"/shop/t-shirts"}>
            <div className="w-full aspect-square bg-neutral-300/20">
              <div className="bg-neutral-100 w-full aspect-[4/4] relative overflow-hidden">
                <div className="absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center">
                  <img
                    src={`/images/products/ts-04/01.png`}
                    alt="ts-04"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </Link>

          <Link to="/shop/hoodies">
            <div className="w-full aspect-square bg-neutral-300/20">
              <div className="bg-neutral-100 w-full aspect-[4/4] relative overflow-hidden">
                <div className="absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center">
                  <img
                    src={`/images/products/hd-05/01.png`}
                    alt="ts-04"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </Link>

          <Link to="/shop/hats">
            <div className="w-full aspect-square bg-neutral-300/20">
              <div className="bg-neutral-100 w-full aspect-[4/4] relative overflow-hidden">
                <div className="absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center">
                  <img
                    src={`/images/products/ha-02/01.png`}
                    alt="ts-04"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </Link>

          <Link to="/shop/jackets">
            <div className="w-full aspect-square bg-neutral-300/20">
              <div className="bg-neutral-100 w-full aspect-[4/4] relative overflow-hidden">
                <div className="absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center">
                  <img
                    src={`/images/products/jc-04/01.png`}
                    alt="ts-04"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </Link>

          <Link to="/shop/pants">
            <div className="w-full aspect-square bg-neutral-300/20">
              <div className="bg-neutral-100 w-full aspect-[4/4] relative overflow-hidden">
                <div className="absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center">
                  <img
                    src={`/images/products/pn-01/01.png`}
                    alt="ts-04"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </Link>

          <Link to="/shop/sneakers">
            <div className="w-full aspect-square bg-neutral-300/20">
              <div className="bg-neutral-100 w-full aspect-[4/4] relative overflow-hidden">
                <div className="absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center">
                  <img
                    src={`/images/products/sn-02/01.png`}
                    alt="ts-04"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </Link>

        </div>

      </div>
    </div>
  )
}