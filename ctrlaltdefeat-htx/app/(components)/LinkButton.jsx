import Link from "next/link";

export default function LinkButton({text, link, color="bg-white", colorHover="hover:bg-grey"}){
    return (
        <Link href={link} className={`border border-solid border-base-500 rounded-lg py-2 px-5 ${colorHover} ${color}`}>
          <button>
            {text}
          </button>
        </Link>
    );
}