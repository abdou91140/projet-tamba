import Layout from "../components/layout";

var features = [
  /*     {
        name: "Infrastructure",
        description:
          "Accompagnement vers le logment de famille.",
          icon: HomeIcon
      }, */
  {
    name: "Santé",
    description: "Accompagnement de malade et suivie de traitement.",
    icon: "images/environement.png"
  },
  {
    name: "Éducation civique",
    description: "Néttoyage communautaire, distribution de repas.",
    icon: "images/young.png" },
  {
    name: "Culture",
    description: "Apprentissage et transmition des traditions multiethnique.",
    icon: "images/education.png" },
];

export default function Home() {
  return (
    <Layout>
      <div className="container mx-auto">

        <div className="flex justify-evenly items-top" >
          <img width={350} src="/images/man_with_earth.png" alt="Man holding the earth" /><div>
            <h1 className="text-6xl pt-5">Diammo</h1> <h2 className="text-2xl pt-3">Association des femmes <br/> de Diamaguene-ouest de Nguékhokh</h2>
          </div>
        </div>
        <div className="flex justify-evenly items-center pt-9" >
         
     <h2 className="text-2xl">Pour aider les femmes</h2>
           <img width={350} src="/images/woman_helping.png" alt="Man holding the earth" /><div></div>
        </div>
        {/* Features */}
        <div className="p-20 ">
          <h2 className="text-5xl text-center p-20">Les actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center">
               <img src={feature.icon} /> 
                <h3 className="text-xl font-bold">{feature.name}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
