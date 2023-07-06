import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { CgClose } from 'react-icons/cg';

export default function NavbarMenu() {
  const [openMenu, setOpenMenu] = useState(false);

  const menuHandler = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button
            onClick={menuHandler}
            aria-label="Menu"
            className="md:hidden inline-flex items-center w-full justify-center rounded-md bg-opacity-20 text-md font-[17.5px] text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            {openMenu ? (
              <CgClose
                className="text-white hover:cursor-pointer relative z-20"
                size={28}
              />
            ) : (
              <FiMenu className="text-white" size={25} />
            )}
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
          <div className="flex justify-center absolute right-18 hover:cursor-pointer z-20">
            <Menu.Items className="absolute top-12 -right-8 w-[150px] origin-top-right divide-y divide-gray-100 rounded-md bg-gray-400 bg-opacity-[30%] backdrop-filter backdrop-blur-md shadow-lg focus:outline-none">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={menuHandler}
                      className={`${
                        active ? 'bg-red-600 font-bold' : 'text-white'
                      } group flex w-full items-center justify-center rounded-md px-2 py-2 text-sm mb-1`}
                    >
                      <a href="#hero">Inicio</a>
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={menuHandler}
                      className={`${
                        active ? 'bg-red-600 font-bold' : 'text-white'
                      } group flex w-full items-center justify-center rounded-md px-2 py-2 text-sm`}
                    >
                      <a href="#nosotros">Nosotros</a>
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={menuHandler}
                      className={`${
                        active ? 'bg-red-600 font-bold' : 'text-white'
                      } group flex w-full items-center justify-center rounded-md px-2 py-2 text-sm`}
                    >
                      <a href="#planes">Planes</a>
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={menuHandler}
                      className={`${
                        active ? 'bg-red-600 font-bold' : 'text-white'
                      } group flex w-full items-center justify-center rounded-md px-2 py-2 text-sm`}
                    >
                      <a href="#preguntas">Preguntas</a>
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={menuHandler}
                      className={`${
                        active ? 'bg-red-600 font-bold' : 'text-white'
                      } group flex w-full items-center justify-center rounded-md px-2 py-2 text-sm`}
                    >
                      <a href="#contacto">Contacto</a>
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </div>
        </Transition>
      </Menu>
      {openMenu ? (
        <div
          onClick={menuHandler}
          className="h-screen w-screen absolute top-0 left-0 z-10"
        ></div>
      ) : null}
    </>
  );
}
