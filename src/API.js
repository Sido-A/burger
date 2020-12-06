export const getData = async () => {
  await fetch("db.json")
    .then((res) => res.json())
    .then((res) => res);
};
