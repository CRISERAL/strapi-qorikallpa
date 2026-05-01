import type { Schema, Struct } from '@strapi/strapi';

export interface ContactContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_contact_contact_infos';
  info: {
    displayName: 'contact-info';
  };
  attributes: {};
}

export interface GalleryGalleryList extends Struct.ComponentSchema {
  collectionName: 'components_gallery_gallery_lists';
  info: {
    displayName: 'gallery-list';
  };
  attributes: {
    images: Schema.Attribute.Component<'shared.img', true>;
  };
}

export interface HomeHomeRooms extends Struct.ComponentSchema {
  collectionName: 'components_home_home_rooms';
  info: {
    displayName: 'home-rooms';
  };
  attributes: {};
}

export interface HomeHomeServices extends Struct.ComponentSchema {
  collectionName: 'components_home_home_services';
  info: {
    displayName: 'home-services';
  };
  attributes: {
    services: Schema.Attribute.Relation<'oneToMany', 'api::service.service'>;
  };
}

export interface RoomRoomList extends Struct.ComponentSchema {
  collectionName: 'components_room_room_lists';
  info: {
    displayName: 'room-list';
  };
  attributes: {};
}

export interface ServiceServiceList extends Struct.ComponentSchema {
  collectionName: 'components_service_service_lists';
  info: {
    displayName: 'service-list';
  };
  attributes: {};
}

export interface SharedImg extends Struct.ComponentSchema {
  collectionName: 'components_shared_imgs';
  info: {
    displayName: 'img';
  };
  attributes: {
    alt: Schema.Attribute.String;
    category: Schema.Attribute.String;
    src: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedSectionAbout extends Struct.ComponentSchema {
  collectionName: 'components_shared_section_abouts';
  info: {
    displayName: 'section-about';
  };
  attributes: {};
}

export interface SharedSectionHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_section_heroes';
  info: {
    displayName: 'section-hero';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'contact.contact-info': ContactContactInfo;
      'gallery.gallery-list': GalleryGalleryList;
      'home.home-rooms': HomeHomeRooms;
      'home.home-services': HomeHomeServices;
      'room.room-list': RoomRoomList;
      'service.service-list': ServiceServiceList;
      'shared.img': SharedImg;
      'shared.section-about': SharedSectionAbout;
      'shared.section-hero': SharedSectionHero;
    }
  }
}
