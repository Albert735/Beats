import { GrShop } from "react-icons/gr";
import AOS from "aos";
import "aos/dist/aos.css";
import { product } from "../ProductArray";
import { useStateContext } from "../Context/StateContext"; 
import toast,{Toaster} from "react-hot-toast";

AOS.init();

const Products = ({ items }) => {
  const { addToCart } = useStateContext();

  const notify = () => toast.success('Added to cart')

  return (
    <div
      id="products"
      className="flex flex-col justify-center items-center xl:mt-[10rem] my-[5rem] md:mt-[5rem] md:mb-[10rem] overflow-hidden"
    >
      <h1 className="text-[4rem] font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-[#847B7C] to-[#A59F9F] dark:bg-gradient-to-b dark:from-[#323536] dark:to-[#1D1E1F]">
        Choose <br /> Your Style
      </h1>
      <div className="flex md:w-[50rem] flex-col ">
        <div className="flex flex-wrap  justify-center items-center gap-7 xl:gap-[4rem] mt-[7rem] gap-y-[4rem]">
          {product.map((product) => (
            <div
              key={product._id}
              data-aos="fade-left"
              data-aos-duration="1100"
              data-aos-delay="100"
              data-aos-easing="ease-in-out"
              className="flex relative flex-col   justify-center items-center bg-[#F1E9E9] dark:bg-[#191A1A] px-[2rem] py-5 rounded-lg h-fit hover:dark:bg-[#2b2b2b] hover:bg-[#3a3838]   hover:delay-300  hover:ease-in-out duration-200"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-[10rem] xl:h-[10rem] -top-[3rem] absolute"
              />
              <div className="flex flex-col gap-2 mt-28">
                <h2 className="font-bold">{product.title}</h2>
                <button
                     onClick={() => {
                      addToCart({ ...product, quantity: 1 });
                      notify();
                  }}
                  className="flex justify-center items-center gap-5 bg-[#e9dedd] hover:bg-[#f9e0de] hover:dark:bg-[#151515] dark:bg-black p-3 rounded-lg hover:text-black text-black dark:text-white "
                >
                  <p className="font-semi-bold">Ghc {product.price}</p>
                  <span>
                    <GrShop />
                  </span>
                </button>
                <Toaster/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
