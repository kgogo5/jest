import React, { useEffect, useState } from "react";

const UserList = ({ users }: { users?: string[] }) => {
  const [title, setTitle] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTitle(true);
    }, 500);
  }, []);

  return (
    <>
      {title && <h2>유저 목록</h2>}
      <ul>
        {users?.map((user: string) => {
          return <li key={user}>{user}</li>;
        })}
      </ul>
    </>
  );
};

export default UserList;
