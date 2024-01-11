import Image from "next/image";

const navigation = [
/*   { name: "facebook", logo: "/facebook.png", href: "/" },
  { name: "twitter", logo: "/instagram.png", href: "/" },
  { name: "whatsapp", logo: "/whatsapp.png", href: "/" }, */
];
export default function Footer() {
  return (
    <div className="mt-auto px-2 pt-2 pb-3 space-y-1 flex lg:justify-center md:justify-between">
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
            <p className="text-center">&copy; 2023 Project Diammo. All rights reserved.</p>
    </div>
  );
}
