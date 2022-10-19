import type { Emitter } from 'mitt';
import mitt from 'mitt';
import type { AppRouteRecordRaw } from '#/route';

interface Events {
  siteBarChange: {
    routeRaw: AppRouteRecordRaw;
  };
  [key: string | symbol]: Recordable;
}

export const emitter: Emitter<Events> = mitt<Events>();
