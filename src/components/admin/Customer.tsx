import React, { SetStateAction, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAppSelector } from "../../store/hooks";
import { UserState } from "../../store/userReducer";
import { getWithQuery, post } from "../../utils";

interface Props {
  customer: UserState;
  setCustomers: (value: SetStateAction<UserState[]>) => void;
}

interface CustomerDrop {
  [key: string]: any;
  PENDING_PAYMENTS: boolean;
  PENDING_APPROVAL: boolean;
  PENDING_DELIVERIES: boolean;
  COMPLETED_DELIVERIES: boolean;
}

function Customer({ customer, setCustomers }: Props) {
  const [open, setOpen] = useState<CustomerDrop>({
    PENDING_PAYMENTS: false,
    PENDING_APPROVAL: false,
    PENDING_DELIVERIES: false,
    COMPLETED_DELIVERIES: false,
  });
  const { user, page } = useAppSelector((state) => state.users);
  const [amount, setAmount] = useState<string | number>(0);

  const addPayment = async () => {
    try {
      const phone = customer.phone;
      if (!amount || amount == 0) {
        const n = toast.error("Amount required");
        return;
      }
      const res = await post("payments/create", {
        phone,
        amount: parseInt(amount as string),
      });
      console.log(res.data);
      const n = toast.success(res.data.msg);
      setAmount(0);
    } catch (err: any) {
      console.log(err);
      const n = toast.error(`Error: ${err.msg}`);
    }
  };

  const deliver = async () => {
    try {
      const res = await post(`super/deliver?customerId=${customer._id}`);
      console.log(res.data);
      const n = toast.success(res.data.msg);
    } catch (err: any) {
      console.log(err);
      const n = toast.error(`Error: ${err.msg}`);
    }
  };

  const approve = async (customerId: string) => {
    const { data: data2 } = await post(
      `users/approve?customerId=${customerId}&agentCode=${user?.agentCode}`
    );
    toast.success("Customer approved!");
    const res = await getWithQuery("users/customers", { approved: false });
    console.log(res.data);
    setCustomers(res.data.users);
  };

  useEffect(() => {
    console.log(open);
    console.log(amount);
  }, [open, amount]);

  /**
   * customer.approved && customer.paid && customer.delivered && 
customer.approved && customer.paid && customer.delivered && 
customer.approved && customer.paid && customer.delivered && 
   */

  return (
    <div className="flex flex-col cursor-pointer w-full">
      <div
        className="flex flex-col md:flex-row md:space-x-2 space-y-2 lg:space-x-32 justify-center py-2 md:items-center bg-white"
        onClick={() => setOpen((open) => ({ ...open, [page]: !open[page] }))}
      >
        <h1 className="text-sm lg:text-base">{customer.name}</h1>
        <h2 className="text-sm lg:text-base">{customer.phone}</h2>
        {customer.approved && !customer.paid && (
          <button className="lg:px-6 lg:py-3 shadow-md text-white bg-green-400 px-3 py-2">
            Add Payment
          </button>
        )}
        {!customer.approved && (
          <button
            className="lg:px-6 lg:py-3 shadow-md text-white bg-green-400 px-3 py-2 hover:px-5 hover:py-3 transform duration-200"
            onClick={() => approve(customer._id)}
          >
            Approve
          </button>
        )}
        {customer.approved && customer.paid && (
          <button
            className="lg:px-6 lg:py-3 shadow-md text-white bg-green-400 px-3 py-2 hover:px-5 hover:py-3 transform duration-200"
            onClick={deliver}
          >
            Deliver
          </button>
        )}
        {customer.approved && customer.paid && customer.delivered && (
          <button className="lg:px-6 lg:py-3 shadow-md text-white bg-green-400 px-3 py-2 hover:px-5 hover:py-3 transform duration-200">
            Renew
          </button>
        )}
        {customer.approved && customer.paid && customer.delivered && (
          <button className="lg:px-6 lg:py-3 shadow-md text-white bg-green-400 px-3 py-2 hover:px-5 hover:py-3 transform duration-200">
            Change
          </button>
        )}
        {customer.approved && customer.paid && customer.delivered && (
          <button className="lg:px-6 lg:py-3 shadow-md text-white bg-green-400 px-3 py-2 hover:px-5 hover:py-3 transform duration-200">
            Delete
          </button>
        )}
      </div>
      <div
        className={`${
          open.PENDING_PAYMENTS ? "flex" : "hidden"
        } justify-center py-2 px-2 items-center bg-white`}
      >
        <label className="p-2 flex items-center justify-between space-x-5">
          <span>Amount: </span>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            required={true}
            placeholder="100"
            className="border rounded form-input shadow ring-green-400 px-4 py-3 w-full mt-1 outline-none focus:ring"
          />
        </label>
        <input
          type="submit"
          value="Add"
          className="border rounded py-2 px-5 mt-1 bg-green-400 text-white cursor-pointer hover:px-7 hover:py-3 transform duration-200"
          onClick={addPayment}
        />
      </div>
      <div
        className={`${
          open.PENDING_APPROVAL || open.PENDING_DELIVERIES ? "flex" : "hidden"
        } justify-between py-2 px-2 items-center bg-white w-full flex-col sm:flex-row`}
      >
        <p>Phone: {customer.phone}</p>
        <p>Package(s) Ordered: {customer.packageNames?.map((p) => p)}</p>
        <p>Price: {customer.totalPrice}</p>
      </div>
      <div
        className={`${
          open.COMPLETED_DELIVERIES ? "flex" : "hidden"
        } justify-between py-2 px-2 items-center bg-white w-full flex-col sm:flex-row`}
      >
        <p>Completed</p>
      </div>
    </div>
  );
}

export default Customer;
