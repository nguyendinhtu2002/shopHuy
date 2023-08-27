import React from 'react'

function AccountInformation() {
    return (
        <>
            <div className="container">
                <h1 className="text-3xl font-semibold border-b-2 border-[#D52C2C]">Account Information</h1>
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
            </div>
        </>
    )
}

export default AccountInformation