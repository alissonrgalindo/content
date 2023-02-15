import { object, string } from "prop-types";
import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./index.module.scss";

const cn = classNames.bind(styles);

export default function SettingsButton({ className, onDelete, onDuplicate }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDeleteClick = () => {
    onDelete();
    setIsOpen(false);
  };

  const handleDuplicateClick = () => {
    onDuplicate();
    setIsOpen(false);
  };
  return (
    <>
      <div className={cn("wrapper", className)}>
        <button className={cn("toggle")} onClick={() => setIsOpen(!isOpen)}>
          <svg
            width="3"
            height="14"
            viewBox="0 0 3 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 0C2.325 0 3 0.7 3 1.55556C3 2.41111 2.325 3.11111 1.5 3.11111C0.675 3.11111 0 2.41111 0 1.55556C0 0.7 0.675 0 1.5 0ZM1.5 10.8889C2.325 10.8889 3 11.5889 3 12.4444C3 13.3 2.325 14 1.5 14C0.675 14 0 13.3 0 12.4444C0 11.5889 0.675 10.8889 1.5 10.8889ZM1.5 5.44444C2.325 5.44444 3 6.14444 3 7C3 7.85556 2.325 8.55556 1.5 8.55556C0.675 8.55556 0 7.85556 0 7C0 6.14444 0.675 5.44444 1.5 5.44444Z"
              fill="currentColor"
            />
          </svg>
        </button>
        {isOpen && (
          <ul className={cn("menu")}>
            <li className={cn("item")} onClick={handleDeleteClick}>
              <svg
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.25 1.8V0H12.75V1.8H17V3.6H15.3V17.1C15.3 17.3387 15.2104 17.5676 15.051 17.7364C14.8916 17.9052 14.6754 18 14.45 18H2.55C2.32457 18 2.10837 17.9052 1.94896 17.7364C1.78955 17.5676 1.7 17.3387 1.7 17.1V3.6H0V1.8H4.25ZM3.4 3.6V16.2H13.6V3.6H3.4ZM5.95 6.3H7.65V13.5H5.95V6.3ZM9.35 6.3H11.05V13.5H9.35V6.3Z"
                  fill="currentColor"
                />
              </svg>
              Delete Card
            </li>
            <li className={cn("item")} onClick={handleDuplicateClick}>
              <svg
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.77778 3.6V0.899999C3.77778 0.661305 3.87728 0.432386 4.0544 0.263604C4.23152 0.094821 4.47174 0 4.72222 0H16.0556C16.306 0 16.5463 0.094821 16.7234 0.263604C16.9005 0.432386 17 0.661305 17 0.899999V13.5C17 13.7387 16.9005 13.9676 16.7234 14.1364C16.5463 14.3052 16.306 14.4 16.0556 14.4H13.2222V17.1C13.2222 17.5968 12.7972 18 12.2712 18H0.951056C0.826509 18.0007 0.703042 17.9779 0.587749 17.933C0.472456 17.8881 0.367609 17.822 0.279233 17.7384C0.190857 17.6547 0.120693 17.5553 0.0727735 17.4457C0.0248536 17.3362 0.000122187 17.2187 0 17.1L0.00283335 4.5C0.00283335 4.0032 0.427834 3.6 0.953889 3.6H3.77778ZM1.89172 5.4L1.88889 16.2H11.3333V5.4H1.89172ZM5.66667 3.6H13.2222V12.6H15.1111V1.8H5.66667V3.6Z"
                  fill="currentColor"
                />
              </svg>
              Duplicate Card
            </li>
          </ul>
        )}
      </div>
      {isOpen && (
        <button className={cn("backButton")} onClick={() => setIsOpen(!isOpen)}>
          close
        </button>
      )}
    </>
  );
}

SettingsButton.propTypes = {
  className: string,
  children: object,
};
