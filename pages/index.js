import Layout from "../components/layout";
import { HomeIcon, HeartIcon, AcademicCapIcon, GlobeIcon } from "@heroicons/react/outline";

var features = [
  {
    name: "Infrastructure",
    description:
      "Accompagnement vers le logment de famille.",
    icon: HomeIcon
  },
  {
    name: "Santé",
    description: "Accompagnement de malade et suivie de traitement.",
    icon: HeartIcon
  },
  {
    name: "Éducation",
    description: "Approvisionnement régulier de fournitures scolaires.",
    icon: AcademicCapIcon
  },
  {
    name: "Eau potable",
    description: "Construction d’un puit.",
    icon: GlobeIcon
  },
];

export default function Home() {
  return (
    <Layout>
      <div className="container mx-auto">
        <div class="mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Site en construction</h1>
        </div> {/* Woman Image */}
        <div className="flex justify-center ">
          <img width={850} src="/images/african-woman.png" alt="African Woman" />
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {/*    {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <feature.icon className="h-12 w-12 mb-2" />
              <h3 className="text-xl font-bold">{feature.name}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))} */}
        </div>
      </div>
    </Layout>
  );
}
