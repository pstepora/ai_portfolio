import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

// Importy obrazów - Projekt 3
import databaseSchema from './assets/database-schema.png'; 
import svmMatrix from './assets/svm-matrix.png'; 
import thesisImg from './assets/thesis.png';
import featuresSvm from './assets/features-svm.png';

// Importy obrazów - Projekt 2 (Racing Lab)
import racingCover from './assets/racing-game-cover.png'; 
import racingGameImg from './assets/racing-game.png';
import racingFineTuningImg from './assets/racing-game-fine-tuning.png'; 
import racingGameImitationLearningVideo from './assets/racing-game-learning.mp4'; 

import deceptionDetectorDemo from './assets/deception-detector-demo.mp4';
import deceptionDetectorCover from './assets/liar.png';

// --- KOMPONENT NAVBAR ---
const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6"
    >
      <div className="flex items-center gap-6 px-6 py-3 bg-white/70 backdrop-blur-md border border-zinc-100 shadow-sm rounded-full">
        <a
          href="#"
          className="text-sm font-medium hover:text-purple-600 transition-colors"
        >
          Start
        </a>
        <a
          href="#projects"
          className="text-sm font-medium hover:text-purple-600 transition-colors"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="text-sm font-medium hover:text-purple-600 transition-colors"
        >
          Contact
        </a>
        <div className="w-[1px] h-4 bg-zinc-200" />
        <button
          disabled
          className="text-sm font-semibold text-zinc-400 cursor-not-allowed transition-all"
          title="Resume coming soon"
        >
          Resume
        </button>
      </div>
    </motion.nav>
  );
};

