import { writable } from "svelte/store";
import { SITE_NAME } from "../constants";

export const title$ = writable(
  SITE_NAME
);