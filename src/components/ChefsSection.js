import ChefCard from "./ChefCard";

export default function ChefsSection() {
  const chefs = [
    {
      name: "Gordon Ramsay",
      img: "/img/topchefs/chef1.jpg",
      recipesCount: "10",
      cuisine: "French",
    },
    {
      name: "Sanjeev Kapoor",
      img: "/img/topchefs/chef2.jpg",
      recipesCount: "15",
      cuisine: "Indian",
    },
    {
      name: "Shirley Chung",
      img: "/img/topchefs/chef3.jpg",
      recipesCount: "12",
      cuisine: "Chinese",
    },
    {
      name: "Bobby Flay",
      img: "/img/topchefs/chef4.jpg",
      recipesCount: "20",
      cuisine: "American",
    },
    {
      name: "Giada De Laurentiis",
      img: "/img/topchefs/chef5.jpg",
      recipesCount: "17",
      cuisine: "Italian",
    },
    {
      name: "Pabilis Silva",
      img: "/img/topchefs/chef6.jpg",
      recipesCount: "25",
      cuisine: "Sri Lankan",
    },
  ];
  return (
    <div className="section chefs">
      <h1 className="title">Our Top Chefs</h1>
      <div className="top-chefs-container">
        {/*<ChefCard />
                <ChefCard />
                <ChefCard />
                <ChefCard />
                <ChefCard />
                <ChefCard />*/}
        {chefs.map((chef) => (
          <ChefCard key={chef.name} chef={chef} />
        ))}
      </div>
    </div>
  );
}
