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
  const markdown = await fetchMarkdown.value.text();

  return {
    markdown,
  };
}
