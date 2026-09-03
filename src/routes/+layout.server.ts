import { createHash } from 'node:crypto';
import { readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

export const prerender = true;

export function load() {
  const filePath = join(process.cwd(), 'static', 'Aaditya_Raj_CV.pdf');
  const stat = statSync(filePath);
  const hash = createHash('md5').update(readFileSync(filePath)).digest('hex').slice(0, 8);

  return {
    cv: {
      href: `/Aaditya_Raj_CV.pdf?v=${hash}`,
      sizeLabel: `${(stat.size / 1024).toFixed(1)} KB`
    }
  };
}
