
import { Fragment, useState,useContext,useEffect } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  // ShoppingCartIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { BsHeart } from 'react-icons/bs'; // Import wishlist icon
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Logo from "../../assets/logo/shared image.jpg";
import logo_ecom from "../../assets/logo/ecom-logo1.png";
import Login from "../../components/Login";
import RegisterForm from "../../Component/phoneregistration";
import { GlobalContext } from '../../context/GlobalContext';
import { Link, useNavigate } from "react-router-dom";

import { BsCart3 } from "react-icons/bs";

const currencies = ["CAD", "USD", "AUD", "EUR", "GBP"];
const navigation = {
  categories: [
      {
        name: 'Women',
        featured: [
          { name: 'Sleep', href: '/category/women/featured/sleep' },
          { name: 'Swimwear', href: '/category/women/featured/swimwear' },
          { name: 'Tops', href: '/category/women/featured/tops' },
        ],
        collection: [
          { name: 'Everything', href: '/category/women/collection/everything' },
          { name: 'Core', href: '/category/women/collection/core' },
          { name: 'New Arrivals', href: '/category/women/collection/new arrivals' },
          { name: 'Sale', href: '/category/women/collection/sale' },
        ],
        categories: [
          { name: 'Basic Tees', href: '/category/women/categories/basic tees' },
          { name: 'Artwork Tees', href: '/category/women/categories/artwork tees' },
          { name: 'Bottoms', href: '/category/women/categories/bottoms' },
          { name: 'Tops', href: '/category/women/categories/tops' },
          { name: 'Accessories', href: '/category/women/categories/accessories' },
        ],
        brands: [
          { name: 'Full Nelson', href: '/category/women/brands/full nelson' },
          { name: 'My Way', href: '/category/women/brands/my way' },
          { name: 'Re-Arranged', href: '/category/women/brands/re-arranged' },
          { name: 'Counterfeit', href: '/category/women/brands/counterfeit' },
          { name: 'Significant Other', href: '/category/women/brands/significant other' },
        ],
      },
        {
          name: 'Men',
          featured: [
            { name: 'Casual', href: '/category/men/featured/casual' },
            { name: 'Boxers', href: '/category/men/featured/boxers' },
            { name: 'Outdoor', href: '/category/men/featured/outdoors' },
          ],
          collection: [
            { name: 'Everything', href: '/category/men/collection/everything' },
            { name: 'Core', href: '/category/men/collection/core' },
            { name: 'New Arrivals', href: '/category/men/collection/new arrivals' },
            { name: 'Sale', href: '/category/men/collection/sale' },
          ],
          categories: [
            { name: 'Artwork Tees', href: '/category/men/categories/artwork tees' },
            { name: 'Pants', href: '/category/men/categories/pants' },
            { name: 'Accessories', href: '/category/men/categories/accessories' },
            { name: 'Boxers', href: '/category/men/categories/boxers' },
            { name: 'Basic Tees', href: '/category/men/categories/basic tees' },
          ],
          brands: [
            { name: 'Significant Other', href: '/category/men/brands/significant other' },
            { name: 'My Way', href: '/category/men/brands/my way' },
            { name: 'Counterfeit', href: '/category/men/brands/counterfeit' },
            { name: 'Re-Arranged', href: '/category/men/brands/re-arranged' },
            { name: 'Full Nelson', href: '/category/men/brands/full nelson' },
          ],
        },
  ],
  pages: [
    { name: "Company", href: "#" },
    { name: "Stores", href: "#" },
  ],
};

