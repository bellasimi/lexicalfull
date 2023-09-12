import axiosInstance from "@lib/axios";

export const postImage = async (formData: FormData) => {
  const { data } = await axiosInstance.post<{
    result: boolean;
    imageUrl: string;
  }>("/api/v1/images", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return data;
};
