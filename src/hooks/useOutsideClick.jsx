import React, {useEffect, useState} from "react";

function useOutsideClick(ref) {
    const [isClickedOut, setIsClickedOut] = useState(false)
    useEffect(() => {
      
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsClickedOut(true)
        }
        else (setIsClickedOut(false))
      }
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
    return isClickedOut
  }

  export default useOutsideClick