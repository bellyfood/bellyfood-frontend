import React from "react";
import Header from "../../components/guest/Header";
import { useAppSelector } from "../../store/hooks";
import "./Customer.css";
import CustomerMenu from "../../components/customer/CustomerMenu";
import Dashboard from "../../components/customer/Dashboard";
import CustomerHistory from "../../components/customer/CustomerHistory";
import CustomerProfile from "../../components/customer/CustomerProfile";

interface Props {
  dashboard: () => string;
}

function Customer({ dashboard }: Props) {
  const { page } = useAppSelector((state) => state.users);

  const loadPage = () => {
    switch (page) {
      case "DASHBOARD":
        return <Dashboard />;
      case "CUSTOMER_HISTORY":
        return <CustomerHistory />;
      case "CUSTOMER_PROFILE":
        return <CustomerProfile />;
    }
  };

  return (
    <div>
      {/* <Header isAuthenticated={() => true} dashboard={dashboard} /> */}

      <CustomerMenu />
      {loadPage()}
    </div>
  );
}

export default Customer;
