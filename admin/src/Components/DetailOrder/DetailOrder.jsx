import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import Table from "../Table/Table";
import * as OrderService from "../../Services/OrderSevice";
import { toast } from "react-toastify";
import Toast from "../LoadingError/Toast";
import CustomModal from "../Modal/Modal";

const DetailOrder = (props) => {
  const { data } = props;
  const [loading, setLoading] = useState("");
  const [tempData, setTempData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isDeleteConfirmed, setIsDeleteConfirmed] = useState(false);

  const handleClose = () => {
    setShowModal(false);
    setIsDeleteConfirmed(false);
  };
  const confirmDelete = () => {
    setIsDeleteConfirmed(true);
    setShowModal(true);
  };
  const [error, setError] = useState("");
  const toastId = React.useRef(null);
  const Toastobjects = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };
  const hangldeGetAll = async () => {
    setLoading(true);
    await OrderService.getOrderDetailByCode()
      .then((res) => {
        setLoading(false);
        setTempData(res);
      })
      .catch((error) => {
        setError(error);
      });
  };
  const handleDelete = async (id) => {
    if (id) {
      await OrderService.deleteOrder(id)
        .then((res) => {
          if (!toast.isActive(toastId.current)) {
            toastId.current = toast.success("Thành công!", Toastobjects);
          }
          hangldeGetAll();
          window.location.reload();
        })
        .catch((error) => {
          if (!toast.isActive(toastId.current)) {
            toastId.current = toast.error(error, Toastobjects);
          }
        });
    }
  };
  const columns = [
    {
      name: "Mã sản phẩm",
      selector: (row) => (
        <div>
          <Link to={`/orders/show/${row.orderCode}`} className="text-decoration-none">
            {row.orderCode}
          </Link>
        </div>
      ),
    },
    {
      name: "Tên sản phẩm",
      selector: (row) => row.local,
    },
    {
      name: "Giá sản phẩm",
      selector: (row) => row.quantity,
    },
    {
      name: "Số lượng",
      selector: (row) => row.price,
    },
  ];
  return (
    <>
      <Toast />
      <CustomModal
        show={showModal}
        handleClose={handleClose}
        handleDelete={handleDelete}
      />
      <Table data={data} columns={columns} sub={false} />
    </>
  );
};

export default DetailOrder;
