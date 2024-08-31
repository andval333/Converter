import type { VueElement } from 'vue';
import type { AppLayoutsEnum } from 'layouts/layouts.types';

declare module 'vue-router' {
  interface RouteMeta {
    layoutComponent?: VueElement;
    layout?: AppLayoutsEnum;
  }
}

export enum RouteNamesEnum {
  home = 'home',
  convert = 'convert',
}
