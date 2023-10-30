import { ChangeEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ImageList from "./ImageList";

const Gallery = () => {
    const [searchTerm, setSearchTerm] = useState<string>("")
  return (
    <>
      <nav className="bg-stone-200 flex justify-evenly font-openSans py-5">
        <div className="flex gap-5 text-[#333232] text-3xl font-bold items-center">
          <p>DragNdrop</p>
          <FontAwesomeIcon icon={faCamera} />
          <p>Gallery</p>
        </div>
        <div className="flex items-center">
          <input
            className="border-2 rounded-l-lg w-96 shadow-sm py-2 font-semibold px-5 placeholder:text-sm placeholder:text-neutral-300"
            type="search"
            name="search"
            id="search"
            value={searchTerm}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setSearchTerm(event.target.value)}
            placeholder="search images by category"
          />
          <FontAwesomeIcon className="bg-[#333232] rounded-r-lg cursor-pointer text-white p-3 right-8 top-3" icon={faMagnifyingGlass} />
        </div>
      </nav>
      <ImageList search={searchTerm} />
    </>
  );
};
export default Gallery;
