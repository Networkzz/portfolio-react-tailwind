import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon, CodeIcon } from "@heroicons/react/outline";
import { FaGithub } from "react-icons/fa";
const navigation = [
  { name: "Alejandro Martín", href: "#", current: true },
  { name: "About", href: "#about", current: false },
  { name: "Bio", href: "#bio", current: false },
  { name: "Works", href: "#works", current: false },
  { name: "Source", href: "https://github.com/Networkzz/portfolio-react-tailwind",current: false, target:"_blank", icon: <FaGithub className="inline-flex ml-1 mb-0.5"/>},
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  return (
    <Disclosure as="nav" className="bg-gray-600">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <CodeIcon
                    className="block h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        target={item.target}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white" /*Current item*/
                            : "text-gray-300 hover:bg-gray-700 hover:text-white" /*Not current item*/,
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                      >
                        {item.name}{item.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}