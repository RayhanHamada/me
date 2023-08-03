import { marked } from 'marked';
import { gfmHeadingId } from 'marked-gfm-heading-id';
import { mangle } from 'marked-mangle';
import { markdownResumeURL } from 'src/utils/constants';

marked.use(mangle(), gfmHeadingId());

export async function getResumeMarkdown() {
  //   get markdown resume
  const [fetchMarkdown] = await Promise.allSettled([fetch(markdownResumeURL)]);

  if (fetchMarkdown.status === 'rejected') {
    return '';
  }
  const rawText = await fetchMarkdown.value.text();
  const markdown = marked(rawText);

  return markdown;
}
