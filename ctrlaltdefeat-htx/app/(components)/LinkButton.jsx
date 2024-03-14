import Link from "next/link";

export default function LinkButton({text, link}){
    return(
        <Link href={link} className="border-2 border-solid border-black rounded-lg py-2 px-5 hover:bg-gray-100">
          <button>
            {text}
          </button>
        </Link>
    );
}