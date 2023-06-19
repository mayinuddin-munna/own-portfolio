import React from "react";

const useLoading = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setShowLoader(false);
    }, 30000);
    return () => clearTimeout(timeOut);
  }, []);
  return (
    <div>
      {showLoader ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div>
          <h1>Content Loaded!</h1>
        </div>
      )}
    </div>
  );
};

export default useLoading;
