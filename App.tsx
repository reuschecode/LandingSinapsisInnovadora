import React, {
  useState,
  useEffect,
  useTransition,
  Suspense,
  useMemo,
} from "react";
import {
  X,
  ArrowRight,
  ShieldCheck,
  Zap,
  Layers,
  Check,
  Calendar,
  Loader2,
  BrainCircuit,
  Database,
  Network,
  Rocket,
  Building2,
  GraduationCap,
  Globe2,
  ChevronUp,
  Lightbulb,
  TrendingUp,
  Terminal,
  Cpu,
  Monitor,
  Search,
  Command,
  Activity,
  Briefcase,
  Target,
  BarChart,
  Server,
  Users,
  Trophy,
  MousePointerClick,
  Share2,
  Linkedin,
  Facebook,
  Twitter,
  MessageCircle,
  Link as LinkIcon,
  Copy,
  Info,
} from "lucide-react";
import { Service, ClientCategory, BlogPost, LeadershipProfile } from "./types";

// --- Función de utilidad para Scroll Suave ---
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

// --- Contenidos Enriquecidos para Modales ---

const DETALLES_METRICAS = {
  METODOLOGIA: {
    titulo: "Metodología de Impacto",
    categoria: "AUDITORÍA",
    contenido: (
      <div className="space-y-6">
        <p className="text-lg font-light text-slate-200">
          Nuestros indicadores no son estimaciones aisladas; son el resultado de
          la aplicación sistemática de nuestro framework de eficiencia.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 glass rounded-2xl border-white/10">
            <h5 className="text-blue-500 font-black text-[10px] uppercase mb-2">
              Cálculo de ROI
            </h5>
            <p className="text-xs text-slate-400">
              Utilizamos el modelo TCO (Total Cost of Ownership) comparado con
              el incremento directo en la velocidad de entrega y reducción de
              errores operativos.
            </p>
          </div>
          <div className="p-4 glass rounded-2xl border-white/10">
            <h5 className="text-blue-500 font-black text-[10px] uppercase mb-2">
              Time to Value
            </h5>
            <p className="text-xs text-slate-400">
              El 80% de nuestros proyectos muestran resultados tangibles en los
              estados financieros en un periodo inferior a 90 días naturales.
            </p>
          </div>
        </div>
        <div className="bg-blue-600/5 p-6 rounded-3xl border border-blue-500/20">
          <h6 className="font-bold text-white mb-2 text-sm">
            Garantía de Optimización
          </h6>
          <p className="text-xs text-slate-400 leading-relaxed">
            Si tras el diagnóstico inicial no identificamos una oportunidad de
            mejora superior al 15% en sus costos operativos, asesoramos
            honestamente sobre la suficiencia de su estructura actual.
          </p>
        </div>
      </div>
    ),
  },
};

