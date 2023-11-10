export const FormModel = (props) => ({
  id: props?.id ?? null,
  title: props?.title ?? "",
  poster_path: props?.poster_path ?? "",
  genres: props?.genres ?? [],
  overview: props?.overview ?? "",
  runtime: props?.runtime ?? "",
  vote_average: props?.vote_average ?? "",
  release_date: props?.release_date ?? "",
});
