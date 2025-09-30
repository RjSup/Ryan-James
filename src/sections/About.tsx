export default function About() {
  return (
    <section
      id="about"
      className="w-full h-fit flex flex-col items-center p-6 snap-start"
    >
      {/* Heading */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">About Me</h1>
      </div>

      {/* Content Blocks */}
      <div className="flex flex-col space-y-4 max-w-2xl py-12">
        <div className="flex flex-col text-center py-2">
          <p className="text-lg tracking-wider uppercase leading-8">
            Hi, I’m <strong>Ryan</strong> — a <strong>Computer Science graduate</strong> living in <strong>Oxford</strong> who loves turning ideas into working software. Whether it’s solving a technical challenge or creating something interactive, I enjoy building things that make an impact.
          </p>
        </div>

        <div className="flex flex-col text-center py-2">
          <p className="text-lg tracking-wider uppercase leading-8">
            My interests span <strong>full-stack web development</strong>, <strong>machine learning</strong>, <strong>IoT</strong>, and <strong>game development</strong>. I'm always curious about how things work, and even more excited about making them better.
          </p>
        </div>

        <div className="flex flex-col text-center py-2">
          <p className="text-lg tracking-wider uppercase leading-8">
            I’m currently looking for a <strong>graduate software engineering role</strong> where I can grow my skills, contribute to real projects, and keep learning every day.
          </p>
        </div>

        <div className="flex flex-col text-center py-2">
          <p className="text-lg tracking-wider uppercase leading-8">
            Outside of coding, you’ll probably find me deep into a strategy game or tinkering with side projects just for fun.
          </p>
        </div>
      </div>
    </section>
  );
}
