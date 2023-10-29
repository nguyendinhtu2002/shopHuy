import React, { useState, useEffect } from "react";
import Toast from "../LoadingError/Toast";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/LoadingError";
import * as UserService from "../../Services/UserService";
import { useMutationHooks } from "../../hooks/useMutationHooks";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};

const EditOrderMain = (props) => {
  const { id } = props;

  const [isAdmin, setIsAdmin] = useState(false);
  const [updateAdmin, setUpdateAdmin] = useState("false");
  const dispatch = useDispatch();
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
  const handleGetDetailsUser = async (id) => {
    const res = await UserService.getDetailsUser(id);
    setIsAdmin(res.data.isAdmin);
    // dispatch(updateProductSingle({ res }));
  };
  const mutation = useMutationHooks((data) => {
    const { id, access_token, ...rests } = data;
    UserService.updateUser(id, rests, access_token);
  });
  const handleUpdate = (e) => {
    e.preventDefault();
    const access_token = JSON.parse(localStorage.getItem("access_token"));
    mutation.mutate({
      id: id,
      isAdmin: updateAdmin,
      access_token,
    });
  };
  const { data, error, isLoading, isError, isSuccess } = mutation;

  useEffect(() => {
    handleGetDetailsUser(id);
    if (!error && isSuccess) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.success("Thành công!", Toastobjects);
      }
    } else if (error) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error(
          error.response.data.message,
          Toastobjects
        );
      }
    }
  }, [id, error, isSuccess]);

  return (
    <>
      <Toast />
      <section className="content-main" style={{ maxWidth: "1200px" }}>
        <form onSubmit={handleUpdate}>
          <div className="content-header">
            <h2 className="content-title text-capitalize">Sửa thông tin người dùng</h2>
          </div>

          <div className="row mb-4">
            <div className="col-xl-12 col-lg-12">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  {/* Error Loading */}
                  {false && <Message variant="alert-danger">error</Message>}
                  {/* Update Loading */}

                  {/* {productSingleStatus && <Loading />} */}

                  {/* productSingleStatus Loading */}
                  {false ? (
                    <Loading />
                  ) : (
                    <>
                      <div className="mb-4">
                        <label htmlFor="product_title" className="form-label">
                          Admin
                        </label>
                        {isAdmin ? (
                          <select
                            class="form-select"
                            aria-label="Default select example"
                            defaultValue={"true"}
                            onChange={(e) => setUpdateAdmin(e.target.value)}
                          >
                            {/* <option selected>Open this select menu</option> */}
                            <option value="true">True</option>
                            <option value="false">False</option>
                          </select>
                        ) : (
                          <select
                            class="form-select"
                            aria-label="Default select example"
                            defaultValue={"false"}
                            onChange={(e) => setUpdateAdmin(e.target.value)}
                          >
                            {/* <option selected>Open this select menu</option> */}
                            <option value="false">False</option>
                            <option value="true">True</option>
                          </select>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>

        <div className="d-flex gap-1 justify-content-end">
          <Link to="/users" className="btn btn-outline-secondary border border-2 text-dark">
            Quay về
          </Link>
          <div>
            <button type="submit" className="btn btn-success">
              Hoàn thành
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default EditOrderMain;
