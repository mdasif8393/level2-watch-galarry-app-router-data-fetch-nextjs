import Products from "@/components/UI/Products";

//function based data fetch
// export const getData = async () => {
//   const res = await fetch("http://localhost:5000/watches", {
//     cache: "force-cache",
//     next: {
//       revalidate: 10,
//     }
//   });
//   const data = await res.json();

//   return data;
// }

const HomePage = async () => {

  const res = await fetch("http://localhost:5000/watches", {
    cache: "force-cache",
    next: {
      revalidate: 10,
    }
  });
  const data = await res.json();

  // get data from function getData()
  // const data = await getData();


  return (
    <div>
      <h1 className="text-4xl text-center my-10">Welcome To Watch Gallery</h1>
      <div className="col-span-9 grid grid-cols-3 gap-5 p-10 w-[80%] mx-auto">
        {
          data.map(data => <Products key={data.id} product={data}></Products>)
        }
      </div>

    </div>
  );
};

export default HomePage;
