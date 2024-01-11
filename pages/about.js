import Layout from "../components/layout";
import Image from "next/image";

export default function About() {
  return (
    <Layout page="Présentation">
      <div className=" sm:w-full lg:h-450 text-center sm:text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="space-y-7">
            <h1 className="text-base sm:text-5xl text-black-600 font-semibold tracking-wide uppercase pt-7 text-green-600">
              Présentation
            </h1>
            <h2 className="font-extrabold tracking-tight text-black-900 sm:text-3xl text-red-600">
              Mariame Samba sy{" "}
            </h2>
            <div className="flex flex-wrap -mx-1 lg:-mx-auto ">
              <div className="w-full md:w-1/2 lg:w-1/2 mb-4 ">
                <Image
                  src="/portrait-mariame.jpg"
                  alt="portrait"
                  width="400"
                  height="600"
                  className="inline-block"
                  quality="100"
                ></Image>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/2  mb-4">
                <p className="flex items-center text-gray-800 lg:mx-auto lg:text-2xl  ">
                  Maman est arrivé en France dans les années 70. Elle est
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
                  naître de très beaux projets au Sénégal :
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
