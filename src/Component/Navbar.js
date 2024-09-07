import { Disclosure, DisclosureButton, DisclosurePanel,  } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
const navigation = [
  { name: 'World', href: '/world', current: true },
  { name: 'Entertainment', href: '/entertainment', current: false },
  { name: 'World', href: '/world', current: false },
  { name: 'Business', href: '/business', current: false },
  { name: 'Sport', href: '/sport', current: false },
  { name: 'Science', href: '/science', current: false },
  { name: 'Technology', href: '/technology', current: false }

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (


    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                style={{borderRadius:"50%"}}
                alt="Your Company"
                src="https://imgs.search.brave.com/sKpRreBpKQWP3586cTw_x2WCo9zV3PF_3b9-yLazxVY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3LzUyLzEzLzM0/LzM2MF9GXzc1MjEz/MzQxNV9aUVNmTFNO/U3E1NXdWR2FUaVFr/amRuclloMHZvTEh0/di5qcGc"
                className="h-8 w-auto"
                />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                    >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
     
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <div
              key={item.name}
              as="a"
              to={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
              >
              {item.name}
            </div>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
        
  )
}
