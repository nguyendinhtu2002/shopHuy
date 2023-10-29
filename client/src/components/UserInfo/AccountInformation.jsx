import React, {useState} from 'react'
import icon_setting from "../../assets/icon_setting.png"
function AccountInformation() {
    return (
        <>
            <div className="container h-screen">
                <h1 className="text-3xl uppercase font-semibold border-b-2 border-[#D52C2C]">Thông tin tài khoản</h1>

                <div className="mt-4 grid grid-cols-2 gap-80">
                    <div className="grid grid-cols-2 col-span-1">
                        <div className="space-y-10 font-semibold">
                            <div className="p-2">
                                <p>Họ và tên <span className="text-[#FF0505]">*</span></p>
                            </div>
                            <div className="p-2">
                                <p>Giới tính</p>
                            </div>
                            <div className="p-2">
                                <p>Ngày sinh</p>
                            </div>
                        </div>
                        <div className="space-y-10">
                            <div className="border">
                                <input className="w-full p-4 text-xl" type="text" placeholder="Họ và tên" required/>
                            </div>
                            <div className="border">
                                <select className="border w-full px-3 py-2" name="gender" id="gender">
                                    <option value="Nam">Nam</option>
                                    <option value="Nữ">Nữ</option>
                                </select>
                            </div>
                            <div className="border">
                                <input className="w-full p-4 text-xl" type="date"/>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 col-span-1">
                        <div className="space-y-10 font-semibold">
                            <div className="p-2">
                                <p>Số điện thoại <span className="text-[#FF0505]">*</span></p>
                            </div>
                            <div className="p-2">
                                <p>Email <span className="text-[#FF0505]">*</span></p>
                            </div>
                        </div>
                        <div className="space-y-10">
                            <div className="border">
                                <input className="w-full p-4 text-xl" type="text" placeholder="Số điện thoại" required/>
                            </div>
                            <div className="border">
                                <input className="w-full p-4 text-xl" type="text" placeholder="Email" required/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-7">
                    <button
                        className="flex items-center gap-2 text-center px-3 py-2 text-2xl text-white rounded-lg bg-[#00C6F1] hover:bg-[#8DEAFF] transition duration-300">
                        <span>
                            <img className="w-[36px]" src={icon_setting} alt="icon setting"/>
                        </span>
                        Cập nhật
                    </button>
                </div>
            </div>


        </>
    )
}

export default AccountInformation