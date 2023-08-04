import BlogCard from "../card/blogCard";

export default function HotBlog() {

  const imgExample = [
    "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
    "https://images.unsplash.com/photo-1669739432571-aee1f057c41f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80",
    "https://images.unsplash.com/photo-1657299171054-e679f630a776?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  ];


  return <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto dark:bg-gray-700">
    <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
      <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
        Bài đăng nổi bật
      </h2>
      <p className="mt-1 text-gray-600 dark:text-gray-400">

      </p>
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {imgExample.map((e, index) => {
        const card: BlogCardData = {
          slug: e,
          name: "Tập 1, C# là gì",
          description: "Giới thiệu về C# và viết chương trình đầu tiên với C#"
        }
        return (
          <BlogCard key={index} card={card}/>
        );
      })}
    </div>
  </div>
}