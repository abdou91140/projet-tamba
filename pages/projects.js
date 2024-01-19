import Layout from "../components/layout";
var projects = [
  {
    name: "Environnement et Santé",
    description: "l'initiative fusionne écologie et solidarité. En promouvant des gestes respectueux de l'environnement, comme le recyclage, elle sensibilise la communauté. Simultanément, des bénévoles offrent un soutien concret aux personnes malades, assurant transports et repas adaptés. Une approche concise et holistique qui transforme la région, équilibrant respect de la nature et bien-être humain.",
    icon: "images/environement.png"
  },
  {
    name: "Éducation civique",
    description: "Le nettoyage communautaire et la distribution alimentaire uni notre communauté. Des volontaires rendent nos espaces plus propres, éliminant déchets et polluants. Le partage des produits alimentaires, soutien les familles dans le besoin. Une alliance d'actions concrètes qui renforce notre vivre ensemble.",
    icon: "images/young.png"
  },
  {
    name: "Culture",
    description: "Au cœur de notre quartier, des efforts d'apprentissage, de préservation et de transmission des traditions façonnent notre identité collective. Les membres s'engagent à préserver les coutumes des différentes ethnies du Sénégal, partageant connaissances et expériences interculturelles. Cette initiative renforce notre tissu social en célébrant la diversité ethnique du pays, créant ainsi un environnement où les traditions sont enseignées, préservées, et transmises aux générations futures. Une démarche concise, mais riche en héritage culturel sénégalais.",
    icon: "images/education.png"
  },
];

export default function Projects() {
  return (
    <Layout>
      <div className="container mx-auto">
        <div className="flex flex-col-reverse sm:flex-row justify-center items-center gap-1 sm:items-center">
          <div className="sm:w-full lg:w-1/3 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-wide text-main-color">
              <span className="block" id={`${projects[0].name}`}>{projects[0].name}</span>
              <span className="block text-green-600 xl:inline">
                autour du quartier
              </span>
            </h1>
            <p className="mt-3 text-base sm:mt-5 sm:text-lg md:mt-5 md:text-xl lg:max-w-lg xl:max-w-xl lg:text-left ">
              {projects[0].description}
            </p>
          </div>

          <div className="flex-shrink-0 sm:w-40 lg:w-1/3">
            <img
              className="w-full h-auto"
              src={projects[0].icon}
              alt="Two men walking with tree and garden tools"
            />
          </div>
        </div>
        <div className=" pt-20 flex flex-col-reverse sm:flex-row justify-center items-center sm:gap-1 md:gap-20 sm:items-center">
          <div className=" sm:w-40 lg:w-1/3">
            <img
              className="w-full h-auto"
              src={projects[1].icon}
              alt="4 youngs children organize theire task."
            />
          </div><div className="sm:w-full lg:w-1/3 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-wide text-main-color">
              <span className="block" id={`${projects[1].name}`}>{projects[1].name}</span>
              <span className="block text-yellow-300 xl:inline">
                autour du quartier
              </span>
            </h1>
            <p className="mt-3 text-base sm:mt-5 sm:text-lg md:mt-5 md:text-xl lg:max-w-lg xl:max-w-xl lg:text-left ">
              {projects[1].description}
            </p>
          </div>


        </div>
        <div className="pt-20 pb-20 flex flex-col-reverse sm:flex-row justify-center items-center gap-1 sm:items-center">
          <div className="sm:w-full lg:w-1/3 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-wide text-main-color">
              <span className="block" id={`${projects[2].name}`}>{projects[2].name}</span>
              <span className="block text-red-500 xl:inline">
                autour du quartier
              </span>
            </h1>
            <p className="mt-3 text-base sm:mt-5 sm:text-lg md:mt-5 md:text-xl lg:max-w-lg xl:max-w-xl lg:text-left ">
              {projects[2].description}
            </p>
          </div>

          <div className="flex-shrink-0 sm:w-40 lg:w-1/3">
            <img
              className="w-full h-auto"
              src={projects[2].icon}
              alt="Two men walking with tree and garden tools"
            />
          </div>
        </div>
      </div>

    </Layout>
  );
}
