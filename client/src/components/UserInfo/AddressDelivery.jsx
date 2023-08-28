import React, {useState} from 'react'

function AddressDelivery() {
    const [isEdit, setEdit] = useState(false)
    const handleEdit = () => {
        setEdit(!isEdit)
    }


    return (
        <>
            <div className="container h-screen">
                <h1 className="text-3xl font-semibold border-b-2 border-[#D52C2C]">Address Delivery</h1>
                {!isEdit &&
                    <>
                        <div className="flex mt-4">
                            <div className="flex-1 overflow-hidden">

                                <ul>
                                    <li className="text-2xl font-semibold my-2 text-gray-600 uppercase ">
                                        <svg className="inline align-text-top" height="24px" viewBox="0 0 24 24"
                                             width="24px"
                                             xmlns="http://www.w3.org/2000/svg" fill="#000000">
                                            <g>
                                                <path d="m4.88889,2.07407l14.22222,0l0,20l-14.22222,0l0,-20z"
                                                      fill="none"
                                                      id="svg_1"
                                                      stroke="null"></path>
                                                <path
                                                    d="m7.07935,0.05664c-3.87,0 -7,3.13 -7,7c0,5.25 7,13 7,13s7,-7.75 7,-13c0,-3.87 -3.13,-7 -7,-7zm-5,7c0,-2.76 2.24,-5 5,-5s5,2.24 5,5c0,2.88 -2.88,7.19 -5,9.88c-2.08,-2.67 -5,-7.03 -5,-9.88z"
                                                    id="svg_2"></path>
                                                <circle cx="7.04807" cy="6.97256" r="2.5" id="svg_3"></circle>
                                            </g>
                                        </svg>
                                        Receiver
                                    </li>
                                    <li>Max Mustermann</li>
                                    <li>Musterstrasse 1</li>
                                    <li>4020 Linz</li>
                                </ul>
                            </div>
                        </div>
                        <button
                            className="mt-3 px-5 py-2 text-medium text-white rounded-lg bg-[#D52C2C] hover:opacity-80 transition duration-300"
                            onClick={handleEdit}
                        >Edit
                        </button>
                    </>
                }

                {isEdit &&
                    <>
                        <div className="mt-4">
                            <input placeholder="Name"
                                   className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2    transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>
                            <input
                                placeholder="Address"
                                className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2    transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>
                            <div className="flex">
                                <div className="flex-grow w-1/4 pr-2"><input placeholder="City"
                                                                             className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2    transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>
                                </div>
                                <div className="flex-grow"><input placeholder="Country"
                                                                  className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2    transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>
                                </div>
                            </div>

                        </div>
                        <div className="flex space-x-3">
                            <button
                                className="mt-3 px-5 py-2 text-medium text-white rounded-lg bg-dark hover:opacity-80 transition duration-300"
                                onClick={handleEdit}
                            >Save
                            </button>
                            <a
                                className="mt-3 px-5 py-2 text-medium rounded-lg border-2 border-[#D52C2C] hover:border-0 hover:bg-[#D52C2C]/80 cursor-pointer hover:text-white hover:opacity-80 transition duration-300"
                                onClick={handleEdit}
                            >Cancel
                            </a>
                        </div>

                    </>
                }
            </div>
        </>
    )
}

export default AddressDelivery