import Lottie from "lottie-react";
import error from "../../assets/ERROR.json";

const ErrorElement = () => {
  const style = {
    width: "1000px",
    height: "600px",
  };
  return (
    <div className="flex justify-center">
      <Lottie style={style} animationData={error} />
    </div>
  );
};

export default ErrorElement;
