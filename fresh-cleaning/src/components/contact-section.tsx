'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-full mb-4">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Demandez votre <span className="text-emerald-600">devis gratuit</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Contactez-nous pour un devis personnalisé. Réponse rapide garantie sous 2h.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form className="bg-slate-50 rounded-3xl p-8 lg:p-10 border border-slate-100 shadow-xl shadow-slate-200/30">
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Prénom</label>
                  <input
                    type="text"
                    placeholder="Votre prénom"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-400 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Nom</label>
                  <input
                    type="text"
                    placeholder="Votre nom"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-400 transition-all"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="votre@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-400 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Téléphone</label>
                  <input
                    type="tel"
                    placeholder="06 12 34 56 78"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-400 transition-all"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Service souhaité</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-400 transition-all">
                  <option value="">Sélectionnez un service</option>
                  <option value="canape">Nettoyage Canapé</option>
                  <option value="matelas">Nettoyage Matelas</option>
                  <option value="fauteuil">Nettoyage Fauteuil</option>
                  <option value="chaise">Nettoyage Chaises</option>
                  <option value="complet">Pack Complet</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  placeholder="Décrivez votre besoin (type de mobilier, nombre de pièces, taches spécifiques...)"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-400 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-700 hover:to-teal-700 transition-all shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 text-lg"
              >
                <Send className="w-5 h-5" />
                Envoyer ma demande
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl p-8 text-white shadow-xl shadow-emerald-500/20">
              <h3 className="text-xl font-bold mb-6">Nos coordonnées</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Téléphone</p>
                    <p className="text-emerald-100">01 23 45 67 89</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-emerald-100">contact@freshcleaning.fr</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Zone d&apos;intervention</p>
                    <p className="text-emerald-100">Île-de-France — Paris & banlieue</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold">Horaires</p>
                    <p className="text-emerald-100">Lun-Sam : 8h - 20h</p>
                    <p className="text-emerald-100">Dimanche sur RDV</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Intervention rapide</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Nous nous engageons à vous répondre sous 2h et à intervenir dans les 24 à 48h
                suivant votre demande. Devis gratuit et sans engagement.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
