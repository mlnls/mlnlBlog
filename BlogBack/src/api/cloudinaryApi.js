import config from "../config/cloudconfig";

const { cloudinaryName, cloudinaryKey } = config;

const cloudinaryApi = async (imageFile) => {
  const url = `https://api.cloudinary.com/v1_1/${cloudinaryName}/image/upload/`;

  const formData = new FormData();

  formData.append("api_key", cloudinaryKey);
  formData.append("upload_preset", "mlnls");
  formData.append("timestamp", Date.now() / 1000 || 0);
  formData.append("file", imageFile);

  const configOfUpload = {
    header: { "Content-Type": "multipart/form-data" },
  };

  const { data } = await axios.post(url, formData, configOfUpload);

  return data.url;
};
