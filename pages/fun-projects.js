import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';
import {
  FaGamepad,
  FaMagic,
  FaMusic,
  FaUtensils,
  FaChartLine,
  FaUserAstronaut,
  FaCloudSun,
  FaRegSmile,
  FaSeedling,
  FaFileAlt,
} from 'react-icons/fa';

const projects = [
  {
    repository: 'naruto-gesture',
    title: 'Naruto Gesture',
    description: 'An experiment in bringing anime powers to the browser: use hand and face gestures to trigger a Rasengan or Sharingan.',
    tags: ['Creative coding', 'Gesture controls'],
    icon: FaMagic,
  },
  {
    repository: 'indy',
    title: 'DigiSpin',
    description: 'A digital-creature RPG playground in the browser.',
    tags: ['Game', 'RPG'],
    icon: FaGamepad,
  },
  {
    repository: 'Mood-Analyzer',
    title: 'Spotify Mood Analyzer',
    description: 'Explore the mood of your Spotify music through sentiment analysis.',
    tags: ['Music', 'Sentiment analysis'],
    icon: FaMusic,
  },
  {
    repository: 'weather-app-vibes',
    title: 'Cena Weather',
    description: 'A playful, John Cena-themed weather app for checking conditions by city.',
    tags: ['Weather', 'Just for fun'],
    icon: FaCloudSun,
  },
  {
    repository: 'buzzlightyear-site',
    title: 'Buzz Lightyear Portfolio',
    description: 'A tongue-in-cheek professional portfolio for a very experienced Space Ranger.',
    tags: ['Character website', 'Design'],
    icon: FaUserAstronaut,
  },
  {
    repository: 'moandcourtsfoodpicker',
    title: 'Mo & Court Food Picker',
    description: 'A small food-picker app for the eternal question: what should we eat?',
    tags: ['Food', 'Everyday tools'],
    icon: FaUtensils,
  },
  {
    repository: 'Sorry-Counter',
    title: 'Sorry Counter',
    description: 'A virtual sorry jar that keeps track of how often people apologize.',
    tags: ['Counter', 'Everyday tools'],
    icon: FaRegSmile,
  },
  {
    repository: 'mohaimen-health-stats',
    title: 'My Fitness',
    description: 'A data-visualization experiment exploring training patterns, activity, and consistency.',
    tags: ['Data visualization', 'Fitness'],
    icon: FaChartLine,
  },
  {
    repository: 'weather-app',
    title: 'Weather Dashboard',
    description: 'A weather dashboard with current conditions, a five-day forecast, and temperature trends.',
    tags: ['Weather', 'Dashboard'],
    icon: FaCloudSun,
  },
  {
    repository: 'aliveposter',
    title: 'ALIVE Poster Library',
    description: 'Three print-ready poster designs for mucinous ovarian cancer education and community awareness.',
    tags: ['Design', 'Awareness'],
    icon: FaFileAlt,
  },
  {
    repository: 'menvsgorilla',
    title: '100 Men vs. 1 Gorilla',
    description: 'An over-serious, paper-style exploration of a very unserious internet debate.',
    tags: ['Internet culture', 'Writing'],
    icon: FaFileAlt,
  },
  {
    repository: 'Crystal-Ball-Music-Trend-Predictor-Hack-The-6',
    title: 'Crystal Ball',
    description: 'A hackathon experiment that tries to predict future music popularity from Spotify listening habits.',
    tags: ['Music', 'Hackathon', 'Archived'],
    icon: FaMusic,
    notice: 'Archived experiment; connected services may no longer be available.',
  },
  {
    repository: 'FruitAppDetector',
    title: 'Fruit App Detector',
    description: 'An early experiment that asks whether you are a fruit.',
    tags: ['Experiment', 'Archived'],
    icon: FaSeedling,
    demoUnavailable: true,
    notice: 'The archived demo has broken asset links. The source is still available below.',
  },
];

export default function Fun() {
  return (
    <Layout
      title="Fun | Mohaimen Khan"
      description="Small experiments, browser games, music apps, and creative side projects by Mohaimen Khan."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-code-yellow font-mono mb-4">Built out of curiosity</p>
          <h1 className="text-4xl font-bold text-white mb-6">
            <span className="text-code-green">&lt;</span>
            Fun
            <span className="text-code-green">/&gt;</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Small experiments, playful websites, and things I built just because.
            Browse the projects or peek at the code.
          </p>
        </motion.div>

        <section aria-labelledby="playground-heading">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <h2 id="playground-heading" className="text-2xl font-bold text-white">
              <span className="text-code-green mr-2">#</span> The playground
            </h2>
            <span className="text-sm text-gray-400 font-mono">{projects.length} side projects</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(({ repository, icon: Icon, demoUnavailable, ...project }) => (
              <ProjectCard
                key={repository}
                {...project}
                icon={<Icon />}
                githubUrl={`https://github.com/mohaimenhasan/${repository}`}
                liveUrl={demoUnavailable ? undefined : `https://mohaimenhasan.github.io/${repository}/`}
              />
            ))}
          </div>
          <p className="text-sm text-gray-400 mt-8">
            Some experiments depend on third-party services or browser permissions.
            Archived projects are kept here as a little time capsule.
          </p>
        </section>
      </div>
    </Layout>
  );
}
