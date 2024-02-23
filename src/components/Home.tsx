import CardList from "./Card/CardList";
import Search from "./Search";
import Dropdown from "./Dropdown";

const Home  = () => {
  return (
    <>
    <section className="flex flex-col sm:flex-row justify-between px-8 sm:px-10 my-9">
      <Search/>
      <Dropdown />
    </section>     
      <section className="grid gap-8 sm:grid-cols-3 lg:grid-cols-4 sm:gap-6 px-8 justify-center">
        <CardList />
      </section>
    </>
  );
};

export default Home;
