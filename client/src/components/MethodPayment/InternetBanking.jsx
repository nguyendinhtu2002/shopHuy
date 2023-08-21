import React from "react"

function InternetBanking(){
    return (
        <>
            <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
                <p className="text-xl font-medium">Payment Details</p>
                <p className="text-gray-400">Complete your order by scanning the QR code.</p>
                <div className="flex h-full items-center space-x-5">
                    <div className="mx-auto w-96">
                        <img className="" src="https://homepage.momocdn.net/img/momo-upload-api-230627140125-638234712853800898.jpg" alt="Momo" />
                        <p className="text-center text-3xl font-semibold">Momo</p>
                    </div>
                    <div className="mx-auto w-96">
                        <img className="" src="https://homepage.momocdn.net/img/momo-upload-api-230627140125-638234712853800898.jpg" alt="Momo" />
                        <p className="text-center text-3xl font-semibold">Momo</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default InternetBanking