'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Droplets, Leaf, Users, MapPin } from 'lucide-react';

const values = [
  {
    icon: Droplets,
    title: 'Propreté irréprochable',
    description: 'Nous utilisons des techniques de nettoyage avancées pour un résultat impeccable à chaque intervention.',
  },
  {
    icon: Leaf,
    title: 'Produits écologiques',
    description: 'Nos produits sont respectueux de l\'environnement, sans danger pour votre famille et vos animaux.',
  },
  {
    icon: Users,
    title: 'Équipe expérimentée',
    description: 'Des professionnels formés et passionnés, à votre service pour un nettoyage de qualité supérieure.',
  },
  {
    icon: MapPin,
    title: 'Île-de-France',
    description: 'Nous intervenons dans toute l\'Île-de-France, chez les particuliers comme chez les professionnels.',
  },
];

export default function AboutSection() {
  return (
    <section id="apropos" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-full mb-4">
              À propos
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Votre partenaire<br />
              <span className="text-emerald-600">propreté de confiance</span>
            </h2>
            <p className="text-lg text-slate-500 mb-6 leading-relaxed">
              Fresh Cleaning est spécialiste du nettoyage en profondeur de mobilier et literie.
              Nous redonnons vie à vos canapés, matelas, fauteuils et chaises avec des méthodes
              professionnelles et des produits respectueux de votre intérieur.
            </p>
            <p className="text-lg text-slate-500 mb-8 leading-relaxed">
              Notre engagement : des résultats visibles, une satisfaction garantie et un service
              adapté à chaque client, qu&apos;il soit particulier ou professionnel.
            </p>

            <div className="flex flex-wrap gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-emerald-600">2000+</p>
                <p className="text-sm text-slate-500 mt-1">Clients satisfaits</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-emerald-600">5000+</p>
                <p className="text-sm text-slate-500 mt-1">Interventions</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-emerald-600">100%</p>
                <p className="text-sm text-slate-500 mt-1">Écologique</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="bg-slate-50 rounded-2xl p-6 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 border border-slate-100 hover:border-emerald-200"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-4 shadow-md shadow-emerald-500/20">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
