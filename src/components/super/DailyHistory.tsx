import React, { SetStateAction, useEffect, useState } from "react";
import {
  getAdminByCode,
  getCustomer,
  getSuperDailyHistory,
} from "../../services";
import { HistoryItem, HistoryDetails } from "../../utils";
import PaymentHistories from "./PaymentHistories";
import CustomerHistories from "./CustomerHistories";
import DeliveryHistories from "./DeliveryHistories";

interface Props {
  day: string;
  historyDetails: HistoryDetails;
  bellysaveH: HistoryDetails;
  setSave: (value: SetStateAction<boolean>) => void;
}

function DailyHistory({ day, historyDetails, bellysaveH, setSave }: Props) {
  const [openPayments, setOpenPayments] = useState(false);
  const [openCustomers, setOpenCustomers] = useState(false);
  const [openDeliveries, setOpenDeliveries] = useState(false);

  useEffect(() => {}, []);

  return (
    <div className="flex flex-col flex-1 items-center space-y-2">
      <h1 className="text-2xl font-bold">Daily History</h1>
      <div
        className="flex flex-col md:flex-row items-center space-x-6 cursor-pointer text-blue-500"
        onClick={() => setOpenPayments((prev) => !prev)}
      >
        <span>
          Total revenue for bellyfood on {new Date(day).toDateString()}
        </span>
        <span>₦{historyDetails?.totalAmount || 0}</span>
      </div>
      {historyDetails?.totalAmount > 0 && (
        <PaymentHistories
          setSave={setSave}
          openPayments={openPayments}
          histories={historyDetails.histories.filter(
            (historyItem) => historyItem.type === "payment"
          )}
        />
      )}
      <div
        className="flex flex-col md:flex-row items-center space-x-6 cursor-pointer text-red-500"
        onClick={() => setOpenPayments((prev) => !prev)}
      >
        <span>
          Total revenue for bellysave on {new Date(day).toDateString()}
        </span>
        <span>₦{bellysaveH?.totalAmount || 0}</span>
      </div>
      {bellysaveH?.totalAmount > 0 && (
        <PaymentHistories
          setSave={setSave}
          openPayments={openPayments}
          histories={bellysaveH.histories.filter(
            (historyItem) => historyItem.type === "payment"
          )}
        />
      )}
      <div
        className="flex flex-col md:flex-row space-x-6 items-center cursor-pointer mx-2 text-blue-500"
        onClick={() => setOpenCustomers((prev) => !prev)}
      >
        <span>
          Total bellyfood customers added on {new Date(day).toDateString()}
        </span>
        <span>{historyDetails?.numNewCustomer || 0}</span>
      </div>
      {historyDetails?.numNewCustomer > 0 && (
        <CustomerHistories
          openCustomers={openCustomers}
          histories={historyDetails.histories.filter(
            (historyItem) => historyItem.type === "creation"
          )}
        />
      )}
      <div
        className="flex flex-col md:flex-row space-x-6 items-center cursor-pointer mx-2 text-red-500"
        onClick={() => setOpenCustomers((prev) => !prev)}
      >
        <span>
          Total bellysave customers added on {new Date(day).toDateString()}
        </span>
        <span>{bellysaveH?.numNewCustomer || 0}</span>
      </div>
      {bellysaveH?.numNewCustomer > 0 && (
        <CustomerHistories
          openCustomers={openCustomers}
          histories={bellysaveH.histories.filter(
            (historyItem) => historyItem.type === "creation"
          )}
        />
      )}
      <div
        onClick={() => setOpenDeliveries((prev) => !prev)}
        className="flex flex-col md:flex-row items-center space-x-6 mx-2 cursor-pointer text-blue-500"
      >
        <span>Total deliveries made on {new Date(day).toDateString()}</span>
        <span>{historyDetails?.numNewDelivery || 0}</span>
      </div>
      {historyDetails?.numNewDelivery > 0 && (
        <DeliveryHistories
          openDeliveries={openDeliveries}
          histories={historyDetails.histories.filter(
            (historyItem) => historyItem.type === "delivery"
          )}
        />
      )}
    </div>
  );
}

export default DailyHistory;
