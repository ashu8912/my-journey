import { defineConfig } from 'astro/config';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Draft notes for Ashu are written as <p class="ask">…</p> (or <span class="ask">).
// `npm run dev` shows them as dashed notes. After a production build, this removes
// them from every HTML file so they never reach the live site.
function stripAsks() {
  return {
    name: 'strip-asks',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const root = fileURLToPath(dir);
        for (const file of await readdir(root, { recursive: true })) {
          if (!file.endsWith('.html')) continue;
          const path = join(root, file);
          const html = await readFile(path, 'utf8');
          await writeFile(path, html.replace(/<(p|span) class="ask">[\s\S]*?<\/\1>/g, ''));
        }
      },
    },
  };
}

export default defineConfig({
  server: { port: 4321 },
  integrations: [stripAsks()],
});
