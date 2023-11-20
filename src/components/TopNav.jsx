export default function TopNav() {
  let dropdownIcon = document.getElementById("dropdownMenuToggleIcon");
  let backdrop = document.getElementById("backdrop");
  let defaultMenu = document.getElementById("defaultNav");
  let smNavBar = document.getElementById("smallScreenNavBar");
  let smNavCloseBtn = document.getElementById("closeSmNav")


  return (
    <>
      <nav id="defaultNav" className="hidden md:block border-b">
        <div className="md:max-w-screen-xl mx-auto py-4 flex w-full justify-between">
          <div>
            <a href="/" className="text-xl font-bold">
              ThisIsAbefe
            </a>
          </div>

          <div className="flex gap-14">
            <a href="#" className="font-medium hover:underline">
              Home
            </a>
            <a href="#" className="text-dark-gray hover:underline">
              Designs
            </a>
            <a href="#" className="text-dark-gray hover:underline">
              Music
            </a>
            <a href="#" className="text-dark-gray hover:underline">
              Contact
            </a>
          </div>
        </div>
      </nav>










<div className="flex justify-between">
      <div>
            <a href="/" className="text-xl font-bold">
              ThisIsAbefe
            </a>
          </div>
      <div  id="dropdownMenuToggleIcon" className=" dropdown align-right md:hidden items-center flex" onClick={() => {
    backdrop.classList.remove("hidden");
    smNavBar.classList.remove("hidden")
    defaultMenu.classList.add("hidden");
  }}>
        <a href="#" className="text-slate-600 font-bold mx-4">Menu</a>


      <svg width="24" height="24" className="md:hidden">
          <path
            d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
            stroke="currentColor"
            strokeWidth="1.5"
          ></path>
        </svg>
        </div>
      
      
      <div
        id="smallScreenNavBar"
        className="hidden fixed z-50 top-4 right-4 w-full max-w-xs bg-white rounded-lg shadow-lg p-6 text-base font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:highlight-white/5"
      >
        <div
          id="closeSmNav"
          className="absolute top-5 right-5 w-8 h-8 flex justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
        >
          <svg viewBox="0 0 10 10" className="w-2.5 h-2.5 overflow-visible">
            <path
              d="M0 0L10 10M10 0L0 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            ></path>
          </svg>
        </div>
        <ul className="space-y-6">
          <li>
            <a className="hover:text-sky-500" href="/">
              Home
            </a>
          </li>

          <li>
            <a href="/designs" className="hover:text-sky-500">
              Designs
            </a>
          </li>

          <li>
            <a className="hover:text-sky-500" href="/music">
              Music
            </a>
          </li>

          <li>
            <a className="hover:text-red-500" href="/Contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
      </div>

      <div
        id="backdrop"
        className="hidden fixed inset-0 z-40 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80"
      ></div>
      
    </>
  );
}
