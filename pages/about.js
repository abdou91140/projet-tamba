import Layout from "../components/layout";
import Image from "next/image";

export default function About() {
  return (
    <Layout page="Présentation">
      <div className="container sm:w-full lg:h-450 text-center sm:text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="space-y-7">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-wide text-main-color">   
              Mariame Samba sy{" "}
            </h1>
            <div className="flex flex-wrap  lg:-mx-auto ">
              <div className="w-full md:w-1/2 lg:w-1/2 mb-4 ">
                <Image
                  src="/portrait-mariame.jpg"
                  alt="portrait"
                  width="400"
                  height="600"
                  className="inline-block h-auto sm:max-w-md"
                  quality="100"
                ></Image>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/2  mb-4">
                <p className="flex items-center text-gray-800 lg:mx-auto lg:text-2xl">
{/*                   Maman est arrivé en France dans les années 70. Elle est
                  originaire d’un tout petit village, Youpé-Hamady situé au
                  Sénégal oriental. Elle arrive en France avec son mari un mois
                  de Décembre, en 1972, et ils s’installent dans un petit
                  appartement situé à Bois-colombes (dept 92) L'acclimatation et
                  l’adaptation à cette nouvelle vie est loin d’être facile et
                  très vite Maman veut se rendre utile et aider son prochain. La
                  Bienveillance est une part d’elle qui l’attire très tôt vers
                  l’associative. En 1984 nous nous installons à Bobigny,
                  quartier réputé difficile de la cité de l’étoile et quelques
                  années plus tard elle crée avec quelques copines de quartier
                  l’Association Femmes Relais Etoile, Association à but non
                  lucratif qui apporte son soutien aux femmes dans toutes sortes
                  de projets, elle est déja avant-gardiste dans le
                  micro-entreprenariat, elle vient en aide à de nombreuses femmes
                  issues de ces quartiers dit défavorisés et qui veulent se
                  lancer dans la concrétisation de leurs projets. "Femme Relais
                  Etoile" a pris sa retraite en même temps que sa fondatrice dans le milieu associatif,
                  elle fut une association très active, pleine de vie,
                  extrêmement présente sur le terrain et qui a vu
                  l’aboutissement de très nombreux projets. En 1990, elle crée
                  avec sa sœur une association issue de la diaspora, qui verra
                  naître de très beaux projets au Sénégal : */}
      "Notre engagement découle de la volonté de contribuer à l'épanouissement des femmes, jeunes et moins jeunes, en favorisant une entraide indépendamment de leur condition. En tant que mères, tantes, sœurs, filles ou petites-filles, nous unissons nos forces dans une mission commune : encourager le progrès et l'évolution du rôle des femmes au sein de la société sénégalaise.

Nos actions diversifiées reflètent nos valeurs fondamentales : le respect, l'écoute et la solidarité. Nous croyons en l'importance de créer un environnement où chaque femme peut s'épanouir, se soutenir mutuellement et contribuer positivement à la société. Ensemble, nous œuvrons pour un changement significatif.

Nous avons à cœur d'ouvrir de nouvelles perspectives aux femmes de Diamaguene, élargissant ainsi les horizons des possibles. Rejoignez-nous dans cette aventure pour construire ensemble un avenir où chaque femme trouve sa place et s'épanouit."
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
