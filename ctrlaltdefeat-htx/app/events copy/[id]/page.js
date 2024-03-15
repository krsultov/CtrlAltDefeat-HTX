import LinkButton from "@/app/(components)/LinkButton";

export default function EventDetails() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <img src='https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSh_BYQYGH7b0y-nMFhJsMKsqbbCM9TfuM5IwGGxActFLz8v0p7SYlZ8cHvPUq8mPpqx9mInE4FqIov1Ak'
       alt='Снимка :>' className="p-4 w-auto">
      </img>
      <div>
        <p className="pt-3 text-slate-800	text-lg">Burgas, Slynchev brjag</p>
        <h1 className="text-7xl py-10">Lorem ipsum</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet commodo felis, ac convallis neque tempus at. Vivamus facilisis laoreet dolor id aliquam. Morbi nisi leo, pulvinar id fringilla ac, sagittis ac sapien. Nulla eget congue lectus. Nam elementum, lorem eu sollicitudin placerat, lacus urna vehicula diam, et maximus eros sapien sit amet dolor. Donec auctor urna quis diam congue, vitae congue ligula facilisis. Integer in dictum nulla, quis cursus arcu. Cras sodales risus vel arcu iaculis, sed scelerisque diam consectetur.</p>
        <button href="#" className="border border-solid border-base-500 rounded-lg py-2 px-5 bg-secondary hover:bg-secondaryDark">Join this event!</button>
        <div className="space-x-2 flex">
          <p className="space-x-2 py-0.5">Participants: </p>
          <a className="space-x-2 py-0.5" href="#"><img src="https://scontent-sof1-2.cdninstagram.com/v/t51.2885-19/354656992_933023704670145_7792669753326946027_n.jpg?stp=dst-jpg_s100x100&_nc_cat=109&ccb=1-7&_nc_sid=3fd06f&_nc_ohc=NvyfMcuXYDQAX9Rdee1&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-sof1-2.cdninstagram.com&oh=00_AfCgyfxUKsjdag-lfRw_A-4AeddMKLFoQ8Cer40agIW_cw&oe=65F8DF36" alt="Krum" className="border border-solid border-base-500 rounded-3xl w-5"></img></a>
          <a className="space-x-2 py-0.5" href="#">Krum</a>
        </div>
        
      </div>
    </div>
  );
}
