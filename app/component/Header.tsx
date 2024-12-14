import { Mail } from "lucide-react";

const Header = () => {
    return(
     <div className="sticky top-0 p-5 flex justify-between items-start max-w-7xl mx-auto z-20 xl:items-center">
        <div>Mia Blog</ div>
        <a href="MiaChen921921@gmail.com">
            <Mail />
        </a>
     </ div>
    );    
};

export default Header;