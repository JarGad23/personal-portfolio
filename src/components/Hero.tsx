import Image from "next/image";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="w-full flex flex-col sm:flex-row max-w-4xl border-4 border-neutral-200 rounded-lg"
    >
      <div className="w-full sm:w-1/2 h-[350px] sm:h-full flex items-center justify-center">
        <div className="relative w-full h-full">
          <Image
            fill
            src="/profile-me.png"
            alt="profile picture"
            className="object-cover object-center rounded-t-md sm:rounded-tr-none sm:rounded-l-md"
          />
        </div>
      </div>
      <div className="w-full sm:w-1/2 font-semibol p-8 text-neutral-950">
        <h3 className="text-2xl sm:text-4xl sm:leading-relaxed">
          <span className="font-bold">Hello, I&apos;m Jarosław.</span> I&apos;m{" "}
          <span className="font-bold">front-end developer </span>with a{" "}
          <span className="font-bold">Year of professional expirience.</span> I
          enjoy building sites & apps mainly using{" "}
          <span className="font-bold">Next.js</span>
        </h3>
      </div>
    </section>
  );
};
