import { useEffect, useState } from "react";

const useImage = (category: any, fileName: any) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [image, setImage] = useState<string>("");

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await import(`./alpaca/${category}/${fileName}`); // change relative path to suit your needs
        setImage(response.default);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [fileName, category]);

  return {
    loading,
    error,
    image,
  };
};

export default useImage;
