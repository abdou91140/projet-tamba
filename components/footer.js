import Image from "next/image";

const navigation = [
  { name: "facebook", logo: "/facebook.png", href: "/" },
  { name: "instagram", logo: "/twitter.png", href: "/" },
  { name: "twitter", logo: "/instagram.png", href: "/" },
  { name: "whatsapp", logo: "/whatsapp.png", href: "/" },
];
export default function Footer() {
  return (
    <div className="px-2 pt-2 pb-3 space-y-1 flex lg:justify-center md:justify-between">
      {navigation.map((item) => (
        <div
          className="h-6 w-6 text-green-600 mx-5"
          aria-hidden="true"
          key={item.name}
        >
          <a className="" href={item.href}>
            <Image
              src={item.logo}
              alt="logo"
              width="20"
              height="20"
              className="inline-block"
              quality="100"
            ></Image>
          </a>
        </div>
      ))}
      <div className="text-gray-300">
        Icônes conçues par{" "}
        <a
          href="https://www.flaticon.com/fr/auteurs/pixel-perfect"
          title="Pixel perfect"
        >
          Pixel perfect
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/fr/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </div>
  );
}