export default function Example() {
  const [open, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const handleOpen = () => setLoginOpen(true);
  const handleClose = () => setLoginOpen(false);
  const handleRegisterOpen = () => setRegisterOpen(true);
  const handleRegisterClose = () => setRegisterOpen(false);
  const { cartItems } = useContext(GlobalContext);
  const [navbarColor, setNavbarColor] = useState("ffffff");
  const [navbarTextColor, setNavbarTextColor] = useState("#000000");
  const [clicked, setClicked] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();
  const uniqueItemsCount = cartItems.length;
  const [wishlistItems, setWishlistItems] = useState(false);
  
//   const jwtToken = localStorage.getItem('jwtToken');
// console.log(jwtToken);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setNavbarColor("#ffffff");
        setNavbarTextColor("#000000");
      } else {
        setNavbarColor("#ffffff"); // Initial navbar color
        setNavbarTextColor("#000000");
      }
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-10 w-10" />
              </button>
            </div>

            {/* Links */}
            <TabGroup className="mt-2">
              <div className="border-b border-gray-200">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900 data-[selected]:border-indigo-600 data-[selected]:text-indigo-600"
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {navigation.categories.map((category, categoryIdx) => (
                  <TabPanel
                    key={category.name}
                    className="space-y-12 px-4 pb-6 pt-10"
                  >
                    <div className="grid grid-cols-1 items-start gap-x-6 gap-y-10">
                      <div className="grid grid-cols-1 gap-x-6 gap-y-10">
                        <div>
                          <p
                            id={`mobile-featured-heading-${categoryIdx}`}
                            className="font-medium text-gray-900"
                          >
                            Featured
                          </p>
                          <ul
                            role="list"
                            aria-labelledby={`mobile-featured-heading-${categoryIdx}`}
                            className="mt-6 space-y-6"
                          >
                            {category.featured.map((item) => (
                              <li key={item.name} className="flex">
                                <a href={item.href} className="text-gray-500">
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p
                            id="mobile-categories-heading"
                            className="font-maximum text-gray-900"
                          >
                            Categories
                          </p>
                          <ul
                            role="list"
                            aria-labelledby="mobile-categories-heading"
                            className="mt-6 space-y-6"
                          >
                            {category.categories.map((item) => (
                              <li key={item.name} className="flex">
                                <a href={item.href} className="text-gray-500">
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-x-6 gap-y-10">
                        <div>
                          <p
                            id="mobile-collection-heading"
                            className="font-medium text-gray-900"
                          >
                            Collection
                          </p>
                          <ul
                            role="list"
                            aria-labelledby="mobile-collection-heading"
                            className="mt-6 space-y-6"
                          >
                            {category.collection.map((item) => (
                              <li key={item.name} className="flex">
                                <a href={item.href} className="text-gray-500">
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <p
                            id="mobile-brand-heading"
                            className="font-medium text-gray-900"
                          >
                            Brands
                          </p>
                          <ul
                            role="list"
                            aria-labelledby="mobile-brand-heading"
                            className="mt-6 space-y-6"
                          >
                            {category.brands.map((item) => (
                              <li key={item.name} className="flex">
                                <a href={item.href} className="text-gray-500">
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <a
                    href={page.href}
                    className="-m-2 block p-10 font-medium text-gray-900"
                  >
                    {page.name}
                  </a>
                </div>
              ))}
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <a
                  href="/PhoneNumberForm"
                  className="-m-2 block p-2 font-medium text-gray-900"
                >
                  Create an account
                </a>
              </div>
              <div className="flow-root">
                <button
                  onClick={handleOpen}
                  className="text-sm font-medium text-white hover:text-gray-100"
                >
                  Sign in
                </button>
                {loginOpen && (
                  <Login isOpen={loginOpen} onClose={handleClose} />
                )}
              </div>
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {/* Currency selector */}
              <form>
                <div className="inline-block">
                  <label htmlFor="mobile-currency" className="sr-only">
                    Currency
                  </label>
                  <div className="group relative -ml-2 rounded-md border-transparent focus-within:ring-2 focus-within:ring-white">
                    <select
                      id="mobile-currency"
                      name="currency"
                      className="flex items-center rounded-md border-transparent bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-gray-700 focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-800"
                    >
                      {currencies.map((currency) => (
                        <option key={currency}>{currency}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="h-5 w-5 text-gray-500"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="fixed top-0 z-10 w-full border-b border-gray-200">
        <nav aria-label="Top">
          {/* Top navigation */}
          <div className="bg-gray-900">
            <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-20 lg:px-20">
              {/* Currency selector */}
              <form className="hidden lg:block lg:flex-1">
                <div className="flex">
                  <label htmlFor="desktop-currency" className="sr-only">
                    Currency
                  </label>
                  <div className="group relative -ml-2 rounded-md border-transparent bg-gray-900 focus-within:ring-2 focus-within:ring-white">
                    <select
                      id="desktop-currency"
                      name="currency"
                      className="flex items-center rounded-md border-transparent bg-gray-900 bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-white focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-100"
                    >
                      {currencies.map((currency) => (
                        <option key={currency}>{currency}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="h-5 w-5 text-gray-300"
                      />
                    </div>
                  </div>
                </div>
              </form>

              <p className="flex-1 text-center text-sm font-medium text-white lg:flex-none">
                Get free delivery on orders over $100
              </p>

              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                {/* <a
                  href="/PhoneNumberForm"
                  className="text-sm font-medium text-white hover:text-gray-100"
                >
                  Create an account
                </a> */}
                 <button
          onClick={handleRegisterOpen}
          className="text-sm font-medium text-white hover:text-gray-100"
        >
          Create an account
        </button>
        {registerOpen && (
          <RegisterForm isOpen={registerOpen} onClose={handleRegisterClose} />
        )}
    
                <span aria-hidden="true" className="h-6 w-px bg-gray-600" />
                <div className="flow-root">
                  <button
                    onClick={handleOpen}
                    className="text-sm font-medium text-white hover:text-gray-100"
                  >
                    Sign in
                  </button>
                  {loginOpen && (
                    <Login isOpen={loginOpen} onClose={handleClose} />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Secondary navigation */}
          <div className="bg-white">
            <div className="mx-auto max-w-10x1 px-8 sm:px-6 lg:px-8">
              <div className="border-b border-gray-200">
                <div className="flex h-20 items-center justify-between ">
                  {/* Logo (lg+) */}
                  <div className="hidden lg:flex lg:items-center">
                    <a href="#">
                      <span className="sr-only">Your Company</span>
                      <img
                        alt=""
                        // src={Logo}
                        src={logo_ecom}
                        className="h-24
                        
                         w-24"
                      />
                    </a>
                  </div>

                  <div className="hidden h-full lg:flex">
                    {/* Mega menus */}
                    <PopoverGroup className="ml-8">
                      <div className="flex h-full justify-center space-x-8">
                        {navigation.categories.map((category, categoryIdx) => (
                          <Popover key={category.name} className="flex">
                            <div className="relative flex">
                              <PopoverButton className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-[open]:border-indigo-600 data-[open]:text-indigo-600">
                                {category.name}
                              </PopoverButton>
                            </div>

                            <PopoverPanel
                              transition
                              className="absolute inset-x-0 top-full text-gray-500 transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in sm:text-sm"
                            >
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div
                                aria-hidden="true"
                                className="absolute inset-0 top-1/2 bg-white shadow"
                              />

                              <div className="relative bg-white">
                                <div className="mx-auto max-w-8xl px-8">
                                  <div className="grid grid-cols-2 items-start gap-x-8 gap-y-10 pb-12 pt-10">
                                    <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                                      <div>
                                        <p
                                          id={`desktop-featured-heading-${categoryIdx}`}
                                          className="font-medium text-gray-900"
                                        >
                                          Featured
                                        </p>
                                        <ul
                                          role="list"
                                          aria-labelledby={`desktop-featured-heading-${categoryIdx}`}
                                          className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                        >
                                          {category.featured.map((item) => (
                                            <li
                                              key={item.name}
                                              className="flex"
                                            >
                                              <a
                                                href={item.href}
                                                className="hover:text-gray-800"
                                              >
                                                {item.name}
                                              </a>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                      <div>
                                        <p
                                          id="desktop-categories-heading"
                                          className="font-medium text-gray-900"
                                        >
                                          Categories
                                        </p>
                                        <ul
                                          role="list"
                                          aria-labelledby="desktop-categories-heading"
                                          className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                        >
                                          {category.categories.map((item) => (
                                            <li
                                              key={item.name}
                                              className="flex"
                                            >
                                              <a
                                                href={item.href}
                                                className="hover:text-gray-800"
                                              >
                                                {item.name}
                                              </a>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                                      <div>
                                        <p
                                          id="desktop-collection-heading"
                                          className="font-medium text-gray-900"
                                        >
                                          Collection
                                        </p>
                                        <ul
                                          role="list"
                                          aria-labelledby="desktop-collection-heading"
                                          className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                        >
                                          {category.collection.map((item) => (
                                            <li
                                              key={item.name}
                                              className="flex"
                                            >
                                              <a
                                                href={item.href}
                                                className="hover:text-gray-800"
                                              >
                                                {item.name}
                                              </a>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>

                                      <div>
                                        <p
                                          id="desktop-brand-heading"
                                          className="font-medium text-gray-900"
                                        >
                                          Brands
                                        </p>
                                        <ul
                                          role="list"
                                          aria-labelledby="desktop-brand-heading"
                                          className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                        >
                                          {category.brands.map((item) => (
                                            <li
                                              key={item.name}
                                              className="flex"
                                            >
                                              <a
                                                href={item.href}
                                                className="hover:text-gray-800"
                                              >
                                                {item.name}
                                              </a>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </PopoverPanel>
                          </Popover>
                        ))}

                        {navigation.pages.map((page) => (
                          <a
                            key={page.name}
                            href={page.href}
                            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                          >
                            {page.name}
                          </a>
                        ))}
                      </div>
                    </PopoverGroup>
                  </div>

                  {/* Mobile menu and search (lg-) */}
                  <div className="flex flex-1 items-center lg:hidden">
                    <button
                      type="button"
                      onClick={() => setOpen(true)}
                      className="-ml-2 rounded-md bg-white p-2 text-gray-400"
                    >
                      <span className="sr-only">Open menu</span>
                      <Bars3Icon aria-hidden="true" className="h-10 w-10" />
                    </button>

                    {/* Search */}
                    <a
                      href="#"
                      className="ml-2 p-2 text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Search</span>
                      <MagnifyingGlassIcon
                        aria-hidden="true"
                        className="h-10 w-10"
                      />
                    </a>
                  </div>

                  {/* Logo (lg-) */}
                  <a href="#" className="lg:hidden">
                    <span className="sr-only">Your Company</span>
                    <img alt="" src={logo_ecom} className="h-14 w-22" />
                  </a>

                  <div className="flex flex-1 items-center justify-end">
                    <div className="flex items-center lg:ml-8">
                      <div className="flex space-x-8">
                        {/* <div className="hidden lg:flex">
                          <a
                            href="#"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">Search</span>
                            <MagnifyingGlassIcon
                              aria-hidden="true"
                              className="h-6 w-6"
                            />
                          </a>
                        </div> */}

                         <div className="flex">
                          <a
                            href="/profile"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">Account</span>
                            <UserIcon aria-hidden="true" className="h-6 w-6" />
                          </a>
                        </div> 
                        {/* <div className="flex">
      {jwtToken ? (
        <a
          href="/profile"
          className="-m-2 p-2 text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">Account</span>
          <UserIcon aria-hidden="true" className="h-6 w-6" />
        </a>
      ) : (
        <button
          className="-m-2 p-2 text-gray-400 hover:text-gray-500"
          onClick={() => alert('Please log in to access your profile.')}
        >
          <span className="sr-only">Account</span>
          <UserIcon aria-hidden="true" className="h-6 w-6" />
        </button>
      )}
    </div> */}
                      </div>

                      <span
                        aria-hidden="true"
                        className="mx-4 h-6 w-px bg-gray-200 lg:mx-6"
                      />

   
 <ul
      className={`lg:flex lg:items-center lg:gap-6 ${
        clicked ? "flex flex-col items-center" : "hidden"
      } lg:flex-row lg:static absolute w-full lg:w-auto left-0 lg:left-auto bg-white lg:bg-transparent top-16 lg:top-auto py-4 lg:py-0`}
      style={{ color: "#000000" }}
    >
      <li className="nav-item mx-2">
        <div onClick={() => navigate("/wishlist")} className="relative">
          <BsHeart className="text-xl cursor-pointer" />
          <span
            className={`absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none ${
              wishlistItems.length === 0
            } rounded-full transform translate-x-1/2 -translate-y-1/2`}
          >
            {wishlistItems.length === 0 ? "0" : wishlistItems.length}
          </span>
        </div>
      </li>
      <li className="nav-item mx-2">
        <div onClick={() => navigate("/cart")} className="relative">
          <BsCart3 className="text-xl cursor-pointer" />
          <span
            className={`absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none ${
              cartItems.length === 0
                ? "bg-red-600 text-white"
                : "bg-red-600 text-red-100"
            } rounded-full transform translate-x-1/2 -translate-y-1/2`}
          >
            {cartItems.length === 0 ? "0" : uniqueItemsCount}
          </span>
        </div>
      </li>
    </ul>               
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
