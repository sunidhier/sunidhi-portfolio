import { motion } from 'framer-motion';
import { Mic, Brain, AudioWaveform, ChevronRight, Github, FlaskConical } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import Tag from '../ui/Tag';

const pipeline = [
  { icon: Mic, label: 'Audio Input', desc: 'Raw speech with disfluencies' },
  { icon: AudioWaveform, label: 'MFCC Features', desc: 'Mel-frequency cepstral coefficients extracted' },
  { icon: Brain, label: 'DNN Classifier', desc: 'Deep neural network identifies stutter patterns' },
  { icon: FlaskConical, label: 'STT + Rule Engine', desc: 'Speech-to-text with rule-based correction' },
  { icon: Mic, label: 'Clean Output', desc: 'Synthesised fluent speech via TTS' },
];

export default function Research() {
  return (
    <section id="research" className="section-padding" aria-labelledby="research-heading">
      <div className="section-container">
        <SectionHeader
          label="Research"
          title="Hybrid Speech"
          titleHighlight="Research"
          subtitle="My applied AI research project on automated recognition and correction of stuttered speech."
        />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Main content — 3 cols */}
          <div className="lg:col-span-3 space-y-6">
            {/* Paper card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-base p-8 border-[#8B5CF6]/25 relative overflow-hidden"
              style={{ boxShadow: '0 0 40px rgba(139, 92, 246, 0.07)' }}
            >
              <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-5 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at center, #8B5CF6 0%, transparent 70%)',
                  filter: 'blur(40px)',
                }}
                aria-hidden="true"
              />

              <span className="inline-block text-xs font-mono tracking-widest uppercase text-[#A78BFA] border border-[#8B5CF6]/25 bg-[#8B5CF6]/5 px-3 py-1 rounded-full mb-5">
                Research Project
              </span>

              <h3 className="text-2xl font-bold text-white mb-4 leading-snug">
                A Hybrid Model for Automated Recognition and Correction of Stuttered Speech
              </h3>

              {/* Problem */}
              <div className="mb-5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">Problem</h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Stuttering affects approximately 1% of the global population. Existing speech technology 
                  often struggles with disfluencies, impacting accessibility in voice interfaces, transcription 
                  services and communication aids. Automated tools that can recognise and correct disfluent 
                  speech have broad accessibility implications.
                </p>
              </div>

              {/* Approach */}
              <div className="mb-5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2">Approach</h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  The project implements a multi-stage pipeline: MFCC feature extraction from audio, 
                  a Deep Neural Network (DNN) classifier to identify and categorise speech disfluencies, 
                  followed by speech-to-text transcription. A rule-based processing layer corrects identified 
                  disfluencies in the text domain, and the corrected output is synthesised back to speech 
                  using text-to-speech.
                </p>
              </div>

              {/* Completed vs Planned */}
              <div className="grid sm:grid-cols-2 gap-4 mb-5">
                <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2">✓ Completed</h4>
                  <ul className="space-y-1.5">
                    {[
                      'MFCC feature extraction pipeline',
                      'DNN-based disfluency classifier',
                      'Speech-to-text integration',
                      'Rule-based correction engine',
                      'Text-to-speech synthesis',
                      'End-to-end hybrid pipeline',
                    ].map((item) => (
                      <li key={item} className="text-xs text-slate-400 flex items-start gap-2">
                        <ChevronRight size={11} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-2">◌ Future Scope</h4>
                  <ul className="space-y-1.5">
                    {[
                      'Real-time processing optimisation',
                      'Larger and more diverse datasets',
                      'Transformer-based architecture',
                      'Clinical validation studies',
                      'FPGA/VLSI hardware implementation (planned)',
                      'Mobile/edge deployment',
                    ].map((item) => (
                      <li key={item} className="text-xs text-slate-400 flex items-start gap-2">
                        <ChevronRight size={11} className="text-amber-400 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Disclaimer */}
              <p className="text-xs text-slate-600 italic mb-5">
                Note: This is an academic research project. No clinical accuracy metrics, publications, 
                or real-world deployments are claimed.
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mb-6">
                {['Python', 'TensorFlow/Keras', 'librosa', 'MFCC', 'DNN', 'SpeechRecognition', 'pyttsx3', 'NumPy'].map(
                  (t) => (
                    <Tag key={t} label={t} variant="violet" />
                  )
                )}
              </div>

              <a
                href="https://github.com/sunidhier/Speech-classification-and-stutter-correction"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-sm py-2.5"
              >
                <Github size={15} />
                View Repository
              </a>
            </motion.div>
          </div>

          {/* Pipeline — 2 cols */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="sticky top-24"
            >
              <h3 className="text-sm font-mono uppercase tracking-widest text-slate-500 mb-6">System Pipeline</h3>
              <div className="space-y-1">
                {pipeline.map((step, i) => (
                  <div key={step.label} className="flex items-start gap-4">
                    {/* Connector */}
                    <div className="flex flex-col items-center">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{
                          background: `rgba(139, 92, 246, ${0.1 + i * 0.04})`,
                          border: `1px solid rgba(139, 92, 246, ${0.2 + i * 0.05})`,
                        }}
                      >
                        <step.icon size={14} className="text-[#A78BFA]" />
                      </div>
                      {i < pipeline.length - 1 && (
                        <div className="w-px h-8 bg-gradient-to-b from-[#8B5CF6]/30 to-transparent" />
                      )}
                    </div>
                    {/* Content */}
                    <div className="pb-4">
                      <p className="text-white text-sm font-medium">{step.label}</p>
                      <p className="text-slate-500 text-xs mt-0.5">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
