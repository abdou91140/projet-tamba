import Layout from "../components/layout";

import {
  HomeIcon,
  HeartIcon,
  AcademicCapIcon,
  GlobeAltIcon,
} from "@heroicons/react/outline";
var features = [
  {
    name: "Infrastructure",
    description:
      "Construction d’un centre médical et d’une salle de classe à Koussan (Sénégal oriental).",
    icon: HomeIcon,
  },
  {
    name: "Santé",
    description: "Approvisionnement régulier de la pharmacie.",
    icon: HeartIcon,
  },
  {
    name: "Éducation",
    description: "Approvisionnement régulier de fournitures scolaires.",
    icon: AcademicCapIcon,
  },
  {
    name: "Eau potable",
    description: "Construction d’un puit.",
    icon: GlobeAltIcon,
  },
];

export default function Home() {
  return (
    <Layout>
      <div className="relative bg-yellow-100 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-yellow-100 z-1 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-red-600 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Data to enrich your</span>{" "}
                  <span className="block text-green-600 xl:inline">
                    online business
                  </span>
                </h1>
                <p className="mt-3 text-base text-yellow-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-yellow-300 hover:bg-red-700 md:py-4 md:text-lg md:px-10"
                    >
                      Get started
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-yellow-300 bg-green-600 hover:bg-yellow-200 md:py-4 md:text-lg md:px-10"
                    >
                      Live demo
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-contain sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1473594659356-a404044aa2c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80"
            alt="mother with her baby"
          />
        </div>
      </div>
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">
              Transactions
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-yellow-300 sm:text-4xl">
              A better way to send money
            </p>
            <p className="mt-4 max-w-2xl text-xl text-red-600 lg:mx-auto">
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </p>
          </div>
        </div>{" "}
        <div className="mt-10 flex justify-center">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className=" relative ">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white ">
                    <feature.icon
                      className="h-6 w-6 text-green-600"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-red-600">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-yellow-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Layout>
  );
}
