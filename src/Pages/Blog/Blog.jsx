const Blog = () => {
  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    .purple_border {\n        box-shadow: 4px 4px 1px rgb(126, 34, 206);\n    }\n\n    .black_border {\n        box-shadow: 4px 4px 1px rgb(0, 0, 0);\n    }\n",
        }}
      />
      <div>
        <div className="relative m-16">
          <button className="absolute py-1 px-3 -left-8 -top-2 -rotate-[10deg] border border-black black_border bg-[#7e22ce] text-white font-bold">
            WARNING!
          </button>
          <div className="purple_border p-8 border border-black">
            The
            <span className="font-mono text-purple-700 font-bold">message</span>
            variable is a Laravel reserved word within this email context, so
            you should avoid using that as a field handle if you intend on using
            the email feature.
          </div>
        </div>
        <div className="relative m-16">
          <span className="absolute -z-10  w-full h-full inset-1 bg-violet-500 rounded-xl" />
          <button className="absolute py-1 z-10 px-3 -left-8 -top-2 -rotate-[10deg] black_border bg-violet-500 text-white font-bold">
            WARNING!
          </button>
          <div className="p-8 border border-black purple_border bg-white rounded-xl z-20">
            The
            <span className="font-mono text-purple-700 font-bold">message</span>
            variable is a Laravel reserved word within this email context, so
            you should avoid using that as a field handle if you intend on using
            the email feature.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
