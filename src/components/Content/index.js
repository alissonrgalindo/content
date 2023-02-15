import { string } from "prop-types";
import classNames from "classnames/bind";
import styles from "./index.module.scss";

import Image from "next/image";

import Button from "../Button";
import SettingsButton from "../SettingsButton";

const cn = classNames.bind(styles);

export default function Content({
  className,
  title,
  description,
  image,
  button,
  settingButton,
}) {
  const handleDelete = () => {
    // Implement delete card functionality here
    console.log("Delete card clicked!");
  };

  const handleDuplicate = () => {
    // Implement duplicate card functionality here
    console.log("Duplicate card clicked!");
  };

  return !title ? null : (
    <div className={cn("wrapper", className)}>
      <div className={cn("header")}>
        <h1 className={cn("title")}>{title}</h1>
        <SettingsButton onDelete={handleDelete} onDuplicate={handleDuplicate} />
      </div>
      <div className={cn("content")}>
        <div className={cn("media")}>
          {image ? (
            <Image src={image} alt="Picture" width={319} height={283} />
          ) : (
            <svg
              width="319"
              height="283"
              viewBox="0 0 319 283"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.9 235.833V177.661C31.9 171.406 29.3793 165.408 24.8925 160.985C20.4057 156.562 14.3203 154.078 7.975 154.078H0V128.922H7.975C11.1169 128.922 14.228 128.312 17.1307 127.127C20.0334 125.942 22.6709 124.205 24.8925 122.015C27.1142 119.825 28.8765 117.225 30.0788 114.364C31.2812 111.503 31.9 108.436 31.9 105.339V47.1667C31.9 34.6573 36.9413 22.6603 45.9149 13.8148C54.8886 4.96933 67.0594 0 79.75 0H95.7V31.4444H79.75C75.5198 31.4444 71.4629 33.1009 68.4716 36.0494C65.4804 38.9979 63.8 42.9969 63.8 47.1667V111.628C63.8017 118.247 61.6842 124.698 57.7492 130.062C53.8142 135.425 48.2624 139.428 41.8847 141.5C48.2624 143.572 53.8142 147.575 57.7492 152.938C61.6842 158.302 63.8017 164.753 63.8 171.372V235.833C63.8 240.003 65.4804 244.002 68.4716 246.951C71.4629 249.899 75.5198 251.556 79.75 251.556H95.7V283H79.75C67.0594 283 54.8886 278.031 45.9149 269.185C36.9413 260.34 31.9 248.343 31.9 235.833ZM287.1 177.661V235.833C287.1 248.343 282.059 260.34 273.085 269.185C264.111 278.031 251.941 283 239.25 283H223.3V251.556H239.25C243.48 251.556 247.537 249.899 250.528 246.951C253.52 244.002 255.2 240.003 255.2 235.833V171.372C255.198 164.753 257.316 158.302 261.251 152.938C265.186 147.575 270.738 143.572 277.115 141.5C270.738 139.428 265.186 135.425 261.251 130.062C257.316 124.698 255.198 118.247 255.2 111.628V47.1667C255.2 42.9969 253.52 38.9979 250.528 36.0494C247.537 33.1009 243.48 31.4444 239.25 31.4444H223.3V0H239.25C251.941 0 264.111 4.96933 273.085 13.8148C282.059 22.6603 287.1 34.6573 287.1 47.1667V105.339C287.1 111.594 289.621 117.592 294.107 122.015C298.594 126.438 304.68 128.922 311.025 128.922H319V154.078H311.025C304.68 154.078 298.594 156.562 294.107 160.985C289.621 165.408 287.1 171.406 287.1 177.661Z"
                fill="#EDEBEB"
              />
            </svg>
          )}
        </div>

        {description && <h2 className={cn("description")}>{description}</h2>}
      </div>
      <div className={cn("footer")}>
        <Button>Dismiss</Button>
      </div>
    </div>
  );
}

Content.propTypes = {
  className: string,
  title: string,
  subtitle: string,
};
