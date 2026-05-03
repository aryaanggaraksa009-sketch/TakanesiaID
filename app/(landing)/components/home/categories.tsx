import Image from "next/image";

const categoryList = [
  {
    name: "X",
    imgUrl: "category-X.png",
    link: "https://x.com/TakanesiaID",
  },
  {
    name: "Facebook",
    imgUrl: "category-facebook.png",
    link: "https://www.facebook.com/people/Takanesia-ID/61582971665549/?ref=PROFILE_EDIT_xav_ig_profile_page_web#",
  },
  {
    name: "Instagram",
    imgUrl: "category-instagram.png",
    link: "https://www.instagram.com/takanesia.id",
  },
  {
    name: "Discord",
    imgUrl: "category-discord.png",
    link: "https://discord.gg/39EgPeJW",
  },
  {
    name: "Youtube",
    imgUrl: "category-youtube.png",
    link: "https://www.youtube.com/@TakanesiaID",
  },
  {
    name: "Email",
    imgUrl: "category-email.png",
    link: "https://mail.google.com/mail/?view=cm&to=takanesia.id@gmail.com",
  },
];

const CategoriesSection = () => {
  return (
    <section id="category" className="container mx-auto pb-20 mt-20">
       <div className="flex flex-col items-center">
        <h2 className="font-bold text-2xl text-center">Hadir untuk fans indonesia yang ingin mendukung perjalanan Takaneko ✨</h2>
      <div className="grid grid-cols-6 gap-10 mt-8 px-15">
        {categoryList.map((category, index) => (
          <a
            href={category.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="mt-10 rounded-lg bg-gradient-to-r from-[#F1F1F1] to-[#F7F7F7] w-full aspect-square flex justify-center category-btn bg-white rounded-lg shadow-md shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 ease-in-out p-4 cursor-pointer" 
          >
            <div className="flex flex-col items-center justify-center">
              <Image
                src={`/images/categories/${category.imgUrl}`}
                width={86}
                height={86}
                alt={category.name}
                className="mb-[10px]"
              />
              <div className="font-medium text-xl text-center container mx-auto">
                {category.name}
              </div>
            </div>
          </a>
        ))}
      </div>
      </div>
    </section>
  );
};

export default CategoriesSection;