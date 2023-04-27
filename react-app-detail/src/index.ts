// import("./App");

const main = async () => {
  const { mount } = await import("./mount");
  mount(50834);
};

export default main;

export const app = main();
