interface AlertProps {
  message: string;
  error: boolean;
}

const Alert = ({ message, error }: AlertProps) => {
  return (
    <div
      className={` ${
        error
          ? `bg-red-100  border-red-400 text-red-700`
          : `bg-green-100  border-green-400 text-green-700  `
      }  border px-4 py-3 rounded relative mt-4`}
      role="alert"
    >
      <strong className="font-bold">{error ? "Error!" : "Success!"} </strong>
      <span className="block sm:inline">{message}</span>
    </div>
  );
};

export default Alert;
