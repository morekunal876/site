import './datatable.scss'
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getUsersList } from '../../service/api';
import { useEffect } from 'react';

const Datatable = () => {
  const [data, setData] = useState([]);

  const getUsers=async()=>{
    const response=await getUsersList();
    const users=response.map((row) => {
  const { _id, ...rest } = row;
  return { id: _id, ...rest };
});
    setData(users)
  }

  useEffect(() => {
    getUsers();
  
    return () => {
      setData("");
    }
  }, [])
  

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/dashboard/users/${params.id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
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
        User List
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;