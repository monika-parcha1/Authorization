import React from "react";

function UserTable({ userDetails }) {
  return (
    <table>
      <tr>
        <th>UserName</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Company</th>
        <th>Website</th>
      </tr>
      <tbody>
        {userDetails?.length > 0 &&
          userDetails.map((user) => {
            return (
              <tr>
                <td>{user.name} </td>
                <td>{user.email} </td>
                <td>{user.phone} </td>
                <td>{user.company.name} </td>
                <td>{user.website} </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default UserTable;