const DETALLES_TESIS = {
  ADAPTATIVOS: {
    titulo: "Sistemas Adaptativos",
    categoria: "FILOSOFÍA_TÉCNICA",
    contenido: (
      <div className="space-y-6">
        <p className="text-lg font-light text-slate-200">
          En un mercado volátil, la rigidez es el mayor riesgo financiero. Un
          sistema adaptativo es una organización diseñada para auto-corregirse
          mediante bucles de retroalimentación de datos.
        </p>
        <div className="space-y-4">
          <div className="flex gap-4 p-4 bg-slate-900/40 rounded-2xl border border-white/5">
            <Zap className="text-blue-500 shrink-0" size={20} />
            <div>
              <p className="font-bold text-white text-sm">
                Resiliencia Operativa
              </p>
              <p className="text-xs text-slate-400">
                Capacidad de absorber shocks externos (cambios de mercado,
                crisis de suministro) sin degradar la calidad del servicio.
              </p>
            </div>
          </div>
          <div className="flex gap-4 p-4 bg-slate-900/40 rounded-2xl border border-white/5">
            <Network className="text-blue-500 shrink-0" size={20} />
            <div>
              <p className="font-bold text-white text-sm">
                IA como Tejido Conectivo
              </p>
              <p className="text-xs text-slate-400">
                La inteligencia artificial no se "instala", se integra como una
                capa sensorial que informa cada decisión del Directorio.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  COGNITIVOS: {
    titulo: "Activos Cognitivos",
    categoria: "CAPITAL_INTELECTUAL",
    contenido: (
      <div className="space-y-6">
        <p className="text-lg font-light text-slate-200">
          Transformamos la "memoria institucional" dispersa en un activo líquido
          y auditable. Los datos son el nuevo balance general.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 glass rounded-2xl border-blue-500/20">
            <h5 className="text-white font-bold mb-3 text-sm">
              Valoración de Datos
            </h5>
            <p className="text-xs text-slate-400 italic">
              "¿Cuánto vale para su empresa saber hoy lo que sus clientes
              necesitarán mañana?"
            </p>
          </div>
          <div className="p-5 glass rounded-2xl border-blue-500/20">
            <h5 className="text-white font-bold mb-3 text-sm">
              Reducción de Silos
            </h5>
            <p className="text-xs text-slate-400">
              Eliminamos la fricción de información entre departamentos, creando
              una única fuente de verdad técnica.
            </p>
          </div>
        </div>
      </div>
    ),
  },
};

const DETALLES_SERVICIOS = {
  S1: {
    categoria: "ESTRATEGIA_IA",
    contenido: (
      <div className="space-y-4">
        <p className="text-blue-400 font-bold">
          Enfoque: Maximización del Margen Operativo
        </p>
        <p>
          No implementamos tecnología por moda. Diseñamos estrategias de IA que
          impactan directamente en el P&L (Estado de Resultados), priorizando
          casos de uso con alto retorno y baja fricción.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5">
            <h5 className="text-white font-bold mb-1 text-sm">
              Análisis Forense de Procesos
            </h5>
            <p className="text-xs text-slate-400">
              Auditoría profunda para encontrar cuellos de botella que la IA
              puede resolver hoy mismo.
            </p>
          </div>
          <div className="bg-slate-900/40 p-4 rounded-xl border border-white/5">
            <h5 className="text-white font-bold mb-1 text-sm">
              Gobernanza de Algoritmos
            </h5>
            <p className="text-xs text-slate-400">
              Aseguramos que cada modelo de IA implementado cumpla con criterios
              éticos y de transparencia corporativa.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  S2: {
    categoria: "VENTURE_BUILDING",
    contenido: (
      <div className="space-y-4">
        <p className="text-blue-400 font-bold">
          Enfoque: Diversificación de Ingresos
        </p>
        <p>
          Acompañamos la creación de nuevas unidades de negocio digitales,
          minimizando el desperdicio de capital mediante experimentación
          rigurosa y MVPs de alta fidelidad.
        </p>
        <ul className="space-y-3 pt-2">
          <li className="flex items-start gap-3 text-slate-300 text-sm">
            <Check size={14} className="text-blue-500 mt-1" /> Validación de
            product-market fit antes de escalar infraestructura.
          </li>
          <li className="flex items-start gap-3 text-slate-300 text-sm">
            <Check size={14} className="text-blue-500 mt-1" /> Diseño de
            arquitecturas comerciales centradas en el CLV (Customer Lifetime
            Value).
          </li>
        </ul>
      </div>
    ),
  },
  S3: {
    categoria: "CLOUD_INTELLIGENCE",
    contenido: (
      <div className="space-y-4">
        <p className="text-blue-400 font-bold">Enfoque: Soberanía de Datos</p>
        <p>
          La infraestructura en la nube debe ser un habilitador, no un costo
          fijo incontrolable. Optimizamos su arquitectura para garantizar
          seguridad, cumplimiento y costos predecibles.
        </p>
        <div className="bg-blue-600/5 p-4 rounded-xl border border-blue-500/10">
          <p className="text-xs text-slate-400 font-mono">
            ESTADO: Optimización de latencia + Reducción de costos de
            transferencia.
          </p>
        </div>
      </div>
    ),
  },
  S4: {
    categoria: "TECH_LITERACY",
    contenido: (
      <div className="space-y-4">
        <p className="text-blue-400 font-bold">
          Enfoque: Empoderamiento del Directorio
        </p>
        <p>
          Eliminamos la "caja negra" de la tecnología para la alta gerencia.
          Proveemos el criterio necesario para auditar proyectos tecnológicos y
          tomar decisiones informadas sin necesidad de ser perfiles técnicos.
        </p>
      </div>
    ),
  },
};

// --- MÉTRICAS DE IMPACTO ---
const METRICAS_IMPACTO = [
  {
    value: "+32%",
    label: "Impacto Operativo",
    detail: "Incremento promedio en rentabilidad",
  },
  {
    value: "90D",
    label: "Time to Value",
    detail: "Despliegue de resultados tangibles",
  },
  {
    value: "+15%",
    label: "Eficiencia Garantizada",
    detail: "Umbral mínimo de optimización",
  },
];

const CLIENT_CATEGORIES: ClientCategory[] = [
  {
    id: "cat-1",
    title: "Empresas Corporativas",
    icon: <Building2 className="w-6 h-6" />,
    description:
      "Modernización de modelos tradicionales con enfoque en rentabilidad neta.",
    strategy: (
      <div className="space-y-4">
        <h4 className="text-blue-500 font-bold">Caso de Uso: Eficiencia P&L</h4>
        <p className="text-sm text-slate-300">
          Implementación de sistemas de análisis predictivo para la optimización
          de flujos de caja y reducción de inventarios ociosos.
        </p>
        <div className="p-4 glass rounded-xl border-white/5">
          <p className="text-[10px] text-slate-500 uppercase font-black mb-1">
            Métrica Clave
          </p>
          <p className="text-xl font-black text-white">Reducción 12-18% Opex</p>
        </div>
      </div>
    ),
  },
  {
    id: "cat-2",
    title: "Consultoras y BPO",
    icon: <Network className="w-6 h-6" />,
    description:
      "Aumento de márgenes mediante automatización de entregables complejos.",
    strategy: (
      <div className="space-y-4">
        <h4 className="text-blue-500 font-bold">
          Caso de Uso: Aceleración de Consultoría
        </h4>
        <p className="text-sm text-slate-300">
          Capacitación y despliegue de herramientas de IA que permiten a los
          consultores procesar reportes complejos en un 60% menos de tiempo.
        </p>
      </div>
    ),
  },
  {
    id: "cat-3",
    title: "Educación y Salud",
    icon: <GraduationCap className="w-6 h-6" />,
    description:
      "Personalización masiva de servicios mediante sistemas cognitivos.",
    strategy: (
      <div className="space-y-4">
        <h4 className="text-blue-500 font-bold">
          Caso de Uso: Rutas de Valor Personalizadas
        </h4>
        <p className="text-sm text-slate-300">
          Algoritmos de segmentación avanzada para adaptar el servicio a la
          necesidad individual de cada paciente o estudiante.
        </p>
      </div>
    ),
  },
  {
    id: "cat-4",
    title: "Startups Tech",
    icon: <Rocket className="w-6 h-6" />,
    description:
      "Cimentación de arquitecturas elásticas para escalamiento global.",
    strategy: (
      <div className="space-y-4">
        <h4 className="text-blue-500 font-bold">
          Caso de Uso: Escalamiento sin Fricción
        </h4>
        <p className="text-sm text-slate-300">
          Diseño de infraestructura modular que permite pasar de 1,000 a 100,000
          usuarios sin rediseñar el núcleo del sistema.
        </p>
      </div>
    ),
  },
  {
    id: "cat-5",
    title: "Gobierno y ONG",
    icon: <Globe2 className="w-6 h-6" />,
    description:
      "Transparencia operativa y eficiencia en servicios ciudadanos.",
    strategy: (
      <div className="space-y-4">
        <h4 className="text-blue-500 font-bold">
          Caso de Uso: Digitalización Ciudadana
        </h4>
        <p className="text-sm text-slate-300">
          Interficies conversacionales inteligentes para la resolución inmediata
          de trámites administrativos complejos.
        </p>
      </div>
    ),
  },
];

const LEADERSHIP: LeadershipProfile = {
  name: "Dirección General",
  role: "Acompañamiento Estratégico",
  bio: "Creemos en la tecnología como un medio, no un fin. Mi labor es facilitar diálogos honestos donde la estrategia de negocio dicte el camino tecnológico. Nos motiva ser los aliados silenciosos de su éxito corporativo.",
  focus: ["Pragmatismo de Negocio", "Ética de Datos", "Liderazgo Humano"],
  image: "https://i.imgur.com/SHV092H.jpeg",
};

const DETALLES_LIDERAZGO = {
  FILOSOFIA: {
    titulo: "Nuestra Visión del Facilitador",
    categoria: "FILOSOFÍA_DIRECCIÓN",
    contenido: (
      <div className="space-y-6">
        <p className="text-lg font-light text-slate-200 leading-relaxed italic">
          "El consultor moderno no debe ser el protagonista, sino el arquitecto
          invisible de la autonomía del cliente."
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            "Humildad Técnica",
            "Pragmatismo Radical",
            "Compromiso de Resultados",
          ].map((v) => (
            <div
              key={v}
              className="p-4 glass rounded-xl border-white/5 text-center"
            >
              <span className="text-[8px] font-black uppercase text-blue-500 tracking-widest">
                {v}
              </span>
            </div>
          ))}
        </div>
        <p className="text-sm text-slate-400">
          Nuestro compromiso no termina en el entregable técnico. Acompañamos a
          la organización en la adopción cultural necesaria para que la
          innovación sea sostenible y no un evento aislado.
        </p>
      </div>
    ),
  },
};

const BLOG_POSTS: BlogPost[] = [
  {
    id: "ia-1",
    date: "JUN 2024",
    category: "ESTRATEGIA",
    title: "IA Generativa: Del Hype al ROI",
    excerpt:
      "Análisis profundo sobre cómo las corporaciones líderes están integrando LLMs para la generación de valor real, evitando las trampas comunes de la adopción apresurada.",
    readTime: "6 min",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "ia-2",
    date: "MAY 2024",
    category: "DATOS",
    title: "La Trampa del Big Data",
    excerpt:
      "Por qué tener petabytes de información no garantiza mejores decisiones. Metodologías para la curaduría de activos cognitivos de alta fidelidad.",
    readTime: "7 min",
    image:
      "https://institutobaikal.com/wp-content/uploads/2015/02/Trampa-Nominalista.png",
  },
  {
    id: "tr-1",
    date: "MAY 2024",
    category: "FINANZAS",
    title: "Auditoría de Inversión Tecnológica",
    excerpt:
      "Guía práctica para CFOs sobre cómo evaluar la eficiencia del gasto en IT y transformarlo en inversión de capital intelectual.",
    readTime: "8 min",
    image: "https://www.pwc.pe/es/imagenes/tecnologia-auditoria-25.jpg",
  },
];

// --- Componentes UI ---

const WindowControls = ({ onClose }: { onClose?: () => void }) => (
  <div className="flex space-x-2 items-center">
    <div
      className="w-2.5 h-2.5 rounded-full bg-red-500/40 hover:bg-red-500 transition-all cursor-pointer"
      onClick={onClose}
    ></div>
    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></div>
    <div className="w-2.5 h-2.5 rounded-full bg-green-500/40"></div>
  </div>
);

// --- Share Modal Component ---

const ShareModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [copied, setCopied] = useState(false);
  const shareUrl = window.location.href;
  const shareText =
    "Descubre Sinapsis Innovador - Consultoría de Estrategia e Innovación B2B enfocada en eficiencia real.";

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      color: "hover:text-[#0077B5]",
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl
      )}`,
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle size={20} />,
      color: "hover:text-[#25D366]",
      url: `https://wa.me/?text=${encodeURIComponent(
        shareText + " " + shareUrl
      )}`,
    },
    {
      name: "X",
      icon: <Twitter size={20} />,
      color: "hover:text-white",
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        shareUrl
      )}&text=${encodeURIComponent(shareText)}`,
    },
    {
      name: "Facebook",
      icon: <Facebook size={20} />,
      color: "hover:text-[#1877F2]",
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
    },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
        onClick={onClose}
      />
      <div className="relative glass w-full max-w-sm rounded-[1.5rem] overflow-hidden border border-white/10 shadow-3xl p-8 animate-in zoom-in-95 duration-300">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <Share2 size={18} className="text-blue-500" />
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white">
              Difundir_Sistema
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-8">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center gap-2 p-3 rounded-xl glass border-white/5 text-slate-400 transition-all ${social.color} hover:bg-white/5`}
            >
              {social.icon}
              <span className="text-[8px] font-black uppercase tracking-widest">
                {social.name}
              </span>
            </a>
          ))}
        </div>

        <div className="space-y-2">
          <label className="text-[8px] font-black text-slate-500 uppercase tracking-widest">
            Enlace Directo
          </label>
          <div className="flex items-center gap-2 p-3 glass rounded-xl border-white/10 bg-slate-950/40">
            <input
              readOnly
              value={shareUrl}
              className="flex-1 bg-transparent border-none outline-none text-[10px] text-slate-400 font-mono truncate"
            />
            <button
              onClick={handleCopy}
              className="text-blue-500 hover:text-blue-400 transition-colors shrink-0"
            >
              {copied ? (
                <Check size={16} className="text-green-500" />
              ) : (
                <Copy size={16} />
              )}
            </button>
          </div>
        </div>

        {copied && (
          <div className="mt-4 text-center animate-in fade-in slide-in-from-bottom-2 duration-300">
            <span className="text-[9px] font-black text-green-500 uppercase tracking-widest">
              Enlace copiado al portapapeles
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

// --- Navbar ---

const Navbar = ({ onShare }: { onShare: () => void }) => {
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState(
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    const timer = setInterval(
      () =>
        setTime(
          new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })
        ),
      1000
    );
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timer);
    };
  }, []);

  const menuItems = [
    { label: "Tesis", id: "tesis" },
    { label: "Servicios", id: "servicios" },
    { label: "Impacto", id: "impacto" },
    { label: "Liderazgo", id: "liderazgo" },
    { label: "Biblioteca", id: "biblioteca" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-500 px-6 py-4">
      <div
        className={`max-w-7xl mx-auto glass rounded-full px-8 py-3 flex justify-between items-center transition-all ${
          scrolled
            ? "shadow-2xl border-white/10 bg-slate-950/90"
            : "border-transparent"
        }`}
      >
        <div className="flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("inicio")}
            className="text-lg font-black tracking-tighter text-white hover:text-blue-400 transition-colors flex items-center gap-2"
          >
            <Command size={18} className="text-blue-500" />
            SINAPSIS <span className="text-blue-500">OS</span>
          </button>
          <div className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[8px] font-bold text-slate-500 hover:text-white transition-colors uppercase tracking-[0.3em]"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={onShare}
            className="p-2.5 rounded-full glass border-white/10 text-slate-400 hover:text-white transition-all hover:bg-white/5"
            aria-label="Compartir"
          >
            <Share2 size={16} />
          </button>
          <div className="hidden sm:flex items-center space-x-3 px-4 py-1.5 bg-slate-900/60 rounded-full border border-white/5">
            <Activity className="text-green-500 w-2.5 h-2.5 animate-pulse" />
            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">
              {time}
            </span>
          </div>
          <button
            onClick={() => scrollToSection("contacto")}
            className="bg-white text-slate-950 px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all"
          >
            Diagnóstico
          </button>
        </div>
      </div>
    </nav>
  );
};

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
  category?: string;
  image?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  content,
  category,
  image,
}) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-slate-950/95 backdrop-blur-xl"
        onClick={onClose}
      />
      <div className="relative glass w-full max-w-4xl max-h-[80vh] overflow-hidden rounded-[1.5rem] shadow-2xl flex flex-col md:flex-row border border-white/10">
        {image && (
          <div className="md:w-1/3 h-32 md:h-auto overflow-hidden bg-slate-900">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover grayscale opacity-40"
            />
          </div>
        )}
        <div className="flex-1 flex flex-col min-h-0 bg-slate-950/40">
          <div className="px-8 py-4 border-b border-white/5 flex justify-between items-center bg-slate-900/40">
            <div className="flex items-center space-x-4">
              <WindowControls onClose={onClose} />
              <div className="w-px h-4 bg-white/5 mx-2"></div>
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                {category || "DIÁLOGO"}
              </span>
            </div>
            <button
              onClick={onClose}
              className="text-slate-500 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-8 md:p-12 no-scrollbar">
            <h2 className="text-3xl font-black text-white mb-6 tracking-tighter uppercase">
              {title}
            </h2>
            <div className="text-slate-300 text-md leading-relaxed space-y-4 font-light">
              <Suspense
                fallback={
                  <div className="p-10 text-center">
                    <Loader2 className="animate-spin inline-block mr-2" />{" "}
                    Cargando...
                  </div>
                }
              >
                {content}
              </Suspense>
            </div>
            <div className="mt-8 pt-6 border-t border-white/5">
              <button
                onClick={() => {
                  onClose();
                  scrollToSection("contacto");
                }}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-black uppercase text-[9px] tracking-widest hover:bg-blue-500 transition-all shadow-lg"
              >
                Solicitar Auditoría
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [modalData, setModalData] = useState<{
    isOpen: boolean;
    title: string;
    content: React.ReactNode;
    category: string;
    image?: string;
  }>({
    isOpen: false,
    title: "",
    content: null,
    category: "",
    image: undefined,
  });
  const [isShareOpen, setIsShareOpen] = useState(false);

  const openModal = (
    title: string,
    content: React.ReactNode,
    category: string,
    image?: string
  ) => {
    setModalData({ isOpen: true, title, content, category, image });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onShare={() => setIsShareOpen(true)} />
      <main className="flex-grow">
        {/* HERO */}
        <header
          id="inicio"
          className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(circle_at_50%_35%,_rgba(59,130,246,0.1)_0%,_rgba(2,6,23,0)_60%)]"></div>
          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="inline-flex items-center space-x-3 bg-slate-900/70 border border-white/10 px-4 py-2 rounded-full mb-8 shadow-xl">
              <ShieldCheck size={14} className="text-blue-500" />
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.4em]">
                CONSULTORÍA_ESTRATÉGICA_v4.5
              </span>
            </div>
            <h1 className="text-5xl md:text-[7rem] font-black text-white leading-[0.9] mb-8 tracking-tighter uppercase">
              Diseñamos la <br />
              <span className="text-blue-600">Eficiencia Real.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-3xl font-light leading-snug">
              Consultoría B2B especializada en{" "}
              <span className="text-white font-semibold">
                arquitecturas de decisión
              </span>
              . Optimizamos sus márgenes operativos integrando tecnología donde
              realmente genera valor.
            </p>
            <div className="flex flex-wrap gap-4 mb-16">
              <button
                onClick={() => scrollToSection("contacto")}
                className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/30 group"
              >
                Solicitar Diagnóstico Sin Costo{" "}
                <ArrowRight
                  size={14}
                  className="inline ml-2 group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button
                onClick={() => scrollToSection("impacto")}
                className="glass text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all border-white/10"
              >
                Ver Casos de Impacto
              </button>
            </div>

            <div className="pt-8 border-t border-white/5 flex flex-wrap items-center gap-10 opacity-40 grayscale">
              <span className="text-[8px] font-black uppercase tracking-widest">
                Sectores de Impacto:
              </span>
              <div className="flex items-center gap-2">
                <Building2 size={16} />{" "}
                <span className="text-[10px] uppercase font-bold">
                  Corporativo
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Database size={16} />{" "}
                <span className="text-[10px] uppercase font-bold">Fintech</span>
              </div>
              <div className="flex items-center gap-2">
                <Network size={16} />{" "}
                <span className="text-[10px] uppercase font-bold">
                  Servicios
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Globe2 size={16} />{" "}
                <span className="text-[10px] uppercase font-bold">Global</span>
              </div>
            </div>
          </div>
        </header>

        {/* MÉTRICAS DE IMPACTO - Ahora con Modal */}
        <section className="py-16 bg-slate-900/20 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div
              onClick={() =>
                openModal(
                  DETALLES_METRICAS.METODOLOGIA.titulo,
                  DETALLES_METRICAS.METODOLOGIA.contenido,
                  DETALLES_METRICAS.METODOLOGIA.categoria
                )
              }
              className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center cursor-pointer group"
            >
              {METRICAS_IMPACTO.map((m, i) => (
                <div
                  key={i}
                  className="space-y-2 group-hover:opacity-80 transition-opacity"
                >
                  <p className="text-4xl md:text-6xl font-black text-blue-500 tracking-tighter">
                    {m.value}
                  </p>
                  <p className="text-sm font-bold text-white uppercase tracking-widest">
                    {m.label}
                  </p>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest">
                    {m.detail}
                  </p>
                </div>
              ))}
              <div className="md:col-span-3 flex justify-center mt-4">
                <span className="text-[8px] font-black text-blue-500 uppercase tracking-[0.5em] flex items-center gap-2">
                  <Info size={12} /> Ver Metodología de Auditoría
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* VALOR / TESIS */}
        <section id="tesis" className="py-20 bg-slate-950/40">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-[9px] font-black text-blue-500 uppercase tracking-[0.5em] mb-6">
                  NUESTRA_METODOLOGÍA
                </h2>
                <p className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-none uppercase">
                  Estrategia <br />
                  basada en <span className="text-blue-600">Evidencia.</span>
                </p>
                <div className="space-y-6">
                  <div
                    className="flex gap-6 group cursor-pointer"
                    onClick={() =>
                      openModal(
                        DETALLES_TESIS.ADAPTATIVOS.titulo,
                        DETALLES_TESIS.ADAPTATIVOS.contenido,
                        DETALLES_TESIS.ADAPTATIVOS.categoria
                      )
                    }
                  >
                    <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                      <BrainCircuit size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-white mb-1 uppercase tracking-tight">
                        Sistemas Adaptativos
                      </h4>
                      <p className="text-slate-500 text-sm leading-relaxed font-light">
                        Diseñamos organizaciones que aprenden y evolucionan con
                        cada dato procesado.
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex gap-6 group cursor-pointer"
                    onClick={() =>
                      openModal(
                        DETALLES_TESIS.COGNITIVOS.titulo,
                        DETALLES_TESIS.COGNITIVOS.contenido,
                        DETALLES_TESIS.COGNITIVOS.categoria
                      )
                    }
                  >
                    <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                      <Database size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-white mb-1 uppercase tracking-tight">
                        Activos Cognitivos
                      </h4>
                      <p className="text-slate-500 text-sm leading-relaxed font-light">
                        Transformamos la información dispersa en capital
                        intelectual accionable.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="glass p-10 rounded-[2rem] border-white/10 bg-slate-900/10 shadow-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Trophy size={120} />
                </div>
                <div className="flex items-center space-x-4 mb-6 text-blue-400">
                  <Terminal size={30} />
                  <span className="text-[9px] font-black uppercase tracking-widest">
                    ROI_ANALYSIS.sh
                  </span>
                </div>
                <p className="text-xl text-slate-300 font-extralight mb-8 italic leading-snug">
                  "Ayudamos a las empresas a dejar de gastar en tecnología para
                  empezar a invertir en ventajas competitivas sostenibles."
                </p>
                <div className="flex items-center gap-6">
                  <div className="px-5 py-3 glass rounded-xl text-center border-blue-500/20">
                    <p className="text-xs text-slate-500 uppercase font-black mb-1">
                      Impacto Promedio
                    </p>
                    <p className="text-2xl font-black text-white">+32%</p>
                  </div>
                  <div className="px-5 py-3 glass rounded-xl text-center border-blue-500/20">
                    <p className="text-xs text-slate-500 uppercase font-black mb-1">
                      Time to Value
                    </p>
                    <p className="text-2xl font-black text-white">~90 días</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICIOS */}
        <section
          id="servicios"
          className="py-20 bg-slate-950 border-t border-white/5"
        >
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-[9px] font-black text-blue-500 uppercase tracking-[0.5em] mb-12">
              SERVICIOS_ALTA_DIRECCIÓN
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  id: "S1",
                  title: "Estrategia IA",
                  desc: "Rediseño de flujos operativos para maximizar el margen operativo.",
                  icon: <Layers size={28} />,
                  detail: DETALLES_SERVICIOS.S1,
                },
                {
                  id: "S2",
                  title: "Venture Building",
                  desc: "Creación de nuevas unidades de negocio con bajo riesgo y alta velocidad.",
                  icon: <Lightbulb size={28} />,
                  detail: DETALLES_SERVICIOS.S2,
                },
                {
                  id: "S3",
                  title: "Cloud Intelligence",
                  desc: "Infraestructuras de datos optimizadas para soberanía y seguridad.",
                  icon: <Zap size={28} />,
                  detail: DETALLES_SERVICIOS.S3,
                },
                {
                  id: "S4",
                  title: "Tech Literacy",
                  desc: "Formación estratégica para directivos sobre el impacto real de la tecnología.",
                  icon: <TrendingUp size={28} />,
                  detail: DETALLES_SERVICIOS.S4,
                },
              ].map((s) => (
                <div
                  key={s.id}
                  onClick={() =>
                    openModal(s.title, s.detail.contenido, s.detail.categoria)
                  }
                  className="glass p-8 rounded-2xl hover:bg-blue-600/5 hover:border-blue-500/20 transition-all cursor-pointer group bg-slate-900/10"
                >
                  <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                    {s.icon}
                  </div>
                  <h3 className="text-xl font-black text-white mb-3 uppercase tracking-tight">
                    {s.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-8 font-light">
                    {s.desc}
                  </p>
                  <div className="flex items-center text-blue-500 text-[9px] font-black uppercase tracking-widest">
                    Explorar Solución{" "}
                    <ArrowRight
                      size={12}
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IMPACTO / SECTORES */}
        <section
          id="impacto"
          className="py-20 bg-slate-950 border-t border-white/5"
        >
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-[9px] font-black text-blue-500 uppercase tracking-[0.5em] mb-12">
              SECTORES_DE_INTERVENCIÓN
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {CLIENT_CATEGORIES.map((cat) => (
                <div
                  key={cat.id}
                  onClick={() => openModal(cat.title, cat.strategy, "SOLUCIÓN")}
                  className="glass p-6 rounded-xl hover:bg-slate-900/60 transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <div className="text-blue-600 mb-4 group-hover:rotate-12 transition-transform origin-left">
                      {cat.icon}
                    </div>
                    <h3 className="text-sm font-black text-white mb-2 uppercase">
                      {cat.title}
                    </h3>
                    <p className="text-slate-500 text-[10px] leading-tight mb-4">
                      {cat.description}
                    </p>
                  </div>
                  <div className="flex items-center text-blue-500 font-black text-[8px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                    Ver Estrategia <ArrowRight size={10} className="ml-2" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LIDERAZGO - Ahora con Modal Explicativo */}
        <section
          id="liderazgo"
          className="py-20 bg-slate-950/60 border-t border-white/5"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div
              onClick={() =>
                openModal(
                  DETALLES_LIDERAZGO.FILOSOFIA.titulo,
                  DETALLES_LIDERAZGO.FILOSOFIA.contenido,
                  DETALLES_LIDERAZGO.FILOSOFIA.categoria,
                  LEADERSHIP.image
                )
              }
              className="glass p-10 md:p-16 rounded-[2rem] border-white/10 flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden shadow-2xl cursor-pointer group"
            >
              <div className="lg:w-1/4 aspect-square rounded-2xl overflow-hidden bg-slate-900 border border-white/5 grayscale group-hover:grayscale-0 transition-all duration-700">
                <img
                  src={LEADERSHIP.image}
                  alt={LEADERSHIP.name}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="lg:w-3/4 space-y-6">
                <div>
                  <h2 className="text-[9px] font-black text-blue-500 uppercase tracking-[0.5em] mb-4">
                    DIRECCIÓN_Y_ACOMPAÑAMIENTO
                  </h2>
                  <p className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-2 uppercase">
                    {LEADERSHIP.name}
                  </p>
                  <p className="text-blue-500 font-bold uppercase tracking-widest text-[10px]">
                    {LEADERSHIP.role}
                  </p>
                </div>
                <p className="text-xl text-slate-400 font-light leading-relaxed italic">
                  "{LEADERSHIP.bio}"
                </p>
                <div className="flex flex-wrap gap-3 pt-6 border-t border-white/5">
                  {LEADERSHIP.focus.map((f, i) => (
                    <div
                      key={i}
                      className="flex items-center space-x-2 px-4 py-2 bg-white/5 rounded-full border border-white/5"
                    >
                      <Check size={10} className="text-blue-500" />
                      <span className="text-white font-bold tracking-tight text-[9px] uppercase">
                        {f}
                      </span>
                    </div>
                  ))}
                  <div className="flex items-center gap-2 text-blue-400 font-black text-[9px] uppercase tracking-widest ml-auto group-hover:translate-x-2 transition-transform">
                    Nuestra Filosofía <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BIBLIOTECA */}
        <Blog id="biblioteca" onOpenModal={openModal} />

        {/* CONTACTO */}
        <section
          id="contacto"
          className="py-20 md:py-28 bg-slate-950 relative border-t border-white/5"
        >
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="mb-12">
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter uppercase">
                Optimizar.
                <br />
                <span className="text-blue-600">Escalar.</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5 space-y-8">
                <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed">
                  Solicite un diagnóstico inicial de su infraestructura de
                  decisión. Identificamos brechas de eficiencia en menos de 48
                  horas.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-slate-500">
                    <MousePointerClick size={18} className="text-blue-500" />
                    <span className="text-[9px] font-black uppercase tracking-widest">
                      Respuesta en día laborable
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-slate-500">
                    <Briefcase size={18} className="text-blue-500" />
                    <span className="text-[9px] font-black uppercase tracking-widest">
                      Enfoque 100% Corporativo B2B
                    </span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="glass p-8 md:p-10 rounded-[2.5rem] border-white/10 bg-slate-900/20 w-full relative">
                  <div className="absolute top-8 right-10">
                    <WindowControls />
                  </div>
                  <form
                    className="space-y-6 pt-6"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest">
                          Nombre Completo
                        </label>
                        <input
                          type="text"
                          className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-blue-500 transition-colors text-white text-lg font-light"
                          placeholder="Juan Pérez"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest">
                          Empresa
                        </label>
                        <input
                          type="text"
                          className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-blue-500 transition-colors text-white text-lg font-light"
                          placeholder="Corporación S.A."
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest">
                        Email Corporativo
                      </label>
                      <input
                        type="email"
                        className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-blue-500 transition-colors text-white text-lg font-light"
                        placeholder="j.perez@empresa.com"
                      />
                    </div>
                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-6 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-blue-500 transition-all shadow-xl group"
                      >
                        Enviar Solicitud de Diagnóstico{" "}
                        <ArrowRight
                          size={14}
                          className="inline ml-3 group-hover:translate-x-1 transition-transform"
                        />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-950 py-12 border-t border-white/5 text-[9px] font-black text-slate-600 uppercase tracking-widest">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-white text-2xl tracking-tighter flex items-center gap-3 font-black">
            <Command size={22} className="text-blue-500" />
            <button onClick={() => scrollToSection("inicio")}>
              SINAPSIS <span className="text-blue-500">OS</span>
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {["Tesis", "Servicios", "Impacto", "Liderazgo", "Biblioteca"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="hover:text-white transition-colors"
                >
                  {item}
                </button>
              )
            )}
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsShareOpen(true)}
              className="p-2 glass rounded-full hover:text-blue-500 transition-colors"
            >
              <Share2 size={14} />
            </button>
            <p>© 2024 LIMA_PERÚ. v4.5.2</p>
          </div>
        </div>
      </footer>

      <Modal
        {...modalData}
        onClose={() => setModalData((p) => ({ ...p, isOpen: false }))}
      />
      <ShareModal isOpen={isShareOpen} onClose={() => setIsShareOpen(false)} />

      <button
        onClick={() => scrollToSection("inicio")}
        className="fixed bottom-8 right-8 glass p-4 rounded-full text-white shadow-2xl hover:bg-blue-600 transition-all z-40 group border-white/10"
      >
        <ChevronUp
          size={22}
          className="group-hover:-translate-y-1 transition-transform"
        />
      </button>
    </div>
  );
};

