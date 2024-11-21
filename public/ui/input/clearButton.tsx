import { twMerge } from "tailwind-merge";
import { ClearIcon } from "../icons/clearIcon";

type Props = {
  onClose: () => void;
};

function ClearButton({ onClose }: Props) {
  return (
    <button
      onClick={onClose}
      className={twMerge(
        "flex justify-center items-center w-4 h-4 min-w-4 -m-4",
        "invisible peer-valid:visible",
      )}
    >
      <ClearIcon />
    </button>
  );
}

export { ClearButton };
