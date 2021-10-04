import React, { useCallback, useEffect, useState, createContext } from 'react';

const ToastContext = createContext();

export default ToastContext;

export function ToastContextProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(
        () => setToasts((toasts) => toasts.slice(1)),
        3000
      );
      return () => clearTimeout(timer);
    }
  }, [toasts]);

  const addToast = useCallback(
    function (toast) {
      setToasts((toasts) => [...toasts, toast]);
    },
    [setToasts]
  );

  return (
    <ToastContext.Provider value={addToast}>
      {children}
      <div className="container fixed flex justify-end top-8 right-8">
        {toasts.reverse().map((toast, index) => (
          <div
            className={`container w-${toast.width || 48} mb-4 p-4 bg-${toast.color || 'green'}-600 rounded-md`}
            key={toast.id}
          >
            <p className="text-white">
              {toast.message}
            </p>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
