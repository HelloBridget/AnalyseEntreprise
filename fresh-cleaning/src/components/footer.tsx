import { Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">Fresh</span>
                <span className="text-xl font-bold text-emerald-400">Cleaning</span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-md">
              Spécialiste du nettoyage professionnel de canapés, matelas, fauteuils et chaises.
              Service de qualité pour particuliers et professionnels en Île-de-France.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Nettoyage Canapé</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Nettoyage Matelas</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Nettoyage Fauteuils</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Nettoyage Chaises</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Pack Complet</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Informations</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#apropos" className="hover:text-emerald-400 transition-colors">À propos</a></li>
              <li><a href="#temoignages" className="hover:text-emerald-400 transition-colors">Témoignages</a></li>
              <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Mentions légales</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Politique de confidentialité</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; 2025 Fresh Cleaning. Tous droits réservés.
          </p>
          <p className="text-sm text-slate-500">
            Nettoyage professionnel — Île-de-France
          </p>
        </div>
      </div>
    </footer>
  );
}
