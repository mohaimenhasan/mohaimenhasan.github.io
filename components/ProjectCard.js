import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useState } from 'react';

const ProjectCard = ({ 
  title, 
  description, 
  tags = [], 
  githubUrl, 
  liveUrl, 
  codeSnippet,
  icon,
  notice
}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div 
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700 h-full flex flex-col"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-6 flex-1">
        {icon && <div aria-hidden="true" className="text-code-blue text-3xl mb-5">{icon}</div>}
        <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
        
        <p className="text-gray-300 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 text-xs font-mono rounded bg-gray-700 text-code-blue"
            >
              {tag}
            </span>
          ))}
        </div>

        {notice && <p className="text-sm text-code-yellow mb-4">{notice}</p>}

        {codeSnippet && (
          <motion.button
            className="text-sm text-code-yellow hover:text-code-blue font-mono flex items-center"
            onClick={() => setShowDetails(!showDetails)}
            whileHover={{ x: 5 }}
          >
            <span className="mr-1">{showDetails ? '-' : '+'}</span>
            <span>{showDetails ? 'Hide details' : 'View details'}</span>
          </motion.button>
        )}
      </div>

      {(liveUrl || githubUrl) && (
        <div className="flex flex-wrap gap-4 px-6 pb-6">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${title} (opens in a new tab)`}
              className="inline-flex items-center gap-2 text-sm text-code-blue hover:underline"
            >
              Open project <FaExternalLinkAlt size={12} aria-hidden="true" />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} source on GitHub (opens in a new tab)`}
              className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white hover:underline"
            >
              <FaGithub size={16} aria-hidden="true" /> Source
            </a>
          )}
        </div>
      )}
      
      {codeSnippet && showDetails && (
        <motion.div 
          className="border-t border-gray-700 p-4 bg-gray-900 overflow-x-auto"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
        >
          <pre className="font-mono text-sm text-gray-300 whitespace-pre-wrap">
            <code>{codeSnippet}</code>
          </pre>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ProjectCard;