import CardLogo from "../images/card-logo.svg"

const FrontCard = () => {
    return (

        <div className='bg-fronCard  bg-no-repeat bg-contain h-[250px] w-[300px]
             text-white-100 font-Space text-F18 relative 
             md:w-[500px]'
        >
            <div className='absolute'>
                <img src={CardLogo} alt='te' className='pl-6 pt-6' />

                <div className='flex-1 pt-[20px] px-[50px]
                    md:pt-[80px] md:px-[50px]'>
                    <div className='
                    md:w-[350px] md:text-3xl ' >
                        <label>0000 0000 0000 0000</label>
                    </div>
                    <div className='md:w-[330px] py-3 flex justify-between'>
                        <label>JANE APPLESEED</label>
                        <label>00/00</label>
                    </div>
                </div>
            </div>
        </div >


    )
}

export default FrontCard