// --- Blog ---

const Blog = ({ id, onOpenModal }: { id: string; onOpenModal: any }) => {
  const [isPending, startTransition] = useTransition();
  const [category, setCategory] = useState("TODOS");
  const categories = ["TODOS", "ESTRATEGIA", "DATOS", "FINANZAS"];

  const handleFilter = (cat: string) => {
    startTransition(() => {
      setCategory(cat);
    });
  };

  const currentPosts = useMemo(() => {
    if (category === "TODOS") return BLOG_POSTS;
    return BLOG_POSTS.filter((p) => p.category === category);
  }, [category]);

  return (
    <section id={id} className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-[9px] font-black text-blue-500 uppercase tracking-[0.5em] mb-6">
              INTELIGENCIA_DE_NEGOCIO
            </h2>
            <p className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none uppercase">
              Biblioteca.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilter(cat)}
                className={`px-6 py-2.5 text-[8px] font-black uppercase tracking-widest rounded-full border transition-all ${
                  category === cat
                    ? "bg-blue-600 border-blue-600 text-white shadow-lg"
                    : "glass text-slate-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div
          className={`transition-all duration-300 ${
            isPending ? "opacity-30 blur-sm" : "opacity-100"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentPosts.map((post) => (
              <article
                key={post.id}
                onClick={() =>
                  onOpenModal(
                    post.title,
                    <div className="space-y-6">
                      <p className="text-lg text-white font-light leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="p-6 bg-slate-900/60 rounded-3xl border border-white/5 space-y-4">
                        <h6 className="text-blue-500 font-black text-[10px] uppercase tracking-widest">
                          Resumen Ejecutivo
                        </h6>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          Este análisis técnico profundiza en la transición
                          organizacional hacia modelos de eficiencia elástica.
                          Discute el impacto directo en el EBITDA y la reducción
                          de la deuda técnica institucional.
                        </p>
                        <button className="text-[10px] font-black text-white uppercase tracking-widest flex items-center gap-2 hover:text-blue-500 transition-colors">
                          Descargar Reporte Completo (PDF){" "}
                          <ArrowRight size={12} />
                        </button>
                      </div>
                    </div>,
                    post.category,
                    post.image
                  )
                }
                className="glass rounded-2xl overflow-hidden group cursor-pointer border-white/5 hover:border-blue-500/20 transition-all bg-slate-900/10"
              >
                <div className="h-40 overflow-hidden relative bg-slate-900">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover grayscale opacity-30 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="glass text-[8px] font-black text-white px-3 py-1.5 uppercase tracking-widest rounded-full border border-white/10">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-[8px] text-slate-500 font-black uppercase tracking-widest mb-3">
                    <Calendar size={12} className="mr-2 text-blue-600" />{" "}
                    {post.date} • {post.readTime}
                  </div>
                  <h3 className="text-lg font-black text-white mb-3 tracking-tight leading-snug uppercase group-hover:text-blue-500 transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex items-center text-blue-500 font-black text-[8px] uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                    Leer más <ArrowRight size={12} className="ml-2" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
