const a = () => {
  console.log(this);
};
const b = new a();
