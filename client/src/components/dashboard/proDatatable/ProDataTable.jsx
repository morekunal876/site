import "./ProDataTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getProducts } from "../../service/api";
import { useEffect } from "react";
import { deleteProduct } from "../../service/api";

const Datatable = () => {
  const [data, setData] = useState([]);
  const [deleted,setDeleted]=useState(false);

  const handleDelete = async(id) => {
    const response=await deleteProduct(id);
    setDeleted((oldState)=>oldState=response);
  };

  const getProductsfromApi = async () => {
    const products = await getProducts();
    setData(products);
  };

  useEffect(() => {
    getProductsfromApi();
  }, [deleted]);

  //need to set Data from backend--Done
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Product Name",
      width: 200,
      renderCell: (params) => {
        return <div className="rowitem">{params.row.title.shortTitle}</div>;
      },
    },

    {
      field: "stock",
      headerName: "Stock",
      width: 100,
      renderCell: (params) => {
        return <div className="rowitem">{params.row.quantity}</div>;
      },
    },

    {
      field: "price",
      headerName: "Price",
      width: 160,
      renderCell: (params) => {
        return <div className="rowitem">{params.row.price.cost}</div>;
      },
    },
    {
      field: "discount",
      headerName: "Discount",
      width: 150,
      renderCell: (params) => {
        return <div className="rowitem">{params.row.discount}</div>;
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New Product
        <Link to="/dashboard/products/newpro" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
