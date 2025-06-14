import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  Sparkles,
  Heart,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Menu,
  X,
  CheckCircle,
  Award,
  Users,
} from "lucide-react";
import logo from "./logo.png";
import foto from "./foto.png";
import service2 from "./service2.png";
import service1 from "./service1.png";
import service3 from "./service3.png";
import sobre from "./esfoliante.png";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      title: "Limpeza de pele profunda",
      description:
        "Esfoliação para remover as células mortas e visa remover cravos, espinhas e impurezas da pele.",

      image: service1,
    },
    {
      title: "Mascara de argila ",
      description:
        "A argila purifica, desintoxica e renova a pele, enquanto seus minerais naturais nutrem profundamente e restauram o equilíbrio que sua pele precisa. ",
      image: service2,
    },
    {
      title: "Máscara Calmante",
      description:
        "Ideal para peles sensíveis ou após procedimentos como extração, a Máscara Calmante acalma, hidrata, suaviza e reduz vermelhidão e sensibilidade, devolvendo o conforto da sua pele em poucos minutos.",

      image: service3,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-pink-100 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Estética Premium" style={{ width: 60 }} />
              <span className="text-xl font-bold text-gray-900 bitter">
                Sol estética
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#inicio"
                className="text-gray-700 hover:text-pink-500 transition-colors font-medium"
              >
                Início
              </a>
              <a
                href="#servicos"
                className="text-gray-700 hover:text-pink-500 transition-colors font-medium"
              >
                Serviços
              </a>
              <a
                href="#sobre"
                className="text-gray-700 hover:text-pink-500 transition-colors font-medium"
              >
                Sobre
              </a>

              <a
                href="#contato"
                className="bg-gradient-to-r from-pink-500 to-rose-400 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium"
              >
                Agendar
              </a>
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-pink-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#inicio"
                className="block px-3 py-2 text-gray-700 hover:text-pink-500 transition-colors"
              >
                Início
              </a>
              <a
                href="#servicos"
                className="block px-3 py-2 text-gray-700 hover:text-pink-500 transition-colors"
              >
                Serviços
              </a>
              <a
                href="#sobre"
                className="block px-3 py-2 text-gray-700 hover:text-pink-500 transition-colors"
              >
                Sobre
              </a>

              <a
                href="#contato"
                className="block px-3 py-2 text-pink-500 font-medium"
              >
                Agendar
              </a>
            </div>
          </div>
        )}
      </nav>

      <section
        id="inicio"
        className="pt-16 bg-gradient-to-br from-pink-50 via-white to-rose-50"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Sua pele
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400">
                    radiante
                  </span>
                  começa aqui
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Tratamentos de limpeza de pele personalizados com técnicas
                  avançadas e produtos premium. Desperte a beleza natural da sua
                  pele.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contato"
                  className="bg-gradient-to-r from-pink-500 to-rose-400 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center"
                >
                  Agendar limpeza
                </a>
                <a
                  href="#servicos"
                  className="border-2 border-pink-200 text-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-pink-50 transition-colors text-center"
                >
                  Ver Serviços
                </a>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-pink-100">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Award className="h-8 w-8 text-pink-500" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">5+</p>
                  <p className="text-gray-600">Anos de experiência</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="h-8 w-8 text-pink-500" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">100+</p>
                  <p className="text-gray-600">Clientes satisfeitas</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <CheckCircle className="h-8 w-8 text-pink-500" />
                  </div>
                  <p className="text-2xl font-bold text-gray-900">100%</p>
                  <p className="text-gray-600">Satisfação</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src={foto}
                  alt="Tratamento facial profissional"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 bg-gradient-to-r from-pink-400 to-rose-300 rounded-full border-2 border-white"
                      ></div>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      Clientes felizes
                    </p>
                    <p className="text-xs text-gray-500">
                      Resultados comprovados
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="py-20 bg-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Serviço realizado
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos tratamentos personalizados para cada tipo de pele,
              utilizando as melhores técnicas e produtos do mercado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-pink-50 to-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <button className="w-full bg-gradient-to-r from-pink-500 to-rose-400 text-white py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                    <a href="#contato">Agendar Agora</a>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="sobre"
        className="py-20 bg-gradient-to-br from-pink-50 to-white"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Sobre Mim
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Sou Solange Trancoso e possuo mais de 5 anos de experiência
                    em tratamentos faciais. Minha paixão é ajudar cada cliente a
                    descobrir a beleza natural da sua pele.
                  </p>
                  <p>
                    Especializada em limpeza de pele profunda, trabalho com
                    técnicas modernas e produtos de alta qualidade para garantir
                    os melhores resultados para você.
                  </p>
                  <p>
                    Cada tratamento é personalizado de acordo com as
                    necessidades específicas da sua pele, sempre priorizando seu
                    conforto e bem-estar.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <Heart className="h-8 w-8 text-pink-500 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Atendimento Personalizado
                  </h4>
                  <p className="text-sm text-gray-600">
                    Cada cliente é único e merece cuidado especial
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <Sparkles className="h-8 w-8 text-pink-500 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Produtos Premium
                  </h4>
                  <p className="text-sm text-gray-600">
                    Utilizamos apenas produtos de alta qualidade
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={sobre}
                  alt="Esteticista profissional"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-8 right-8 bg-white p-4 rounded-2xl shadow-lg">
                <div className="text-center">
                  <p className="text-2xl font-bold text-pink-500">5+</p>
                  <p className="text-xs text-gray-600">Anos de experiência</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contato"
        className="py-20 bg-gradient-to-br from-pink-50 to-white"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Entre em Contato
            </h2>
            <p className="text-xl text-gray-600">
              Agende seu horário e comece sua jornada para uma pele radiante
            </p>
          </div>
          <div
            className="space-y-8"
            style={{ width: "fit-content", margin: "0 auto" }}
          >
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Informações de Contato
              </h3>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-pink-100 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-pink-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Telefone</p>
                    <p className="text-gray-600">(41) 99842-3462</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-pink-100 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-pink-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Endereço</p>
                    <p className="text-gray-600">Tatuquara, Curitiba-PR</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-pink-100 p-3 rounded-full mr-4">
                    <Instagram className="h-6 w-6 text-pink-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Instagram</p>
                    <p className="text-gray-600">@trancoso.solange7</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-pink-100 p-3 rounded-full mr-4">
                    <Facebook className="h-6 w-6 text-pink-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Facebook</p>
                    <p className="text-gray-600">
                      www.facebook.com/share/16XudHHj7F/
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <img
                src={logo}
                alt="Estética Premium"
                style={{ width: 60, borderRadius: "50%" }}
              />
              <span className="text-2xl font-bold bitter"> Sol estética</span>
            </div>
            <p className="text-gray-400 mb-6">
              Transformando vidas através do cuidado com a pele
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.instagram.com/trancoso.solange7/#"
                target="_blank"
                className="text-gray-400 hover:text-pink-500 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="tel:+5541998423462"
                className="text-gray-400 hover:text-pink-500 transition-colors"
              >
                <Phone className="h-6 w-6" />
              </a>
              <a
                href="https://www.facebook.com/share/16XudHHj7F/"
                className="text-gray-400 hover:text-pink-500 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
            <p className="text-gray-500 mt-8 text-sm">
              © 2025 Sol estética. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
