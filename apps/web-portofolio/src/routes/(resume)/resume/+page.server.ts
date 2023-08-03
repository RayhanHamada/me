import { marked } from 'marked';
import { gfmHeadingId } from 'marked-gfm-heading-id';
import { mangle } from 'marked-mangle';

marked.use(mangle(), gfmHeadingId());

export async function load() {
  //   get markdown resume
  const [fetchMarkdown] = await Promise.allSettled([
    fetch(
      'https://raw.githubusercontent.com/RayhanHamada/me/main/packages/resume/readme.md'
    ),
  ]);

  if (fetchMarkdown.status === 'rejected') {
    return {
      markdown: '',
    };
  }
  const rawText = await fetchMarkdown.value.text();
  const markdown = marked(rawText);

  return {
    markdown,
  };
}
