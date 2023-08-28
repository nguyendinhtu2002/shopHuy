import React, {useState} from 'react'

function AccountInformation() {
    const [isEdit, setEdit] = useState(false)
    const handleEdit = () => {
        setEdit(!isEdit)
    }
    return (
        <>
            <div className="container">
                <h1 className="text-3xl font-semibold border-b-2 border-[#D52C2C]">Account Information</h1>
                {!isEdit &&
                    <>
                        <div className="mt-4 flex space-x-10">
                            <div className="space-y-3 font-semibold">
                                <p>Họ và tên</p>
                                <p>Email</p>
                                <p>Phone</p>
                            </div>
                            <div className="space-y-3">
                                <p>Duy Hưng</p>
                                <p>duyhung@gmail.com</p>
                                <p>0123456789</p>
                            </div>
                        </div>
                        <button onClick={handleEdit}
                                className="mt-3 px-5 py-2 text-medium text-white rounded-lg bg-[#D52C2C] hover:opacity-80 transition duration-300">Edit
                        </button>
                    </>
                }
                {isEdit &&
                    <>
                        <div className="mt-4">
                            <input placeholder="Name"
                                   className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2    transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>
                            <input
                                placeholder="Email"
                                className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2    transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>
                            <input
                                placeholder="Phone"
                                className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2    transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"/>


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

export default AccountInformation