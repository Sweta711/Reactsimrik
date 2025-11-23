import { useState } from "react"


function Faq () {


    const [open,setOpen] = useState(null)


    const toggleDrop = (index) =>{
        setOpen(index === open ? null : index)
    }
    const faq = [
        {
            question : 'Why book bus tickets online on Simrik Yatayat? ',
            answer : 'Booking bus tickets online on Simrik Yatayat is increasingly becoming the preferred choice for travellers due to its numerous advantages over traditional methods. With Simrik, customers can book their bus tickets effortlessly from the comfort of their homes, avoiding the inconvenience of standing in long lines at bus stations or travel agencies.Online bus booking offers the luxury of comparing different bus schedules and operators and presents various discount offers and exclusive deals, resulting in significant savings. Payment security is another notable feature of online booking, which ensures that your financial information is well-protected against fraud. Additionally, customers can pick their seats, providing a customized travel experience. Online bus booking platforms give real-time updates about any changes in the bus timetable, including delays or cancellations, enabling better planning. The convenience doesnot stop here,travellers can even compare onboard amenities like charging points further enhancing the travel experience.'},

            {
            question: "Can I cancel my bus ticket?",
            answer:
                "Yes! You can cancel your ticket online through the 'Manage Booking' section. Cancellation charges may apply."
            },

            {
            question: "Is online payment safe?",
            answer:
                "Absolutely. We use secure payment gateways and encrypted transactions for your safety."
            },

            {
            question: "How do I choose my seat?",
            answer:
                "You can select your seat directly from the seat layout provided during booking."
            },
            {
            question: "Do you provide customer support?",
            answer:
                "Yes, our team is available 24/7 to support you through phone, email, and live chat."
            }

    ];


    return(

        <div>
            <div className="bg-[#f5f5f5]">
        <div className=" relative flex flex-col items-center pt-35 justify-center] "
                    >
                <div className=' flex text-center w-[400px] justify-center cursor-pointer'>
                    <span
                        className={`absolute [top:83px] text-[23px]   lg:text-[32px] text-black font-bold `}
                    >
                        Frequently Asked Questions
                    </span>
                </div>
                <p className="text-center text-[15px] text-[#777777] mt-[6px]">Find answers to common questions about Simrik Yatayat </p>
            </div>

            <div className=" w-[70vw] p-5 pb-20 m-auto mt-10 flex flex-col">

                {
                    faq.map ((items, index)=>{

                        return (
                            <div key={index}
                                onClick={()=>toggleDrop(index)}    className="flex cursor-pointer flex-col shadow-[0_0_15px_rgba(0,0,0,0.1)]  rounded-xl ">
                            <div className="flex justify-between p-6 items-center">
                                <p className="text-[#002c5f]  font-semibold">{items.question} </p>
                            <i className={` fas fa-chevron-down text-[#002c5f] transition-transform dutation-300 ease-in-out
                                        ${index === open ? 'rotate-180' : 'rotate-0' }`}></i>
                            </div>
                            {
                                index === open &&
                                <p className="p-5 font-light">{items.answer}</p>
                            }
                            </div>
                        )
                    })
                }

            </div>

        </div>
    </div>
    )

}

export default Faq