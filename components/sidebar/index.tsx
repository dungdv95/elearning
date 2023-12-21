"use client";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import {
  ChevronDownIcon,
  Facebook,
  Instagram,
  Mail,
  Phone,
  Search,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";

const navigation = [
  { name: "Trang trủ", href: "#", current: true },
  { name: "Giới thiệu", href: "#", current: false },
  { name: "Dịch vụ", href: "#", current: false },
  { name: "Tin tức", href: "#", current: false },
  { name: "Liên hệ", href: "#", current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export function Sidebar() {
  return (
    <Disclosure as="header" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="px-12 py-1">
            <div className="divide-y divide-gray-200">
              <div className="flex justify-between py-4">
                <div className="flex gap-2 items-center">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">Email:demo@gmail.com</span>
                </div>
                <div className="flex gap-7 items-center">
                  <div className="flex gap-2">
                    <Phone className="h-4 w-4" />
                    <span className="text-sm">0123456789</span>
                  </div>
                  <Languages />
                  <div className="flex gap-4 items-center">
                    <Facebook className="h-5 w-5 fill-gray-800 stroke-none" />
                    <Instagram className="h-5 w-5" />
                    <Twitter className="h-5 w-5 fill-gray-800 stroke-none" />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                    >
                      <path d="M 12 4 C 12 4 5.7455469 3.9999687 4.1855469 4.4179688 C 3.3245469 4.6479688 2.6479687 5.3255469 2.4179688 6.1855469 C 1.9999687 7.7455469 2 12 2 12 C 2 12 1.9999687 16.254453 2.4179688 17.814453 C 2.6479687 18.675453 3.3255469 19.352031 4.1855469 19.582031 C 5.7455469 20.000031 12 20 12 20 C 12 20 18.254453 20.000031 19.814453 19.582031 C 20.674453 19.352031 21.352031 18.674453 21.582031 17.814453 C 22.000031 16.254453 22 12 22 12 C 22 12 22.000031 7.7455469 21.582031 6.1855469 C 21.352031 5.3255469 20.674453 4.6479688 19.814453 4.4179688 C 18.254453 3.9999687 12 4 12 4 z M 12 6 C 14.882 6 18.490875 6.1336094 19.296875 6.3496094 C 19.465875 6.3946094 19.604391 6.533125 19.650391 6.703125 C 19.891391 7.601125 20 10.342 20 12 C 20 13.658 19.891391 16.397875 19.650391 17.296875 C 19.605391 17.465875 19.466875 17.604391 19.296875 17.650391 C 18.491875 17.866391 14.882 18 12 18 C 9.119 18 5.510125 17.866391 4.703125 17.650391 C 4.534125 17.605391 4.3956094 17.466875 4.3496094 17.296875 C 4.1086094 16.398875 4 13.658 4 12 C 4 10.342 4.1086094 7.6011719 4.3496094 6.7011719 C 4.3946094 6.5331719 4.533125 6.3946094 4.703125 6.3496094 C 5.508125 6.1336094 9.118 6 12 6 z M 10 8.5351562 L 10 15.464844 L 16 12 L 10 8.5351562 z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex justify-between py-2">
                <div className="flex items-center">
                  <Image
                    src="/asset/logo.png"
                    alt=""
                    width={38}
                    height={38}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div className="flex items-center gap-3">
                  <nav className="flex gap-5 items-center" aria-label="Global">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-900 hover:bg-gray-50 hover:text-gray-900",
                          "inline-flex items-center rounded-md py-1 px-3 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                  <Search className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}

function Languages() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1 rounded-md text-sm">
          Tiếng Việt
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Tiếng Việt
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Tiếng Anh
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
