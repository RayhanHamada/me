const toDeviconPath = (icon: string) => {
  const [first, ...last] = icon.split('-');

  return `${first}/${first}-${last.join('-')}`;
};

export const links = [
  {
    link: 'https://github.com/RayhanHamada',
    logo: 'github-original',
  },
  {
    link: 'https://www.linkedin.com/in/muhammad-rayhan-hamada-budiman-033021194/',
    logo: 'linkedin-original',
  },
].map((e) => ({
  ...e,
  logo: toDeviconPath(e.logo),
}));

export const cvLink =
  'https://1drv.ms/b/s!AkHRxXV_ERCXihIgArOYtt3qfha9?e=aCYYs1';

export const markdownResumeURL =
  'https://raw.githubusercontent.com/RayhanHamada/me/main/packages/resume/readme.md';
