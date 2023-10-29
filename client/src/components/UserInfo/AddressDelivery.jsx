import React, {useState} from 'react'

function AddressDelivery() {
    const [isEdit, setEdit] = useState(false)
    const [isDefault, setDefault] = useState(true)
    const [typeLocation,setTypeLocation] = useState()

    const handleEdit = () => {
        setEdit(!isEdit)
    }
    const handleDefault = () => {
        setDefault(!isDefault)
    }
    const handleTypeLocation = (value) => {
        setTypeLocation(value)
    }

    return (
        <>
            <div className="container h-screen">
                <h1 className="text-3xl font-semibold border-b-2 border-[#D52C2C]">Địa chỉ giao hàng</h1>
                <div className="text-end mt-2 flex justify-end">
                    <button
                        onClick={handleEdit}
                        className="bg-[#F94E31] text-white flex items-center p-3 rounded hover:bg-[#FF8773] transition duration-300">
                        <span className="font-semibold text-5xl mr-1">+</span>
                        Thêm địa chỉ mới
                    </button>
                </div>

                <div className="relative mt-3 space-y-3 border-2 border-black px-3 py-3 h-[155px]">
                    <div className="space-x-3">
                        <span className="text-semibold">Nguyễn Văn A</span>
                        <span className="text-[#ABABAB]">|</span>
                        <span className="text-[#ABABAB]">(+84) 777 888 999</span>
                    </div>
                    <div className="">
                        <p className="text-[#ABABAB]">Cổng sau đại học Thủy Lợi</p>
                        <p className="text-[#ABABAB]">Phường Trung Liệt, quận Đống Đa, Hà Hội</p>
                    </div>
                    <div className="mt-2 text-[#FF0000]">
                        <span className="text-semibold border border-[#FF0000] border-1 py-1 px-2">Mặc định</span>
                    </div>
                    <div className="absolute flex text-[14px] gap-5 right-3 top-1/2 -translate-y-1/2">
                        <a className="cursor-pointer text-[#0500FF] hover:text-[#dc3545] transition duration-300" type="button" onClick={handleEdit}>Cập nhật</a>
                        <a className="cursor-pointer text-[#0500FF] hover:text-[#dc3545] transition duration-300" type="button">Xóa</a>
                    </div>
                </div>

                {isEdit &&
                    <>
                        <div className="fixed top-0 left-0 z-10 w-screen h-screen bg-neutral-700/20">
                            <div className="w-[50%] px-10 py-4 relative top-[15%] translate-x-[60%] left-0 bg-[#EEEEEE]">
                                <div className="space-y-8">
                                    <h4 className="capitalize text-3xl">Thêm địa chỉ mới</h4>
                                    <div className="flex justify-between">
                                        <input className="p-4 text-2xl w-[280px]" type="text" placeholder="Họ và tên"/>
                                        <input className="p-4 text-2xl w-[280px]" type="text" placeholder="Số điện thoại"/>
                                    </div>
                                    <div className="">
                                        <input className="p-4 text-2xl w-full" type="text" placeholder="Tỉnh, thành phố, quận huyện, phường xã"/>
                                    </div>
                                    <div className="">
                                        <textarea className="p-4 text-2xl w-full" rows="2" placeholder="Ghi chú"/>
                                    </div>
                                </div>
                                <div className="mt-3 space-y-2">
                                    <p className="text-2xl">Loại địa chỉ</p>
                                    <div className="flex gap-3" role="radiogroup">
                                        <button
                                            onClick={()=>handleTypeLocation("home")}
                                            className={typeLocation==="home"? "bg-blue-500 p-3 text-xl":
                                                "bg-white p-3 text-xl transition duration-500 ease-in-out hover:bg-blue-500"}

                                        >Nhà riêng
                                        </button>

                                        <button
                                            onClick={()=>handleTypeLocation("office")}
                                            className={typeLocation==="office"?"bg-blue-500 p-3 text-xl":
                                                "bg-white p-3 text-xl transition duration-500 ease-in-out hover:bg-blue-500"}
                                        >Văn phòng
                                        </button>
                                    </div>
                                    <div className=" flex items-center gap-2">
                                        <input className="p-3" type="checkbox" id="default" onClick={handleDefault} checked={isDefault}/>
                                        <label htmlFor="default">Đặt làm địa chỉ mặc định</label>
                                    </div>
                                </div>
                                <div className="mt-4 space-x-1 flex justify-end text-sm">
                                    <div className="border border-1 border-black">
                                        <button
                                            onClick={handleEdit}
                                            className="w-[120px] text-black text-2xl py-2 hover:bg-[#ABABAB] transition duration-300"
                                        >Trở lại
                                        </button>
                                    </div>
                                    <div className="border border-1 border-[#F94E30] ">
                                        <button
                                            className="bg-[#F94E30] w-[120px] text-white text-2xl py-2 hover:bg-[#FF8773] transition duration-300">Hoàn thành
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </>
                }
            </div>
        </>
    )
}

export default AddressDelivery