// --- DANE PROJEKTÓW ---
const PROJECTS = [
  { 
    id: 1, 
    title: "Deception Detector", 
    desc: "A multimodal machine learning model for automated deception detection using real-life courtroom trial data.", 
    tech: "Python • MFCC • Facial Landmarks • Multimodal ML",
    coverImage: deceptionDetectorCover,
    details: {
      problem: "The goal of this academic team project was to detect deception based on short video clips of individuals speaking. We utilized the \"Deception Detection using Real-life Trial Data\" dataset, consisting of 121 courtroom recordings with transcripts. The clips varied significantly in length, ranging from just 4.5 seconds up to 1.35 minutes.",
      solution: "We adopted a multimodal approach, isolating our analysis strictly to visual and acoustic signals. For the audio stream, we extracted Mel-frequency cepstral coefficients (MFCC) to mathematically describe the sound spectrum. For the video stream, we implemented a sophisticated tracking system that extracts 478 high-density facial landmarks per frame, enabling precise monitoring of micro-movements across the cheeks, forehead, nose, and lips. The core architecture was inspired by the research paper *Advancing Automated Deception Detection: A Multimodal Approach to Feature Extraction and Analysis* (arXiv:2407.06005).",
      findings: [
        "Successfully integrated and synchronized dual modalities (audio MFCC and visual landmarks) for automated deception analysis.",
        "High-density facial landmarking (478 points) proved critical for capturing subtle, involuntary micro-expressions.",
        "Achieved a final model accuracy of 82% in classifying deceptive versus truthful statements after extensive experimentation."
      ],
      images: [
        { 
          src: "https://www.youtube.com/embed/3tK65W806G4", 
          alt: "Project Presentation Video", 
          caption: "Project presentation & overview of the methodology.",
          isYouTube: true // Nowa flaga dla wideo z YT
        },
        { 
          src: deceptionDetectorDemo,
          alt: "Deception Detector Demo", 
          caption: "System demonstration analyzing 478 facial landmarks and audio spectrum from video.",
          isInteractiveVideo: true 
        }
      ],
      links: {
        article: "https://www.zycieuczelni.p.lodz.pl/nie-sa-zamki-na-piasku",
        conference: "Accepted as a poster at Microsoft's CMT 2026"
      }
    }
  },
  { 
    id: 2, 
    title: "Deep Reinforcement Racing Lab", 
    desc: "An autonomous AI racing agent trained to navigate simulated tracks and maximize driving efficiency, relying solely on raw visual data (pixels).",
    tech: "Python • PyTorch • Deep RL • DAgger • Imitation Learning",
    coverImage: racingCover,
    details: {
      problem: "The core challenge was to build an autonomous racing agent capable of true end-to-end navigation—translating raw visual data (game pixels) directly into steering actions without any manual road feature extraction. Operating within a discrete action space (forward, backward, stop, left, right), the AI had to master complex visual perception. The primary hurdle was teaching the model to analyze sequential image frames via Convolutional Neural Networks (CNNs). The agent had to implicitly understand track geometry, spatial positioning, and vehicle speed purely from visual context to maximize lap efficiency.",
      solution: "Standard offline learning proved insufficient for dynamic autonomous control. Instead, I implemented the DAgger (Dataset Aggregation) algorithm across 60 iterative rounds, adapting the dataset to the agent's evolving skills and errors. The pipeline consisted of three core phases: \n\n• Active Sampling: The AI controlled the vehicle and naturally made errors. A background 'Expert' recorded corrective actions for these deviations, enriching the dataset with critical recovery scenarios. \n• Memory Aggregation: A Global Replay Buffer accumulated new edge-case data alongside foundational driving metrics, successfully preventing catastrophic forgetting. \n• Iterative Optimization: After each round, the CNN was retrained on the continuously growing, shuffled dataset (over 200,000 frames) to maintain gradient stability and refine the steering policy.",
      findings: [
        "Achieved 100% autonomous track completion in endurance tests, a massive improvement over the 15-20% success rate of baseline Behavioral Cloning.",
        "Iterative DAgger training proved essential: exposing the model to error states and recovery actions stabilized the dynamic driving policy.",
        "Ego-centric image preprocessing allowed the CNN to generalize the concept of a 'corner', significantly accelerating model convergence.",
        "Identified a core limitation: in Imitation Learning, the autonomous agent's performance is strictly bounded by the skill level of the 'Expert'."
      ],
      images: [
        { 
          src: racingGameImg, 
          alt: "Racing Track Layout", 
          caption: "Simulated racing environment and the agent's visual observation space." 
        },
        { 
          src: racingGameImitationLearningVideo, 
          alt: "Learning from Teacher", 
          caption: "Imitation Learning: Mimicking human driving to build a robust baseline policy." 
        },
        { 
          src: racingFineTuningImg,
          alt: "Diagnostic Interface", 
          caption: "Diagnostic interface during the model evaluation phase." 
        }
      ],
      links: {
        github: "wip" 
      }
    }
  },
  { 
    id: 3, 
    title: "AI-Scientific Guard", 
    desc: "Master's Thesis: Application of Plagiarism Detection Methods for Identifying AI-Generated Content in Scientific Contexts.", 
    tech: "Python • OpenAI • SVM • Random Forest • NLP",
    coverImage: thesisImg,
    details: {
      problem: "The rapid rise of Large Language Models has created a critical challenge for academia: distinguishing genuine student research from algorithmic output, specifically within the complex context of the Polish language. Furthermore, mainstream commercial detectors frequently misidentify dense, formal academic registers as synthetic, leading to severe false positives.",
      solution: "I built a data-driven classifier focused on stylometric analysis rather than simple keyword matching. Using a custom dataset pairing authentic, pre-2019 theses against AI-generated counterparts, I deployed custom scripts to scrutinize deep-seated linguistic patterns (e.g., sentence-length variance, text compression metrics). These features were used to train and evaluate Support Vector Machine (SVM) and Random Forest architectures.",
      findings: [
        "Identified a unique linguistic fingerprint of Polish scientific texts.",
        "Custom classification models achieved an accuracy of ~89% (SVM: 89.77% and Random Forest: 89.28%).",
        "Significantly fewer false positives compared to popular commercial tools.",
        "Human non-linearity and unpredictability remain impossible for AI to fully replicate."
      ],
      images: [
        { src: databaseSchema, alt: "Dataset Statistics", caption: "Database creation scheme. The graphic was created using Nano Banana 2." },
        { src: svmMatrix, alt: "SVM Confusion Matrix", caption: "Confusion matrix for the SVM model. Total test set size: 1018 samples." },
        { src: featuresSvm, alt: "Feature Importance Ranking for SVM", caption: "Feature importance ranking for the SVM model. The chart highlights the most significant linguistic features utilized for effective AI text detection." }
      ],
      links: {
        paper: "https://drive.google.com/file/d/1Vm4b2z4hOZciLw_3QUmO38b9RsbXTayu/view?usp=sharing"   
      }
    }
  },
];

