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

const Orders = (props) => {
  const { data } = props;
  const [loading, setLoading] = useState("");
  const [tempData, setTempData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isDeleteConfirmed, setIsDeleteConfirmed] = useState(false);
  const [id, setId] = useState("");
  const handleClose = () => {
    setShowModal(false);
    setIsDeleteConfirmed(false);
  };
  const confirmDelete = (id) => {
    setIsDeleteConfirmed(true);
    setShowModal(true);
    setId(id);
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
    await OrderService.getPay()
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
          setShowModal(false);
          hangldeGetAll();
          setTimeout(() => {
            window.location.reload();
          }, 1000);
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
      name: "Mã đơn hàng",
      selector: (row) => (
        <div>
          <Link
            to={`/orders/show/${row.orderCode}`}
            className="text-decoration-none"
          >
            {row.orderCode}
          </Link>
        </div>
      ),
    },
    {
      name: "Địa chỉ giao hàng",
      selector: (row) => row.local,
    },
    {
      name: "Số lượng",
      selector: (row) => row.totalQuantity,
    },
    {
      name: "Tổng tiền",
      selector: (row) => row.totalPrice,
    },
    {
      name: "Trạng thái",
      selector: (row) => row.status ? "Hoàn thành" : "Chưa hoàn thành",
    },
    {
      name: "Action",
      selector: (row) => (
        <div className="d-flex" style={{ width: "450px" }}>
          <Link
            to={`/orders/${row._id}/edit`}
            style={{ marginRight: "5px" }}
            // className="btn btn-sm btn-outline-success p-2 pb-3 col-md-6"
          >
            <button className="btn btn-warning">Sửa</button>
          </Link>
          <button
            type="button"
            onClick={() => confirmDelete(row._id)}
            className="btn btn-danger"
          >
            Xóa
          </button>
        </div>
      ),
    },
  ];
  return (
    <>
      <Toast />
      <CustomModal
        show={showModal}
        handleClose={() => handleClose()}
        handleDelete={() => handleDelete(id)}
      />
      <Table data={data} columns={columns} sub={false} />
    </>
  );
};

export default Orders;
