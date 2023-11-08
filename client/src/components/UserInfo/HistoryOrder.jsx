import React, { useEffect, useState } from "react";
import HistoryProduct from "./HistoryProduct";
import { useDispatch, useSelector } from "react-redux";
import { updateUserInfo } from "../../store/userInfoSlice";
import axios from "axios";
import * as HistoryOrderService from "../../services/HistoryOrderService";
import { formatPrice } from "../../utils/helpers";

function HistoryOrder(props) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [id,setId] = useState('')
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.userInfo);
  const user = useSelector((state) => state.user);

  const handleClick = (id) => {
    setId(id)
    dispatch(updateUserInfo());
  };
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true); // Bắt đầu loading
        const historyData = await HistoryOrderService.getHistoryOrder(user.id);
        setData(historyData);
      } catch (error) {
        // Xử lý lỗi nếu cần
        console.error(error);
      } finally {
        setLoading(false); // Kết thúc loading
      }
    }
    fetchData();
  }, []);
  return (
    <>
      {!status && (
        <>
          <div className="container h-screen">
            <h1 className="text-3xl font-semibold border-b-2 border-[#D52C2C]">
              Lịch sử mua hàng
            </h1>
            {data.map((item) => (
              <button
                className="block w-full h-[160px] mt-3 space-y-3 px-3 py-3 text-start hover:bg-gray-50"
                onClick={()=>handleClick(item._id)}
                style={{ border: "solid black 1px " }}
              >
                <div className="space-x-3 flex justify-between">
                  <span className="">{item.orderCode}</span>
                  <span className="text-[#fa7862] font-medium">
                   {formatPrice(item.totalPrice)}
                  </span>
                </div>
                <div className="text-2xl">
                <p className="text-[#ABABAB]">{new Date(item.createAt).toLocaleString()}</p>
                </div>
                <div className="text-2xl">
                  <p className="text-[#ABABAB]">Địa chỉ:</p>
                  <p className="text-[#ABABAB]">
                    {item.address}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </>
      )}

      {status && <HistoryProduct id={id} />}
    </>
  );
}

export default HistoryOrder;