// --- GŁÓWNY KOMPONENT APP ---
function App() {
  const [expandedId, setExpandedId] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const toggleExpand = (id) => {
    if (expandedId === id) setSelectedImage(null);
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-zinc-800 font-sans selection:bg-purple-100">
      {/* <Navbar /> */}

      <header className="max-w-4xl mx-auto pt-40 pb-20 px-6 text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-bold tracking-tight mb-6"
        >
          Hi, I'm <span className="text-purple-600">Patrycja</span>.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-zinc-500 max-w-xl leading-relaxed"
        >
          AI Engineer and QA Automation Engineer. By day, I solve complex
          problems in Artificial Intelligence; by evening, I apply the same
          discipline and strategic thinking on the Brazilian Jiu-Jitsu mats.
        </motion.p>
      </header>

      <main id="projects" className="max-w-4xl mx-auto px-6 pb-32">
        {/* NOWY NAGŁÓWEK PROJECTS */}
        <div className="flex flex-col items-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400 mb-4"
          >
            Selected Works
          </motion.h2>
          <div className="h-[1px] w-12 bg-zinc-200"></div>
        </div>
        <div className="grid grid-cols-1 gap-10">
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-zinc-100 rounded-[2.5rem] p-4 cursor-pointer hover:shadow-xl transition-shadow overflow-hidden relative"
              onClick={() => toggleExpand(project.id)}
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3 aspect-video bg-zinc-50 rounded-[2rem] flex items-center justify-center text-zinc-300 font-medium overflow-hidden border border-zinc-100 relative">
                  {project.coverImage ? (
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-[2rem]"
                    />
                  ) : (
                    "[Zdjęcie Cover]"
                  )}
                </div>

                <div className="flex-1 py-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-600">
                    {project.tech}
                  </span>
                  <h3 className="text-3xl font-semibold mt-2">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-zinc-500 leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              </div>

              {/* --- SEKCJA ROZWIJANA --- */}
              <AnimatePresence>
                {expandedId === project.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="border-t border-zinc-100 mt-6 pt-6 overflow-hidden"
                  >
                    {project.details ? (
                      <div className="flex flex-col gap-10">
                        {/* WARIANT 1: Projekt 1 (Deception Detector) i 2 (Racing Lab) -> Obrazki/Wideo po prawej, Findings na dole */}
                        {project.id === 1 || project.id === 2 ? (
                          <>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                              <div className="flex flex-col gap-8">
                                <div>
                                  <h4 className="text-lg font-bold text-zinc-900 mb-2">
                                    The Challenge
                                  </h4>
                                  <p className="text-zinc-600 leading-relaxed text-sm whitespace-pre-line">
                                    {project.details.problem}
                                  </p>
                                </div>
                                <div>
                                  <h4 className="text-lg font-bold text-zinc-900 mb-2">
                                    The Approach
                                  </h4>
                                  <p className="text-zinc-600 leading-relaxed text-sm whitespace-pre-line">
                                    {project.details.solution}
                                  </p>
                                </div>
                              </div>
                              <div className="flex flex-col gap-6">
                                {project.details.images.map((img, i) => (
                                  <div key={i} className="flex flex-col gap-2">
                                    <div className="w-full aspect-video bg-zinc-100 rounded-xl overflow-hidden border border-zinc-200 bg-black relative group">
                                      {img.isYouTube ? (
                                        <iframe
                                          src={img.src}
                                          title={img.alt}
                                          className="w-full h-full border-none"
                                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                          allowFullScreen
                                        />
                                      ) : img.isInteractiveVideo ? (
                                        <>
                                          <video
                                            src={img.src}
                                            className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              setSelectedImage(img);
                                            }}
                                          />
                                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                            <div className="w-12 h-12 bg-zinc-900/60 rounded-full flex items-center justify-center group-hover:bg-purple-600/90 transition-colors backdrop-blur-sm">
                                              <svg
                                                className="w-5 h-5 text-white ml-1"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                              >
                                                <path d="M8 5v14l11-7z" />
                                              </svg>
                                            </div>
                                          </div>
                                        </>
                                      ) : img.src.endsWith(".mp4") ? (
                                        <video
                                          src={img.src}
                                          autoPlay
                                          loop
                                          muted
                                          playsInline
                                          className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedImage(img);
                                          }}
                                        />
                                      ) : (
                                        <motion.img
                                          layoutId={`modal-image-${img.src}`}
                                          src={img.src}
                                          alt={img.alt}
                                          className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedImage(img);
                                          }}
                                        />
                                      )}
                                    </div>
                                    <p className="text-xs text-center text-zinc-400 font-medium uppercase tracking-wider">
                                      {img.caption}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-100">
                              <h4 className="text-lg font-bold text-zinc-900 mb-4">
                                Key Findings
                              </h4>
                              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                                {project.details.findings.map((finding, i) => (
                                  <li
                                    key={i}
                                    className="flex gap-3 text-sm text-zinc-600"
                                  >
                                    <span className="text-purple-600 font-bold shrink-0">
                                      ✓
                                    </span>
                                    <span>{finding}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </>
                        ) : (
                          // WARIANT 2: Projekt 3 -> Findings po prawej, Obrazki na dole
                          <>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                              <div>
                                <h4 className="text-lg font-bold text-zinc-900 mb-2">
                                  The Challenge
                                </h4>
                                <p className="text-zinc-600 leading-relaxed text-sm mb-6 whitespace-pre-line">
                                  {project.details.problem}
                                </p>

                                <h4 className="text-lg font-bold text-zinc-900 mb-2">
                                  The Approach
                                </h4>
                                <p className="text-zinc-600 leading-relaxed text-sm whitespace-pre-line">
                                  {project.details.solution}
                                </p>
                              </div>

                              <div className="bg-zinc-50 rounded-2xl p-6 border border-zinc-100 flex flex-col">
                                <h4 className="text-lg font-bold text-zinc-900 mb-4">
                                  Key Findings
                                </h4>
                                <ul className="flex flex-col justify-between flex-1 gap-2">
                                  {project.details.findings.map(
                                    (finding, i) => (
                                      <li
                                        key={i}
                                        className="flex gap-3 text-sm text-zinc-600"
                                      >
                                        <span className="text-purple-600 font-bold shrink-0">
                                          ✓
                                        </span>
                                        <span>{finding}</span>
                                      </li>
                                    ),
                                  )}
                                </ul>
                              </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {project.details.images.map((img, i) => {
                                const isThirdAndCentered =
                                  project.details.images.length === 3 &&
                                  i === 2;
                                return (
                                  <div
                                    key={i}
                                    className={`flex flex-col gap-2 ${isThirdAndCentered ? "md:col-span-2 md:w-[calc(50%-0.5rem)] md:mx-auto mt-4" : ""}`}
                                  >
                                    <div className="w-full aspect-video bg-zinc-100 rounded-xl overflow-hidden border border-zinc-200">
                                      <motion.img
                                        layoutId={`modal-image-${img.src}`}
                                        src={img.src}
                                        alt={img.alt}
                                        className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          setSelectedImage(img);
                                        }}
                                      />
                                    </div>
                                    <p className="text-xs text-center text-zinc-400 font-medium uppercase tracking-wider">
                                      {img.caption}
                                    </p>
                                  </div>
                                );
                              })}
                            </div>
                          </>
                        )}

                        {/* Linki i osiągnięcia */}
                        <div className="flex flex-wrap gap-x-6 gap-y-3 pt-4 border-t border-zinc-100 items-center">
                          {project.details.links?.paper && (
                            <a
                              href={project.details.links.paper}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-zinc-900 font-semibold hover:text-purple-600 transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              Read Thesis [PL] ↗
                            </a>
                          )}

                          {/* Artykuł o projekcie */}
                          {project.details.links?.article && (
                            <a
                              href={project.details.links.article}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-zinc-900 font-semibold hover:text-purple-600 transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              Article Feature ↗
                            </a>
                          )}

                          {/* Osiągnięcie konferencyjne */}
                          {project.details.links?.conference && (
                            <div
                              className="flex items-center gap-2 cursor-default"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <span className="text-sm text-zinc-900 font-semibold">
                                🏆 {project.details.links.conference}
                              </span>
                            </div>
                          )}

                          {/* Logika dla GitHuba */}
                          {project.details.links?.github === "wip" ? (
                            <div
                              className="flex items-center gap-2 cursor-default"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
                              </span>
                              <span className="text-sm text-zinc-500 font-medium italic">
                                Preparing GitHub repo...
                              </span>
                            </div>
                          ) : (
                            project.details.links?.github && (
                              <a
                                href={project.details.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-zinc-900 font-semibold hover:text-purple-600 transition-colors"
                                onClick={(e) => e.stopPropagation()}
                              >
                                GitHub Repository →
                              </a>
                            )
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="prose prose-zinc max-w-none text-zinc-600">
                        Details coming soon...
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Stopka */}
      <footer
        id="contact"
        className="max-w-4xl mx-auto px-6 py-12 border-t border-zinc-100"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-zinc-900 font-medium">© 2026 Patrycja Stępora</p>
            <div className="flex items-center justify-center md:justify-start gap-2 mt-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <p className="text-xs text-zinc-500">Available for work</p>
            </div>
          </div>
          <div className="flex gap-6 text-sm font-medium text-zinc-600">
            <a
              href="https://github.com/pstepora"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-600 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/patrycja-stepora/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-600 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:patrycjastepora@gmail.com"
              className="hover:text-purple-600 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
        <p className="text-center text-[10px] text-zinc-400 mt-10 uppercase tracking-widest">
          Built with React • Tailwind • Framer Motion • Gemini
        </p>
      </footer>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && !selectedImage.isYouTube && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-zinc-900/90 p-4 sm:p-8 cursor-pointer backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            {selectedImage.isInteractiveVideo ? (
              // Wideo interaktywne - odtwarza się ze sprzętem i paskiem po powiększeniu
              <motion.video
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                src={selectedImage.src}
                autoPlay
                controls
                className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            ) : selectedImage.src.endsWith(".mp4") ? (
              // Tradycyjne wideo puszczone w pętli jak GIF
              <motion.video
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                src={selectedImage.src}
                autoPlay
                loop
                muted
                playsInline
                className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              // Zwykły obraz
              <motion.img
                layoutId={`modal-image-${selectedImage.src}`}
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
              />
            )}

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-zinc-300 text-sm md:text-base text-center max-w-2xl"
            >
              {selectedImage.caption}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;