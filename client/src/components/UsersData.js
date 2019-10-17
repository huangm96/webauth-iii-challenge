import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import UserCard from "./UserCard";

const UsersData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      axiosWithAuth()
        .get("http://localhost:5656/api/users/accounting")
        .then(res => {
          console.log(res);
          setData(res.data.departmentUsers);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, []);
  return (
    <div>
      <h1>Users Data</h1>
      {data.map(data => {
        return <UserCard key={data.id} data={data} />;
      })}
    </div>
  );
};

export default UsersData;
