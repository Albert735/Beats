import React from "react";
import Stepper from "react-stepper-horizontal";

function UserDetails() {
  return <h2>User details</h2>;
}

function Payment() {
  return <h2>Payment information</h2>;
}

function Confirmation() {
  return <h2>Booking is confirmed</h2>;
}

function App() {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = [
    { title: "Information" },
    { title: "Payment Details" },
    { title: "Complete order" },
  ];
  function getSectionComponent() {
    switch (activeStep) {
      case 0:
        return <UserDetails />;
      case 1:
        return <Payment />;
      case 2:
        return <Confirmation />;
      default:
        return null;
    }
  }

  return (
    <div className="flex justify-center items-center w-full ">
      <Stepper
        steps={steps}
        activeStep={activeStep}
        className="flex flex-col w-[5rem]"
      />
    </div>
  );
}

export default App;
