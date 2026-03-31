'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-700 rounded-[2rem] p-10 lg:p-16 text-center overflow-hidden shadow-2xl shadow-emerald-500/20"
        >
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-teal-400/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-400/5 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/15 flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Prêt à redonner vie<br />à votre intérieur ?
            </h2>
            <p className="text-lg text-emerald-100 max-w-2xl mx-auto mb-8">
              Obtenez un devis gratuit en moins de 2 minutes. Notre équipe vous recontacte
              rapidement pour organiser votre intervention.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-emerald-700 font-bold rounded-2xl hover:bg-emerald-50 transition-all shadow-xl text-lg group"
              >
                Devis gratuit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+33123456789"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-2xl hover:bg-white/20 transition-all border border-white/20 text-lg"
              >
                Appeler maintenant
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
