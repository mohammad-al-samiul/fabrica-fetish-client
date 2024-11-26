import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { IProps } from "./FFInput";
import { useFormContext } from "react-hook-form";
import { FaUpload, FaUserCircle } from "react-icons/fa"; // Import the profile photo icon

interface IFileProps extends IProps {}

export default function FFInputFile({ label, name }: IFileProps) {
  const [imageFile, setImageFile] = useState<File | null>(null);

  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null; // Only take the first file
    if (file) {
      setValue(name, file); // Register the file in form state
      setImageFile(file); // Set the file in the component state
    }
  };

  // Check if the error is a valid message string
  const errorMessage = errors[name]?.message;
  //console.log("image", imageFile);
  return (
    <div className="w-full">
      <input
        {...register(name, { required: "Profile photo is required" })}
        type="file"
        id={name}
        onChange={handleFile}
        className="hidden"
      />
      <label
        className="flex h-14 w-full cursor-pointer items-center justify-center rounded-xl border-2 border-default-200 text-default-500 shadow-sm transition-all duration-100 hover:border-default-400"
        htmlFor={name}
      >
        {/* Upload Icon */}
        <FaUpload size={30} className="text-gray-400 mr-2" />

        {label}
      </label>

      {/* Show upload status message */}
      {imageFile && (
        <div className="mt-2 text-center text-default-800">
          {imageFile.name} {/* Display the file name */}
        </div>
      )}

      {/* Error message */}
      {errorMessage && typeof errorMessage === "string" && (
        <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
      )}
    </div>
  );
}
