export default class cloudinaryUpload {
  constructor() {
    this.rating = 5;
    this.content = "";
    this.imageUrl = "";
  }

  async uploadImage(imageFile) {
    const imageUrl = await apiService.upload(imageFile);

    this.imageUrl = imageUrl;
    this.publish();
  }
}
