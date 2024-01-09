import Layout from "../components/layout";

var projects = [
  {
    name: "Infrastructure",
    description:
      "Accompagnement vers le logment de famille.",
  },
  {
    name: "Santé",
    description: "Accompagnement de malade et suivie de traitement.",
  },
  {
    name: "Éducation",
    description: "Approvisionnement régulier de fournitures scolaires.",
  },
  {
    name: "Eau potable",
    description: "Construction d’un puit.",
  },
];
export default function Projects() {
  return (
    <Layout>
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8">
        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-red-600 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Infrastructure</span>{" "}
              <span className="block text-green-600 xl:inline">
                au Sénégal oriental
              </span>
            </h1>
            <p className="mt-3 text-base text-yellow-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
          </div>
        </main>
        <div className="">
          <img
            className="h-56 w-full object-contain sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1473594659356-a404044aa2c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
            alt="mother with her baby"
          />
        </div>
        <div className="">
          <img
            className="h-56 w-full object-contain sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1473594659356-a404044aa2c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
            alt="mother with her baby"
          />
        </div>
        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-red-600 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Infrastructure</span>{" "}
              <span className="block text-green-600 xl:inline">
                au Sénégal oriental
              </span>
            </h1>
            <p className="mt-3 text-base text-yellow-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
          </div>
        </main>
      </div>
      <br></br>
    </Layout>
  );
}
