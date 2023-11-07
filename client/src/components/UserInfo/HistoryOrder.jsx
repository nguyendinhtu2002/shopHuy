import React, {useState} from 'react'
import HistoryProduct from "./HistoryProduct";
import {useDispatch, useSelector} from "react-redux";
import {updateUserInfo} from "../../store/userInfoSlice";

function HistoryOrder(props) {
    const dispatch = useDispatch();
    const {status} = useSelector((state) => state.userInfo);
    const handleClick = () => {
        dispatch(updateUserInfo());
    }
    return (
        <>
            {!status &&
                (
                    <>
                        <div className="container h-screen">
                            <h1 className="text-3xl font-semibold border-b-2 border-[#D52C2C]">Lịch sử mua hàng</h1>
                            <button
                                className="block w-full h-[160px] mt-3 space-y-3 px-3 py-3 text-start hover:bg-gray-50"
                                onClick={handleClick}
                                style={{border:"solid black 1px "}}
                            >
                                <div className="space-x-3 flex justify-between">
                                    <span className="">64e21391f7de058f6f2e9e05</span>
                                    <span className="text-[#fa7862] font-medium">28.000.000đ</span>
                                </div>
                                <div className="text-2xl">
                                    <p className="text-[#ABABAB]">05/11/2023</p>
                                </div>
                                <div className="text-2xl">
                                    <p className="text-[#ABABAB]">Cổng sau đại học Thủy Lợi</p>
                                    <p className="text-[#ABABAB]">Phường Trung Liệt, quận Đống Đa, Hà Nội</p>
                                </div>
                            </button>
                        </div>
                    </>
                )
            }

            {status&&
            <HistoryProduct />
            }
        </>
    )
}

export default HistoryOrder