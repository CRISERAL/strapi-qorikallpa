const UID = 'api::service.service';
const AUTO_LOCALES = ['en', 'fr'];

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

  async afterCreate(event: any) {
    const { result } = event;

    // Solo crear traducciones cuando el original sea español
    if (result.locale !== 'es') return;

    // Evita duplicados cuando Strapi hace borrador + publicación
    if (result.publishedAt !== null) return;

    if (!result.documentId) return;

    for (const locale of AUTO_LOCALES) {
      await strapi.documents(UID).create({
        locale,
        data: {
          title: result.title,
          description: result.description,
          images: result.images?.map((img: any) => img.id) ?? [],
        },
      });
    }
  },

  async afterDelete(event: any) {
    const { result } = event;

    if (!result?.documentId) return;

    await strapi.documents(UID).delete({
      documentId: result.documentId,
      locale: '*',
    });
  },
};