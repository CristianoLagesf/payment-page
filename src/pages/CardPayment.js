import BackCard from "../components/BackCard"
import FormPayment from "../components/FormPayment"
import FrontCard from "../components/FrontCard"

const CardPayment = () => {
    return (
        <div className='flex flex-row  '>
            <div className="bg-bgMobile bg-no-repeat bg-cover h-[500px] w-full max-w-[1024px] relative
            md:bg-bgD md:h-[900px] md:w-[500px] ">
            </div>
            <div className="absolute top-[200px] left-[0px]">
                <FrontCard />
            </div>
            <div className="absolute top-[50px] left-[7px]">
                <BackCard />
            </div>
            <FormPayment />
        </div>
    )
}

export default CardPayment