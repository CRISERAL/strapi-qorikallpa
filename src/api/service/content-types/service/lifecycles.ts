function getImagesCount(images: any): number {
  if (!images) return 0;

  if (Array.isArray(images)) return images.length;

  if (Array.isArray(images.connect)) return images.connect.length;

  if (Array.isArray(images.set)) return images.set.length;

  return 0;
}

export default {
  beforeCreate(event: any) {
    const { data } = event.params;

    if (getImagesCount(data.images) > 4) {
      throw new Error('Solo puedes subir máximo 4 imágenes.');
    }
  },

  beforeUpdate(event: any) {
    const { data } = event.params;

    if (getImagesCount(data.images) > 4) {
      throw new Error('Solo puedes subir máximo 4 imágenes.');
    }
  },
};