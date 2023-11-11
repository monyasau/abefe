export default function TopNav() {
    return (
        <nav className="border-b">
        <div className="max-w-screen-xl mx-auto py-4 flex w-full justify-between">
           <div>
            <a href="/" className="text-xl font-bold">ThisIsAbefe</a>
           </div>

           <div className="flex gap-14">
            <a href="#" className="font-medium hover:underline">Home</a>
            <a href="#" className="text-dark-gray hover:underline">Designs</a>
            <a href="#" className="text-dark-gray hover:underline">Music</a>
            <a href="#" className="text-dark-gray hover:underline">Contact</a>
           </div>
        </div>
        </nav>
    );
}