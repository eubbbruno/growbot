"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaWhatsapp, FaCog, FaRobot, FaRocket, FaUsers, FaDollarSign, FaQuestionCircle } from "react-icons/fa";

export default function Home() {
  // Variantes de animação
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const stagger = {
    animate: { transition: { staggerChildren: 0.2 } },
  };

  const pulse = {
    animate: { scale: [1, 1.05, 1], transition: { duration: 1.5, repeat: Infinity } },
  };

  const hoverScale = {
    whileHover: { scale: 1.05, transition: { duration: 0.3 } },
    whileTap: { scale: 0.95 },
  };

  return (
    <div className="bg-white text-gray-900 overflow-x-hidden">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="bg-white py-6 fixed top-0 w-full z-50 shadow-md"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          <h1 className="text-4xl font-ibm-plex-sans font-bold text-pink-600">GrowBot</h1>
          <nav className="space-x-8">
            <Link href="/login" className="text-gray-600 hover:text-pink-600 transition font-outfit">Login</Link>
            <Link href="/signup" className="bg-pink-600 text-white px-6 py-3 rounded-full hover:bg-pink-700 transition font-outfit font-medium shadow-md">Teste Grátis</Link>
          </nav>
        </div>
      </motion.header>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center text-center px-6 pt-24 pb-16 relative bg-gradient-to-br from-white to-gray-100">
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="max-w-6xl z-10"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-ibm-plex-sans font-bold mb-8 leading-tight text-gray-900"
          >
            Automatize seu Atendimento e <span className="text-pink-600">Cresça</span> com o GrowBot
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-xl font-outfit text-gray-700 mb-12 max-w-3xl mx-auto"
          >
            Transforme a maneira como sua empresa atende clientes com um chatbot de IA para WhatsApp e sites. Respostas rápidas, personalização fácil e resultados reais – tudo isso por um preço acessível.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link href="/signup" className="bg-pink-600 text-white px-10 py-5 rounded-full text-xl font-outfit font-medium hover:bg-pink-700 transition shadow-lg inline-block">
              Experimente Grátis por 15 Dias
            </Link>
          </motion.div>
          {/* Frame de Vídeo */}
          <motion.div
            variants={fadeInUp}
            className="max-w-4xl mx-auto mt-12 bg-gray-100 rounded-xl overflow-hidden shadow-xl glassmorphic"
          >
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/SEU_VIDEO_AQUI"
              title="GrowBot em Ação"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
        </motion.div>
        {/* Formas de Fundo (Glassmorphic) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute w-96 h-96 rounded-full bg-pink-200/20 blur-3xl -top-20 -left-20 glassmorphic"></div>
          <div className="absolute w-80 h-80 rounded-full bg-pink-300/20 blur-3xl -bottom-20 -right-20 glassmorphic"></div>
        </motion.div>
      </section>

      {/* Sobre o GrowBot */}
      <section className="py-24 px-6 max-w-7xl mx-auto bg-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-ibm-plex-sans font-bold text-center mb-12 text-gray-900"
        >
          O que é o GrowBot?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg font-outfit text-gray-700 max-w-3xl mx-auto text-center"
        >
          O GrowBot é a solução definitiva de automatização de atendimento para Pequenas e Médias Empresas (PME) brasileiras, projetado para simplificar e otimizar o suporte ao cliente. Usando inteligência artificial avançada, como o ChatGPT, ele oferece respostas 24/7 no WhatsApp e sites, com configuração fácil e personalização total para sua marca. Ideal para negócios que buscam crescer sem complicações.
        </motion.p>
      </section>

      {/* Problema e Solução */}
      <section className="py-24 px-6 max-w-7xl mx-auto bg-gray-50 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.15 }}
          viewport={{ once: true }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute w-64 h-64 rounded-full bg-pink-400/20 blur-2xl -top-16 -left-16 glassmorphic"></div>
          <div className="absolute w-72 h-72 rounded-full bg-pink-300/20 blur-2xl -bottom-16 -right-16 glassmorphic"></div>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-ibm-plex-sans font-bold text-center mb-16 text-gray-900"
        >
          Seu Atendimento Pode Ser Melhor
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-md glassmorphic hover:shadow-lg transition-all"
          >
            <h3 className="text-2xl font-ibm-plex-sans font-semibold text-red-600 mb-4">O Problema</h3>
            <p className="text-lg font-outfit text-gray-700">
              Atendimento manual é lento, caro e inconsistente. Clientes esperam horas por respostas, sua equipe fica sobrecarregada e você perde vendas por não estar disponível 24/7. No mundo digital, isso prejudica sua reputação e lucratividade.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-md glassmorphic hover:shadow-lg transition-all"
          >
            <h3 className="text-2xl font-ibm-plex-sans font-semibold text-green-600 mb-4">A Solução</h3>
            <p className="text-lg font-outfit text-gray-700">
              O GrowBot resolve isso com um assistente virtual que responde instantaneamente, personaliza experiências e opera ininterruptamente. Integre ao WhatsApp ou site e transforme o atendimento em uma poderosa ferramenta de vendas e fidelização.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-24 px-6 max-w-7xl mx-auto bg-white relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.15 }}
          viewport={{ once: true }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute w-80 h-80 rounded-full bg-pink-200/20 blur-3xl -top-20 -left-20 glassmorphic"></div>
          <div className="absolute w-60 h-60 rounded-full bg-pink-400/20 blur-3xl -bottom-20 -right-20 glassmorphic"></div>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-ibm-plex-sans font-bold text-center mb-16 text-gray-900"
        >
          Por que Escolher o GrowBot?
        </motion.h2>
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 z-10"
        >
          {[
            { icon: <FaWhatsapp />, title: "Presença no WhatsApp", desc: "Alcance seus clientes no canal mais usado no Brasil com respostas automáticas e personalizadas, 24/7." },
            { icon: <FaRocket />, title: "Crescimento Rápido", desc: "Aumente suas vendas e converta leads com um atendimento ágil e eficiente, sem esforço extra." },
            { icon: <FaDollarSign />, title: "Economia Significativa", desc: "Reduza custos em até 70% ao substituir atendimento manual por automação inteligente." },
            { icon: <FaCog />, title: "Configuração Intuitiva", desc: "Personalize seu chatbot em minutos, mesmo sem conhecimento técnico, com nosso painel simples." },
            { icon: <FaUsers />, title: "Clientes Felizes", desc: "Ofereça suporte instantâneo e melhore a experiência do cliente, fidelizando sua base." },
            { icon: <FaRobot />, title: "Tecnologia Avançada", desc: "Aproveite a IA do ChatGPT para respostas naturais e inteligentes, adaptadas ao seu negócio." },
          ].map((benefit, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              {...hoverScale}
              className="bg-white p-6 rounded-xl shadow-md glassmorphic hover:shadow-xl transition-all text-center"
            >
              <div className="text-pink-600 text-4xl mb-4 flex justify-center">{benefit.icon}</div>
              <h3 className="text-xl font-ibm-plex-sans font-semibold mb-2 text-gray-900">{benefit.title}</h3>
              <p className="text-gray-700 font-outfit">{benefit.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Como Funciona */}
      <section className="py-24 px-6 max-w-7xl mx-auto bg-gray-50 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.15 }}
          viewport={{ once: true }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute w-72 h-72 rounded-full bg-pink-300/20 blur-2xl -top-16 -left-16 glassmorphic"></div>
          <div className="absolute w-64 h-64 rounded-full bg-pink-400/20 blur-2xl -bottom-16 -right-16 glassmorphic"></div>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-ibm-plex-sans font-bold text-center mb-16 text-gray-900"
        >
          Como o GrowBot Funciona na Prática
        </motion.h2>
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto space-y-12 z-10"
        >
          {[
            { step: "Configure seu Bot", desc: "Adicione informações como menu, FAQs e tom de voz através de um painel intuitivo, sem necessidade de código." },
            { step: "Conecte ao WhatsApp ou Site", desc: "Integre o GrowBot ao seu número de WhatsApp ou site com poucos cliques, usando nossa API amigável." },
            { step: "Atenda Clientes 24/7", desc: "Permita que o GrowBot responda perguntas, realize vendas e agende serviços em tempo real, a qualquer hora." },
            { step: "Monitore e Otimize", desc: "Acompanhe métricas com nosso dashboard e ajuste o bot para maximizar resultados e satisfação do cliente." },
          ].map((step, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              {...hoverScale}
              className="flex items-start bg-white p-6 rounded-xl shadow-md glassmorphic hover:shadow-lg transition-all"
            >
              <div className="bg-pink-600 text-white w-12 h-12 flex items-center justify-center rounded-full mr-6 font-ibm-plex-sans font-bold text-xl">{idx + 1}</div>
              <div>
                <h3 className="text-xl font-ibm-plex-sans font-semibold text-gray-900">{step.step}</h3>
                <p className="text-gray-700 font-outfit">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Depoimentos */}
      <section className="py-24 px-6 max-w-7xl mx-auto bg-white relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.15 }}
          viewport={{ once: true }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute w-80 h-80 rounded-full bg-pink-200/20 blur-3xl -top-20 -left-20 glassmorphic"></div>
          <div className="absolute w-60 h-60 rounded-full bg-pink-400/20 blur-3xl -bottom-20 -right-20 glassmorphic"></div>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-ibm-plex-sans font-bold text-center mb-16 text-gray-900"
        >
          O Que Nossos Clientes Dizem
        </motion.h2>
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 z-10"
        >
          {[
            { quote: "O GrowBot revolucionou meu restaurante! Atendimento rápido, mais vendas e menos estresse.", name: "João Silva - Sabor Brasileiro" },
            { quote: "Meus clientes amam a praticidade. Configurar foi tão fácil que levei minutos!", name: "Ana Costa - Beleza Pura" },
            { quote: "Economizei horas e aumentei minha lucratividade. O melhor investimento do ano!", name: "Pedro Lima - Tech Store" },
          ].map((testimonial, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              {...hoverScale}
              className="bg-white p-6 rounded-xl shadow-md glassmorphic hover:shadow-lg transition-all text-center"
            >
              <p className="text-lg font-outfit text-gray-700 italic mb-4">"{testimonial.quote}"</p>
              <p className="font-ibm-plex-sans font-semibold text-pink-600">{testimonial.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Preços */}
      <section className="py-24 px-6 max-w-7xl mx-auto bg-gray-50 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.15 }}
          viewport={{ once: true }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute w-72 h-72 rounded-full bg-pink-300/20 blur-2xl -top-16 -left-16 glassmorphic"></div>
          <div className="absolute w-64 h-64 rounded-full bg-pink-400/20 blur-2xl -bottom-16 -right-16 glassmorphic"></div>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-ibm-plex-sans font-bold text-center mb-16 text-gray-900"
        >
          Planos Que Cabem no Seu Bolso
        </motion.h2>
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 z-10"
        >
          <motion.div variants={fadeInUp} {...hoverScale} className="bg-white p-8 rounded-xl shadow-md glassmorphic hover:shadow-lg transition-all">
            <h3 className="text-2xl font-ibm-plex-sans font-semibold text-gray-900 mb-4">Básico</h3>
            <p className="text-4xl font-ibm-plex-sans font-bold text-gray-900 mb-4">R$ 79,90<span className="text-xl text-gray-600">/mês</span></p>
            <ul className="text-gray-700 font-outfit space-y-3 mb-6">
              <li>1 Chatbot</li>
              <li>500 Interações/mês</li>
              <li>Integração WhatsApp</li>
              <li>Suporte por E-mail</li>
            </ul>
            <Link href="/signup" className="block bg-pink-600 text-white py-3 rounded-full text-center font-outfit font-medium hover:bg-pink-700 transition">Escolher Plano</Link>
          </motion.div>
          <motion.div variants={fadeInUp} {...hoverScale} className="bg-white p-8 rounded-xl shadow-md glassmorphic hover:shadow-lg transition-all">
            <h3 className="text-2xl font-ibm-plex-sans font-semibold text-gray-900 mb-4">Pro</h3>
            <p className="text-4xl font-ibm-plex-sans font-bold text-gray-900 mb-4">R$ 149,90<span className="text-xl text-gray-600">/mês</span></p>
            <ul className="text-gray-700 font-outfit space-y-3 mb-6">
              <li>3 Chatbots</li>
              <li>2.000 Interações/mês</li>
              <li>Integração WhatsApp + Site</li>
              <li>Suporte Premium</li>
            </ul>
            <Link href="/signup" className="block bg-pink-600 text-white py-3 rounded-full text-center font-outfit font-medium hover:bg-pink-700 transition">Escolher Plano</Link>
          </motion.div>
          <motion.div variants={fadeInUp} {...hoverScale} className="bg-white p-8 rounded-xl shadow-md glassmorphic hover:shadow-lg transition-all">
            <h3 className="text-2xl font-ibm-plex-sans font-semibold text-gray-900 mb-4">Enterprise</h3>
            <p className="text-4xl font-ibm-plex-sans font-bold text-gray-900 mb-4">Sob Consulta</p>
            <ul className="text-gray-700 font-outfit space-y-3 mb-6">
              <li>Bots Ilimitados</li>
              <li>Interações Ilimitadas</li>
              <li>Suporte Dedicado</li>
              <li>Integração Customizada</li>
            </ul>
            <Link href="/signup" className="block bg-pink-600 text-white py-3 rounded-full text-center font-outfit font-medium hover:bg-pink-700 transition">Fale Conosco</Link>
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 max-w-7xl mx-auto bg-white relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.15 }}
          viewport={{ once: true }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute w-80 h-80 rounded-full bg-pink-200/20 blur-3xl -top-20 -left-20 glassmorphic"></div>
          <div className="absolute w-60 h-60 rounded-full bg-pink-400/20 blur-3xl -bottom-20 -right-20 glassmorphic"></div>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-ibm-plex-sans font-bold text-center mb-16 text-gray-900"
        >
          Perguntas Frequentes
        </motion.h2>
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-8 max-w-4xl mx-auto z-10"
        >
          {[
            { q: "O que é o GrowBot?", a: "O GrowBot é um chatbot de IA para Pequenas e Médias Empresas, projetado para automatizar atendimento no WhatsApp e sites, com configuração fácil e respostas inteligentes." },
            { q: "Preciso de conhecimentos técnicos para usar?", a: "Não! Nosso painel é intuitivo, permitindo configuração em minutos, mesmo sem experiência técnica." },
            { q: "Funciona no meu WhatsApp atual?", a: "Sim, você pode usar o número existente ou criar um novo, integrando facilmente via nossa API." },
            { q: "Qual o custo após o teste grátis?", a: "Planos começam em R$ 79,90/mês, com opções para todos os tamanhos de negócio, incluindo Básico, Pro e Enterprise." },
            { q: "O GrowBot é seguro para meus clientes?", a: "Sim, usamos criptografia de ponta e seguimos normas de privacidade, garantindo total segurança nas interações." },
          ].map((faq, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              {...hoverScale}
              className="bg-white p-6 rounded-xl shadow-md glassmorphic hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-ibm-plex-sans font-semibold text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-gray-700 font-outfit">{faq.a}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Blog Teaser */}
      <section className="py-24 px-6 max-w-7xl mx-auto bg-gray-50 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.15 }}
          viewport={{ once: true }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute w-72 h-72 rounded-full bg-pink-300/20 blur-2xl -top-16 -left-16 glassmorphic"></div>
          <div className="absolute w-64 h-64 rounded-full bg-pink-400/20 blur-2xl -bottom-16 -right-16 glassmorphic"></div>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-ibm-plex-sans font-bold text-center mb-16 text-gray-900"
        >
          Dicas para o Sucesso da Sua Empresa
        </motion.h2>
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 z-10"
        >
          {[
            { title: "Como Automatizar seu Atendimento com IA", desc: "Aprenda a usar chatbots para transformar sua operação e economizar tempo." },
            { title: "Estratégias de WhatsApp para Vendas", desc: "Descubra como maximizar conversões com o canal favorito dos brasileiros." },
            { title: "IA Acessível para Pequenos Negócios", desc: "Saiba como a inteligência artificial pode alavancar seu negócio sem custos altos." },
            { title: "5 Dicas para Fidelizar Clientes", desc: "Melhore a experiência do cliente com atendimento automatizado e personalizado." },
          ].map((post, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              {...hoverScale}
              className="bg-white p-6 rounded-xl shadow-md glassmorphic hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-ibm-plex-sans font-semibold text-gray-900 mb-2">{post.title}</h3>
              <p className="text-gray-700 font-outfit mb-4">{post.desc}</p>
              <Link href="/blog" className="text-pink-600 font-outfit hover:underline">Leia Mais</Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-6 text-center bg-pink-600 text-white relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.15 }}
          viewport={{ once: true }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute w-80 h-80 rounded-full bg-pink-200/20 blur-3xl -top-20 -left-20 glassmorphic"></div>
          <div className="absolute w-60 h-60 rounded-full bg-pink-400/20 blur-3xl -bottom-20 -right-20 glassmorphic"></div>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-ibm-plex-sans font-bold mb-8"
        >
          Não Deixe Suas Oportunidades Escaparem
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl font-outfit mb-10 max-w-3xl mx-auto"
        >
          Experimente o GrowBot por 15 dias grátis e veja como a automação pode transformar sua empresa. Atendimento rápido, clientes felizes e crescimento garantido – comece hoje mesmo!
        </motion.p>
        <motion.div variants={pulse} animate="animate">
          <Link href="/signup" className="bg-white text-pink-600 px-10 py-5 rounded-full text-xl font-outfit font-medium hover:bg-gray-200 transition shadow-lg inline-block">
            Teste Grátis Agora
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-6 text-gray-300 text-center">
        <h3 className="text-2xl font-ibm-plex-sans font-bold mb-4 text-pink-600">GrowBot</h3>
        <p className="font-outfit mb-4">Automatização de atendimento para Pequenas e Médias Empresas (PME) brasileiras</p>
        <div className="space-x-6">
          <Link href="/sobre" className="hover:text-pink-400 transition font-outfit">Sobre</Link>
          <Link href="/contato" className="hover:text-pink-400 transition font-outfit">Contato</Link>
          <Link href="/blog" className="hover:text-pink-400 transition font-outfit">Blog</Link>
        </div>
        <p className="mt-6 font-outfit">© 2025 GrowBot. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}