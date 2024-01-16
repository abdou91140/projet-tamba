import Link from "next/link";
import Layout from "../components/layout";

var features = [
  /*     {
        name: "Infrastructure",
        description:
          "Accompagnement vers le logment de famille.",
          icon: HomeIcon
      }, */
  {
    name: "Environnement et Santé",
    description: "Éco-geste, soutien aux personnes malades et suivi des traitements.",
    icon: "images/environement.png"
  },
  {
    name: "Éducation civique",
    description: "Actions de nettoyage communautaire et distribution, partage de produit alimentaire.",
    icon: "images/young.png" },
  {
    name: "Culture",
    description: "Apprentissage, préservation et transmition des traditions multiethniques.",
    icon: "images/education.png" },
];

export default function Home() {
  return (
<Layout>
  <div className=" container mx-auto">

    {/* Header Section */}
    <div className="flex flex-col-reverse sm:flex-row justify-center items-top gap-20">
      <img className="h-auto sm:max-w-s mb-5 sm:mb-0 sm:p-5" src="/images/man_with_earth.png" alt="Man holding the earth" />
      <div className="text-center sm:text-left pt-10">
        <h1 className="text-4xl sm:text-5xl pt-5 font-semibold tracking-wide text-main-color">Diammo</h1>
        <h2 className="text-xl sm:text-2xl pt-3">Association des femmes <br/> de Diamaguene-ouest de Nguékhokh</h2>
      </div>
    </div>

    {/* Second Section */}
    <div className="flex flex-col items-center sm:flex-row justify-center pt-9 gap-10">
     <div className="flex flex-col"> <h2 className="text-4xl sm:text-5xl font-semibold tracking-wide text-main-color">Nos valeurs :</h2>
      <h2 className="text-xl sm:text-2xl mb-5 pt-3 sm:mb-0 sm:mr-5">Respect, écoute et solidarité.</h2></div>
      <img className= "h-auto sm:max-w-xs" src="/images/woman_helping.png" alt="Woman helping" />
    </div>

    {/* Features Section */}
    <div className="p-8 sm:p-20">
      <h2 className="text-3xl sm:text-5xl text-center mb-5 p-5 font-semibold tracking-wide text-main-color">Les actions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center mb-8" >
            <Link href={`/projects#${feature.name}`} ><img className="mb-2" src={feature.icon} alt={feature.name} />
            <h3 className="text-lg font-bold">{feature.name}</h3>
            <p className="text-gray-600">{feature.description}</p></Link>
          </div>
        ))}
      </div>
    </div>
  </div>
</Layout>

  );
}
