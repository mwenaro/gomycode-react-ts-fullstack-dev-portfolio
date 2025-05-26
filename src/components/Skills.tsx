

interface Skill {
  name: string;
  image: string;
}

const skills: Skill[] = [
  { name: 'JavaScript', image: '/js-icon.png' },
  { name: 'TypeScript', image: '/ts-icon.png' },
  { name: 'HTML5', image: '/html-icon.png' },
  { name: 'CSS3', image: '/css-icon.png' },
  { name: 'React', image: '/react-icon.png' },
  { name: 'Redux', image: '/redux-icon.png' },
  { name: 'Node.js', image: '/nodejs-icon.png' },
  { name: 'Next.js', image: '/nextjs-icon.png' },
  { name: 'Linux', image: '/linux-icon.png' },
  { name: 'Python', image: '/python-icon.png' },
  { name: 'Ruby', image: '/ruby-icon.png' },
  { name: 'Rails', image: '/rails-icon.png' },
];

export function SkillsSection() {
  return (
    <section className="py-10 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-lime-400 mb-6">skills()</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="flex justify-center items-center">
              <img
                src={skill.image}
                alt={skill.name}
                className="w-16 h-16 object-contain transition-transform transform hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}