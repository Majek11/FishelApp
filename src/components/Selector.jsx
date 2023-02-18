import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

const Selector = ({ DropDownList, callback }) => {
  const selectionName = "Subject";
  const labeName = "Select Subject";
  const placeholderName = "Enter Subject";
  const listItems = DropDownList;

  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <div className="text-[12px] sm:text-[16px] font-regular">
      <div
        onClick={() => setOpen(!open)}
        className={` min-w-[200px] w-full h-[35px] p-2 lg:py-4 flex cursor-pointer items-center justify-between rounded overflow-hidden border-2 hover:border-[#8BE3F9] ${
          !selected && "text-[#E3F1F4]"
        }`}
      >
        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected
          : labeName}
        <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
      </div>
      <ul
        className={` rounded-lg mt-2 overflow-y-auto my-scrollbar ${
          open ? "max-h-60" : "max-h-0"
        } `}
      >
        <div className="flex items-center px-2 sticky top-0 bg-[#E3F1F4]">
          <AiOutlineSearch size={18} className="text-gray-700" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder={placeholderName}
            className="text-[#353C3E] p-2 outline-none bg-[#E3F1F4]"
          />
        </div>
        {listItems?.map((listItem,index) => (
          <li
            key={index}
            className={`p-2 text-sm text-[#353C3E] bg-[#E3F1F4] hover:bg-[#ffffff44]  cursor-pointer hover:text-[#E3F1F4]
            ${
              listItem?.subject_name?.toLowerCase() === selected?.toLowerCase() &&
              "bg-[#353C3E]  "
            }
            ${
              listItem?.subject_name?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
            onClick={() => {
              if (listItem?.subject_name?.toLowerCase() !== selected.toLowerCase()) {
                setSelected(listItem?.subject_name);
                setOpen(false);
                callback(listItem?.subject_name);
                setInputValue("");
              }
            }}
          >
            {listItem?.subject_name} ({listItem?.number_of_questions})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Selector;
