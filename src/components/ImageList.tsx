import { FC, useState, useEffect } from "react"
import axios from "axios"

interface Props {
    search: string;
}

interface Image {
    id: string;
    urls: {
        small: string;
    }
    alt_description: string;
}

const ImageList: FC<Props> = ({search}) => {
    const [images, setImages] = useState<Image[]>([])

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get(
                  `https://api.unsplash.com/search/photos?query=${search}&client_id=m6wb6GR2rvbdyY8kwiwqNlBBju398bcYJvSEKbQknfU`
                );
                console.log(response);
                setImages(response.data.results);

            } catch (error) {
                    console.error("Error fetching Images:", error)
            }
        }
        fetchImages();
    })
  return (
    <>
      <main className="flex flex-col gap-10 py-10 font-openSans">
        <section className="flex flex-col gap-5 items-center">
            <h1 className="text-4xl text-stone-500 font-bold">Drag And Drop To Arrange Images</h1>
            <p className="text-xl font-medium">Search results for <span className="underline">{search}</span></p>
        </section>

        <section className="grid grid-cols-3 gap-y-10 px-10 gap-x-10">
            {images.map((image) => (
                <div key={image.id}>
                    <img className="h-96 w-96 rounded-xl shadow-2xl" src={image.urls.small} alt={image.alt_description} />
                </div>
            ))}
        </section>
      </main>
    </>
  );
};
export default ImageList;
