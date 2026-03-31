'use client';

import { useEffect } from 'react';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import { Shield, Clock, Award, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  { icon: Shield, label: 'Satisfaction garantie', value: '100%' },
  { icon: Clock, label: 'Intervention rapide', value: '24h' },
  { icon: Award, label: "Années d'expérience", value: '10+' },
  { icon: Star, label: 'Avis clients', value: '5/5' },
];

function HeroContent() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg shadow-emerald-500/5 border border-emerald-100"
          >
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-md shadow-emerald-500/20">
              <stat.icon className="w-6 h-6 text-white" />
            </div>
            <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
            <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Redonner vie à vos <span className="text-emerald-600">intérieurs</span>
        </h3>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
          Spécialistes du nettoyage en profondeur de canapés, matelas, fauteuils et chaises.
          Un service professionnel pour les particuliers et les professionnels en Île-de-France.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-2xl hover:from-emerald-700 hover:to-teal-700 transition-all shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 text-lg"
          >
            Demander un devis gratuit
          </a>
          <a
            href="#services"
            className="px-8 py-4 bg-white text-emerald-700 font-semibold rounded-2xl border-2 border-emerald-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all text-lg"
          >
            Découvrir nos services
          </a>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="accueil">
      <ScrollExpandMedia
        mediaType="image"
        mediaSrc="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=1280&auto=format&fit=crop"
        bgImageSrc="https://images.unsplash.com/photo-1527515637462-cff94eebd21f?q=80&w=1920&auto=format&fit=crop"
        title="Fresh Cleaning"
        date="Nettoyage Professionnel"
        scrollToExpand="Scroll pour découvrir"
        textBlend
      >
        <HeroContent />
      </ScrollExpandMedia>
    </section>
  );
}
