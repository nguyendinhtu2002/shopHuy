import React, {useState} from "react"
import {Link} from "react-router-dom";
import AccountInformation from "./AccountInformation";
import AddressDelivery from "./AddressDelivery";
import HistoryOrder from "./HistoryOrder";

function SliderInfo() {
    const [isAccountInformation, setAccountInformation] = useState()
    const [isHistoryOrders, setHistoryOrders] = useState()
    const [isAddressDelivery, setAddressDelivery] = useState()

    const handleAccountInformation = () => {
        setAccountInformation(true)
        setHistoryOrders(false)
        setAddressDelivery(false)
    }
    const handleHistoryOrders = () => {
        setAccountInformation(false)
        setHistoryOrders(true)
        setAddressDelivery(false)
    }
    const handleAddressDelivery = () => {
        setAccountInformation(false)
        setHistoryOrders(false)
        setAddressDelivery(true)
    }
    return (
        <>
            <div className="px-4 py-8 bg-white lg:col-span-1">
                <ul className="mt-5 grid bg-gray-50">
                    <li>
                        <div className="relative">
                            <input className="peer hidden" id="radio_1" type="radio" name="radio"
                                   onClick={handleAccountInformation}/>
                            <span
                                className="peer-checked:border-[#D52C2C] peer-checked:border-8 absolute top-1/2 box-content block h-[65%] -translate-y-1/2 bg-white"></span>
                            <label
                                className="peer-checked:border-2 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                                htmlFor="radio_1">
                                <div className="ml-5">
                                    <span className="mt-2 font-semibold">Thông tin tài khoản</span>
                                </div>
                            </label>
                        </div>
                    </li>
                    <li>
                        <div className="relative">
                            <input className="peer hidden" id="radio_2" type="radio" name="radio"
                                   onClick={handleHistoryOrders}/>
                            <span
                                className="peer-checked:border-[#D52C2C] peer-checked:border-8 absolute top-1/2 box-content block h-[65%] -translate-y-1/2 bg-white"></span>
                            <label
                                className="peer-checked:border-2 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                                htmlFor="radio_2">
                                <div className="ml-5">
                                    <span className="mt-2 font-semibold">Lịch sử mua hàng</span>
                                </div>
                            </label>
                        </div>
                    </li>
                    <li>
                        <div className="relative">
                            <input className="peer hidden" id="radio_3" type="radio" name="radio"
                                   onClick={handleAddressDelivery}/>
                            <span
                                className="peer-checked:border-[#D52C2C] peer-checked:border-8 absolute top-1/2 box-content block h-[65%] -translate-y-1/2 bg-white"></span>
                            <label
                                className="peer-checked:border-2 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                                htmlFor="radio_3">
                                <div className="ml-5">
                                    <span className="mt-2 font-semibold">Địa chỉ giao hàng</span>
                                </div>
                            </label>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="pt-8 px-4 lg:col-span-3">
                {isAccountInformation && <AccountInformation/>}
                {isHistoryOrders && <HistoryOrder/>}
                {isAddressDelivery && <AddressDelivery/>}
            </div>
        </>
    )
}

export default SliderInfo