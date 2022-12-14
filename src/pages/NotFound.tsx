import React, { useEffect } from "react";

function NotFound() {
  interface Obj {
    num1: number;
    num2?: number;
    test?: any;
    test2?: any;
  }

  const obj: Obj = {
    num1: 0,
    test: undefined,
    test2: "",
  };
  obj.num2 = obj.num1 * 2;

  useEffect(() => {
    let query = "";
    Object.entries(obj).forEach((value: any) => {
      if (!value[1] && value[1] !== false && value[1] !== 0) return;
      query = query.concat(`${value[0]}=${value[1]} `);
    });
    query = query.trim().split(" ").join("&");
  });

  return (
    <div>
      <h1 className="text-3xl font-bold text-center">404 Page Not Found</h1>
    </div>
  );
}

export default NotFound;
