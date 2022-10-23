import { goto } from "$app/navigation";
import { page } from "$app/stores";

type ParamSettings = {
  remove: true
}

export const updateUrlParameters = (params: Record<string, string | boolean | number | ParamSettings>) => {
  page.subscribe(
    ({ url }) => {
      const newUrl = new URL(url);
      Object.entries(params).forEach(([key, value]) => {
        if(typeof value === 'object') {
          if(value.remove) newUrl.searchParams.delete(key);
        } else {
          newUrl.searchParams.set(key, "" + value);
        }
      });

      goto(newUrl.toString(), {
        replaceState: true,
        noscroll: true,
        keepfocus: true
      });
    }
  )();
}
