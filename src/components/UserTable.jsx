import classNames from "classnames";
import React, { useEffect, useState } from "react";
import axios from "axios";

const tableClass =
  "table-auto text-center w-[55rem] border-spacing-0 border-collapse rounded-2xl text-center mx-auto mt-5";
const cardClass =
  "rounded-2xl p-2 mt-4 flex flex-col items-center gap-y-3 h-72 p-10 mx-10";
const shadowClass =
  "shadow-inner shadow-3xl shadow-black dark:shadow-inner dark:shadow-3xl dark:shadow-white";
const textClass = "text-xl  text-[#171717]  dark:text-[#F9F9F9]";
const bgClass = "bg-[#F9F9F9] dark:bg-[#171717]";

const UserTable = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3005/data");
    setUser(result.data);
  };

  return (
    <div className="overflow-x-auto pb-6">
      <div className={classNames(textClass, "text-center mt-4 text-2xl")}>
        <p>User Data</p>
      </div>
      {/* card */}
      <>
        {users.length &&
          users.map((user) => {
            return (
              <div
                className={classNames(
                  cardClass,
                  shadowClass,
                  textClass,
                  bgClass,
                  "block md:hidden"
                )}
                key={user.id}
              >
                <div>
                  <img key={user.avatar} src={user.avatar} alt="hello" />
                </div>
                <div>
                  <p>
                    {user.first_name} {user.last_name}
                  </p>
                </div>
                <div>
                  <p>{user.email}</p>
                </div>
              </div>
            );
          })}
      </>
      {/* End */}
      {/* table */}
      <table
        className={classNames(
          tableClass,
          shadowClass,
          textClass,
          bgClass,
          "hidden md:block"
        )}
      >
        <thead>
          <tr>
            <td className="px-12 py-4">&nbsp;</td>
            <td className="px-12 py-4">Id</td>
            <td className="px-12 py-4">Name</td>
            <td className="px-12 py-4">Email</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td className="whitespace-nowrap px-12 py-3">
                  <img key={user.avatar} src={user.avatar} alt="hello" />
                </td>
                <td className="whitespace-nowrap px-12 py-3">{user.id}</td>
                <td className="whitespace-nowrap px-12 py-3">
                  {user.first_name} {user.last_name}
                </td>
                <td className="whitespace-nowrap px-12 py-3">{user.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
