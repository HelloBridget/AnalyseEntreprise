'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sofa, BedDouble, Armchair, ChevronRight, Check } from 'lucide-react';

const services = [
  {
    icon: Sofa,
    title: 'Nettoyage Canapé',
    description: 'Nettoyage en profondeur de tous types de canapés : tissu, cuir, daim, microfibre. Élimination des taches, odeurs et allergènes.',
    features: ['Détachage professionnel', 'Élimination des odeurs', 'Traitement anti-acariens', 'Séchage rapide'],
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: BedDouble,
    title: 'Nettoyage Matelas',
    description: 'Hygiène et fraîcheur pour votre literie. Traitement anti-acariens et désinfection complète pour un sommeil sain.',
    features: ['Désinfection UV', 'Anti-acariens', 'Élimination des taches', 'Assainissement complet'],
    image: 'https://images.unsplash.com/photo-1631049035182-249067d7618e?q=80&w=800&auto=format&fit=crop',
    color: 'from-teal-500 to-teal-600',
  },
  {
    icon: Armchair,
    title: 'Fauteuils & Chaises',
    description: 'Redonnez un coup de neuf à vos fauteuils et chaises. Nettoyage adapté à chaque matière pour un résultat impeccable.',
    features: ['Tous types de tissus', 'Cuir et simili', 'Résultat garanti', 'Particuliers & Pros'],
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop',
    color: 'from-emerald-600 to-teal-500',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-full mb-4">
            Nos Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Un nettoyage expert pour <br className="hidden sm:block" />
            <span className="text-emerald-600">chaque besoin</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Des solutions professionnelles adaptées aux particuliers et aux entreprises.
            Résultats visibles, satisfaction garantie.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:gap-12">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100`}
            >
              <div className="lg:w-1/2 relative h-64 lg:h-auto min-h-[300px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-10`} />
              </div>

              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg mb-6`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-500 mb-6 text-lg leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-emerald-600" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors group"
                >
                  Demander un devis
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
