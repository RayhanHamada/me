import { getResumeMarkdown } from 'src/utils/resume';

export async function load() {
  const markdown = await getResumeMarkdown();

  return {
    markdown,
  };
}
