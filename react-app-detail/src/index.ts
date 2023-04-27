// import("./App");

const main = async () => {
  const { mount } = await import("./mount");
  mount(550);
};

export default main;

export const app = main();
