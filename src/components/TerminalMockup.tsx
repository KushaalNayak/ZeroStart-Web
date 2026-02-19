import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TerminalMockup = () => {
  const [step, setStep] = useState(0);
  const [text, setText] = useState("");
  const fullText = "zerostart";

  useEffect(() => {
    if (step === 0) {
      if (text.length < fullText.length) {
        const timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length + 1));
        }, 150);
        return () => clearTimeout(timeout);
      } else {
        setTimeout(() => setStep(1), 1000);
      }
    } else if (step === 1) {
      setTimeout(() => setStep(2), 1200);
    } else if (step === 2) {
      setTimeout(() => setStep(3), 800);
    } else if (step === 3) {
      const timeout = setTimeout(() => {
        setText("");
        setStep(0);
      }, 4000);
      return () => clearTimeout(timeout);
    }
  }, [text, step]);

  return (
    <div className="w-full max-w-2xl mx-auto glass rounded-xl overflow-hidden shadow-2xl border-white/10">
      <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex items-center justify-between">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
        <div className="text-[10px] text-white/30 font-mono tracking-widest uppercase">bash — zerostart</div>
        <div className="w-10" />
      </div>

      <div className="p-6 font-mono text-sm sm:text-base min-h-[300px] bg-black/40 backdrop-blur-xl">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-blue-vibrant">➜</span>
          <span className="text-blue-400">~/projects</span>
          <span className="text-white">{text}</span>
          {step === 0 && <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="w-2 h-5 bg-blue-vibrant"
          />}
        </div>

        <AnimatePresence>
          {step >= 1 && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-1 mb-4"
            >
              <div className="text-white/60">? Select category:</div>
              <div className="flex gap-2 text-blue-vibrant">
                <span>❯</span>
                <span className="bg-blue-vibrant/10 px-2 py-0.5 rounded border border-blue-vibrant/20">
                  🏆 Competitive Programming
                </span>
              </div>
              <div className="pl-4 text-white/40">🌐 Web Development</div>
            </motion.div>
          )}

          {step >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-1 mb-4"
            >
              <div className="text-white/60">? Select language:</div>
              <div className="pl-4 text-white/40">C++</div>
              <div className="pl-4 text-white/40">Java</div>
              <div className="flex gap-2 text-blue-vibrant">
                <span>❯</span>
                <span className="bg-blue-vibrant/10 px-2 py-0.5 rounded border border-blue-vibrant/20">
                  Python
                </span>
              </div>
            </motion.div>
          )}

          {step >= 3 && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-2 mt-6"
            >
              <div className="text-green-400 flex items-center gap-2">
                <span className="text-xl">✔</span>
                <span>Created project: dsa-python-practice</span>
              </div>
              <div className="text-blue-vibrant/80 pl-6 italic">
                🚀 Launching Online GDB Compiler...
              </div>
              <div className="text-white/40 pl-6 text-xs mt-4">
                Done in 0.4s.
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-video glass-vibrant rounded-lg shadow-2xl border-blue-vibrant/40 overflow-hidden flex flex-col"
          >
            <div className="bg-blue-vibrant/20 px-3 py-1.5 flex items-center justify-between border-b border-blue-vibrant/20">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-vibrant/40" />
                <div className="w-1.5 h-1.5 rounded-full bg-blue-vibrant/40" />
                <div className="w-1.5 h-1.5 rounded-full bg-blue-vibrant/40" />
              </div>
              <div className="text-[8px] text-blue-vibrant font-mono opacity-50 uppercase tracking-tighter">online-gdb.com/python3</div>
              <div className="w-4" />
            </div>
            <div className="flex-1 p-4 bg-black/60 font-mono text-[10px] space-y-2">
              <div className="text-white/40"># Python 3 Code</div>
              <div className="text-blue-vibrant">print(<span className="text-white">"Hello ZeroStart!"</span>)</div>
              <div className="text-white/20">...</div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default TerminalMockup;
