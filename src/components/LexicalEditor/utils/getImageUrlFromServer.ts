import { postImage } from "@services/image";

export const getImageUrlFromServer = async (file: File) => {
  const encodedFile = new File([file], encodeURI(file.name), {
    type: file.type,
  });
  const formData = new FormData();
  formData.append("file", encodedFile);

  try {
    const { imageUrl } = await postImage(formData);
    return imageUrl;
  } catch (err: any) {
    console.error(err);
  }
};
