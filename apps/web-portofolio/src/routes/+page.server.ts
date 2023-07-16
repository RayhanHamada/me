import octokit from 'src/utils/octokit';

export async function load(event) {
  const avatarURL = octokit.rest.users
    .getByUsername({
      username: 'RayhanHamada',
    })
    .then((res) => res.data.avatar_url);

  return {
    avatarURL,
  };
}
