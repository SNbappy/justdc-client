import cardImg from "../../assets/381979843_734132018728236_564759029073434333_n.jpg"

const JustdcTodayCard = () => {
    return (
        <div className='grid grid-cols-3 gap-2'>
            <div className="transition-all transform rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 card card-compact bg-base-100 max-w-[345px]">
                <figure>
                    <img
                        src={cardImg}
                        alt="photo" />
                </figure>
                {/* <div className="w-full h-[5px] bg-[#003366]"></div> */}
                <div className="card-body">
                    {/* <h2 className="card-title text-[#003366] font-sans text-2xl">Expert-Led Training</h2> */}
                    <p className='py-2 text-2xl font-medium'>Intra University Debate Competition</p>
                    {/* <div className="py-2 card-actions">
                        <button className="font-semibold text-white bg-[#003366] border-none rounded-2xl uppercase font-sans px-6 py-2">Learn More</button>
                    </div> */}
                </div>
                <div className="p-2 font-sans text-white rounded-b-xl max-w-24 bg-[#003366] fixed ml-6">
                    <p className="text-center">
                        <span className="text-2xl font-medium">27</span><br />Mar 2025
                    </p>
                </div>
            </div>
            <div className="transition-all transform rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 card card-compact bg-base-100 max-w-[345px]">
                <figure>
                    <img
                        src={cardImg}
                        alt="photo" />
                </figure>
                {/* <div className="w-full h-[5px] bg-[#003366]"></div> */}
                <div className="card-body">
                    {/* <h2 className="card-title text-[#003366] font-sans text-2xl">Expert-Led Training</h2> */}
                    <p className='py-2 text-2xl font-medium'>Intra University Debate Competition</p>
                    {/* <div className="py-2 card-actions">
                        <button className="font-semibold text-white bg-[#003366] border-none rounded-2xl uppercase font-sans px-6 py-2">Learn More</button>
                    </div> */}
                </div>
                <div className="p-2 font-sans text-white rounded-b-xl max-w-24 bg-[#003366] fixed ml-6">
                    <p className="text-center">
                        <span className="text-2xl font-medium">27</span><br />Mar 2025
                    </p>
                </div>
            </div>
            <div className="transition-all transform rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 card card-compact bg-base-100 max-w-[345px]">
                <figure>
                    <img
                        src={cardImg}
                        alt="photo" />
                </figure>
                {/* <div className="w-full h-[5px] bg-[#003366]"></div> */}
                <div className="card-body">
                    {/* <h2 className="card-title text-[#003366] font-sans text-2xl">Expert-Led Training</h2> */}
                    <p className='py-2 text-2xl font-medium'>Intra University Debate Competition</p>
                    {/* <div className="py-2 card-actions">
                        <button className="font-semibold text-white bg-[#003366] border-none rounded-2xl uppercase font-sans px-6 py-2">Learn More</button>
                    </div> */}
                </div>
                <div className="p-2 font-sans text-white rounded-b-xl max-w-24 bg-[#003366] fixed ml-6">
                    <p className="text-center">
                        <span className="text-2xl font-medium">27</span><br />Mar 2025
                    </p>
                </div>
            </div>
        </div>
    );
};

export default JustdcTodayCard;