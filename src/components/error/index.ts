// TODO: Fix ts errors...
import { createBoundary } from '@crownframework/svelte-error-boundary';
import type { SvelteComponentDev } from 'svelte/internal';
import Component from './NodeError.svelte';

const createBoundaryTyped: (component: typeof SvelteComponentDev) => typeof SvelteComponentDev = createBoundary;
const ComponentTyped: typeof SvelteComponentDev = Component;

export const NodeErrorBoundary = createBoundaryTyped(ComponentTyped);