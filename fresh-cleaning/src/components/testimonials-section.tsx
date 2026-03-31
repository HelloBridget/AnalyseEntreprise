'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Marie Dupont',
    role: 'Particulier — Paris 12e',
    text: 'Mon canapé avait des taches tenaces depuis des mois. Après le passage de Fresh Cleaning, il est comme neuf ! Le résultat est bluffant. Je recommande vivement.',
    rating: 5,
  },
  {
    name: 'Jean-Pierre Martin',
    role: 'Directeur — Hôtel Le Marais',
    text: 'Nous faisons appel à Fresh Cleaning pour l\'entretien de nos matelas et fauteuils. Service professionnel, ponctuel et résultats toujours impeccables. Un vrai partenaire de confiance.',
    rating: 5,
  },
  {
    name: 'Sophie Laurent',
    role: 'Particulier — Meaux',
    text: 'Intervention rapide et très efficace sur nos chaises de salle à manger. Les produits utilisés sont écolos, ce qui est un vrai plus quand on a des enfants. Merci !',
    rating: 5,
  },
  {
    name: 'Thomas Bernard',
    role: 'Gérant — Restaurant L\'Atelier',
    text: 'Nettoyage de toutes nos banquettes en un après-midi. L\'équipe est pro, discrète et le résultat est au-delà de nos attentes. On refait appel à eux chaque trimestre.',
    rating: 5,
  },
  {
    name: 'Camille Moreau',
    role: 'Particulier — Torcy',
    text: 'J\'ai fait nettoyer mon matelas et deux canapés. Le technicien m\'a tout expliqué et le résultat est incroyable. Les taches ont complètement disparu !',
    rating: 5,
  },
  {
    name: 'Nadia Benchekri',
    role: 'Particulier — Chelles',
    text: 'Service impeccable du début à la fin. Réponse rapide, devis clair, intervention soignée. Mon fauteuil est comme neuf. Je suis conquise.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="temoignages" className="py-24 lg:py-32 bg-gradient-to-b from-emerald-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-emerald-500/20 text-emerald-300 text-sm font-semibold rounded-full mb-4 border border-emerald-500/20">
            Témoignages
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ils nous font <span className="text-emerald-400">confiance</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Plus de 2000 clients satisfaits en Île-de-France. Découvrez leurs retours d&apos;expérience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-emerald-500/30 transition-all duration-300 hover:bg-white/10"
            >
              <Quote className="w-8 h-8 text-emerald-500/40 mb-4" />
              <p className="text-slate-300 mb-6 leading-relaxed">{t.text}</p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div>
                <p className="font-semibold text-white">{t.name}</p>
                <p className="text-sm text-slate-400">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
