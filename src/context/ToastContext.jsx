import { createContext, useContext, useState } from "react";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const showToast = (message, type = "success", action = null) => {
    const id = Date.now();

    const newToast = {
      id,
      message,
      type,
      action, // UNDO handler
    };

    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {/* TOAST UI */}
      <div className="fixed bottom-5 right-5 flex flex-col gap-3 z-50">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`
              flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg text-white
              animate-fade-in
              ${
                toast.type === "success"
                  ? "bg-green-500"
                  : toast.type === "error"
                  ? "bg-red-500"
                  : "bg-cyan-500"
              }
            `}
          >
            {/* message */}
            <span>{toast.message}</span>

            {/* UNDO BUTTON */}
            {toast.action && (
              <button
                onClick={() => {
                  toast.action();      //undo logic
                  removeToast(toast.id);
                }}
                className="ml-3 underline text-white font-bold"
              >
                UNDO
              </button>
            )}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);