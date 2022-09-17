// packages
import SyncLoader from "react-spinners/SyncLoader";

const SpinLoader = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <SyncLoader size={10} color={"#5D97FF"} />
    </div>
  );
};

export default SpinLoader;
