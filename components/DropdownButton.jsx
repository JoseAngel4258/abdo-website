import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default function DropdownButton() {
  return (
    
      <div>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex items-center w-full justify-center rounded-md bg-opacity-20 text-md font-[17.5px] text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              Más
              <ChevronDownIcon
                className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
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
            <div className="flex justify-center">
              <Menu.Items className="absolute top-12 w-[150px] origin-top-right divide-y divide-gray-100 rounded-md bg-white bg-opacity-[16%] backdrop-filter backdrop-blur-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-violet-500' : 'text-white'
                        } group flex w-full items-center justify-center rounded-md px-2 py-2 text-sm mb-1`}
                      >
                        <a href="#preguntas">Preguntas</a>
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-violet-500' : 'text-white'
                        } group flex w-full items-center justify-center rounded-md px-2 py-2 text-sm`}
                      >
                        <a href="#oficinas">Oficinas</a>
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </div>
          </Transition>
        </Menu>
      </div>

      
  );
}
