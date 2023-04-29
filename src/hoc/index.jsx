import { useState, useEffect } from "react";
const LoaderWrapper = (Component, idName) =>
  function HOC() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000); // Simulating a delay to show the loader
    }, []);

    return (
      <section className="loader">
        {isLoading ? (
          <div className="loader__main">
            <div className="col">
              <h4>MIREYA</h4>
              <div className="spinner"></div>
              <p>please wait</p>
            </div>
          </div>
        ) : (
          <>
            <span className="hash-span" id={idName}></span>
            <Component />
          </>
        )}
      </section>
    );
  };

export default LoaderWrapper;
