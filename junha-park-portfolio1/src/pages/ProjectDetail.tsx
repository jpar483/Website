  import { motion } from 'motion/react';
  import { useParams, Link } from 'react-router-dom';
  import {
    Code, CheckCircle, Quote,
    Bolt, Cpu, History, ChevronRight, Terminal, CheckCircle2,
    Code2, Route, Layers, BarChart3, ArrowLeft
  } from 'lucide-react';
  import { useEffect, useState, useRef } from "react";


  // ─────────────────────────────────────────────
  // SHARED — back button used by all layouts
  // ─────────────────────────────────────────────
  function BackButton() {
    return (
      <div className="max-w-7xl mx-auto px-8 pt-8">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors group"
        >
          <ArrowLeft
            size={16}
            className="transition-transform group-hover:-translate-x-1"
          />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Back to Portfolio</span>
        </Link>
      </div>
    );
  }

  // ─────────────────────────────────────────────
  // WINNIE THE BOHT — original layout
  // ─────────────────────────────────────────────
  const winnieData = {
    title: 'Winnie the Boht: An Exercise in Multidisciplinary Engineering.',
    category: 'Case Study — Robotics & AI',
    implementationTitle: 'Embedded Systems & Neural Integration',
    description: 'A sophisticated interactive robot developed from first principles, integrating embedded systems, real-time AI perception, and custom mechanical design.',
    mainImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCufiIjD2qhataYUZEiwPK1LXwypwPXyfPCAzTR_3xODUcmOBLfyYK8SFYkKSB_VhlKGxmnNf6YJ6k95qxUQe3z2djOEKjCtDBc8Z3ah-WEdAlIQ_hGddXm6GB9Fk6YpHlX-aCOcDFirvzMqKiRPx8r8d5sId3G-N8UUEJpQ3ZnUxghbWLLPH3jEE_m_jck6YDVWDhSipfGmkFVSICodLunz9NtY6nrelOqIl8MOPvyexlv973IJao18AwMzohen1gMIia82xGObQA',
    phase1: {
      title: 'Concept Sketches & Technical Requirements',
      content: 'The project began with a core requirement: a robot capable of nuanced physical interaction and human-centric perception. This necessitated a modular design balancing torque requirements for servo control with a low-latency computational stack.',
      points: [
        'Requirement gathering for 12-DOF skeletal movement.',
        'Integration of localized AI processing for privacy and speed.',
        'Thermal management strategies for high-torque actuators.'
      ],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5mjRqGqO3jLts_wczTgRKL0dHNveNvISpl3e5-i-0wu58rhdLoS7rgW37JyyOhiqV1Y52J-NqHl4xzvZRTy8l_tBP5j28B9TwqOikJzJy5HqRVcTTllbA95QFrXEpKLnf6T8VN6XugDGt0R8pbhisRR9wF3TAwi4f7eeTQZuvWzQwOXT9VnAWeoIISRXe-pPwoEFHVdF7Vv14dnU3ejFmQRnOoxoMma9OU-GbXnsEpPvgrbCzFfbmfNWPKFPu6PT-BUXuJRDUx7s'
    },
    specs: [
      { label: 'Processor', value: 'NVIDIA Jetson Nano + Dual ESP32' },
      { label: 'Actuation', value: '18x Digital High-Torque Servos' },
      { label: 'Vision', value: '4K Stereo Depth Camera Module' },
      { label: 'Runtime', value: 'LiFePO4 4-Cell System (4hrs active)' }
    ],
    features: [
      {
        title: 'Embedded Logic',
        description: 'Development of custom firmware for ESP32 and ARM-based controllers to manage high-frequency PWM signals for precise servo positioning.',
        tags: ['RTOS', 'C++', 'I2C BUS'],
      },
      {
        title: 'AI Perception',
        description: 'Implementation of OpenCV and MediaPipe pipelines for real-time facial tracking and gesture recognition with <30ms latency.',
        tags: ['TENSORFLOW', 'OPENCV', 'PYTHON'],
      },
      {
        title: 'Natural Audio',
        description: 'Integration of offline speech-to-text models and dynamic text-to-speech synthesis for fluid vocal interactions.',
        tags: ['STT', 'NLP', 'WAV2VEC'],
      }
    ],
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAFGeImgrt0jtIbeFyB6hWqu6Dkr9pz5ter55q7WCikD4asixLpCRIAjT3WOPEF4q7BODVBvOwruWfDgy-nOJ1OrJuRJF6pjjopt4CggrzNp0pTVwtkRLUByEJqYTzP6IWVszLlXFKlCTD0nQ_0Mr9kObssp2PSFwnpWQ-26qDp8DnLnBYkbvvszPe8Rw01snHMes_GEOR1wWjA_eEsxksWaXqebXfC5kBTC-YEmhqf2G5hvd-rT8BnXb6VvLLS5qWKC-jv7Bs84hg',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDsf_Yqvnh8MfuN0aZ7mKxgwAmBfD0nlB1xwqJey-M2eaoHCRksA-N_ZCs1_L5RBEzrHKhqx5KzEhQmS1JhEqvhs2kvg8pIeMzApnoR04tCn6jJfTv7dYrl7M-Deu4L5qSY5UEhEtm7PAPi7vyP1iACpA68Wdw2-nljXH8aN7uwRsXSj_4tIhZnlaixbzA4DDfS_e8OdpafPZN2Ijb2N1WMQQz6PqRkp6P9cBIz8jZAaFf4y93KIMw1C6tv-wvES6_k3Wu_36h7bPA'
    ],
    quote: "Winnie the Boht represents the pinnacle of my current research into collaborative robotics and intuitive human-machine interfaces."
  };

  function WinnieDetail() {
    const project = winnieData;
    const phase1Images = useRef([
  "/Photos/Initial_Design1.jpg",
  "/Photos/Initial_Design2.jpg",
  "/Photos/Initial_Design3.jpg",
  "/Photos/Initial_Design4.jpg",
]).current;

const [imgIndex, setImgIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setImgIndex((prev) => (prev + 1) % phase1Images.length);
  }, 4000);

  return () => clearInterval(interval);
}, [phase1Images.length]);
    return (
      <div className="pb-32">
        <BackButton />
        <header className="max-w-7xl mx-auto px-8 py-24 md:py-32 border-l border-outline-variant/30 ml-8 md:mx-auto">
          <div className="flex flex-col gap-6">
            <span className="text-[10px] font-bold text-primary tracking-widest uppercase">{project.category}</span>
            <h1 className="text-4xl md:text-6xl font-bold max-w-4xl tracking-tight leading-[1.1] text-on-surface">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
              {project.description}
            </p>
            <div className="flex gap-4 mt-8">
              <a href="https://github.com/jpar483" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 border border-outline/30 px-8 py-4 text-[10px] font-bold hover:bg-on-surface hover:text-background transition-all uppercase tracking-widest">
                <Code size={16} />
                VIEW REPOSITORY
              </a>
            </div>
          </div>
        </header>

        {/* Phase 01 */}
        <section className="max-w-7xl mx-auto px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 items-stretch">
            <div>
              <span className="text-[9px] font-bold text-outline mb-4 block tracking-[0.3em] uppercase">PHASE 01 // ARCHITECTURE</span>
              <h2 className="text-3xl font-bold mb-8 tracking-tight">{project.phase1.title}</h2>
              <div className="flex flex-col gap-8 text-on-surface-variant">
                <p className="text-base leading-relaxed">{project.phase1.content}</p>
                <ul className="space-y-4">
                  {project.phase1.points.map((point: string) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-primary mt-0.5" />
                      <span className="text-sm md:text-base text-on-surface">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-surface-container p-1 border border-outline-variant/30 overflow-hidden rounded-lg h-full">
  <div className="relative w-full h-[600px] md:h-[900px] overflow-hidden rounded-lg">
  {phase1Images.map((src, i) => (
    <img
      key={src}
      src={src}
      alt=""
      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
        i === imgIndex ? "opacity-100 z-10" : "opacity-0 z-0"
      }`}
    />
  ))}


  </div>
</div>
          </div>
        </section>

        {/* Phase 02 */}
        <section className="bg-surface-container-low py-32 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <span className="text-[9px] font-bold text-outline mb-4 block tracking-[0.3em] uppercase">PHASE 02 // IMPLEMENTATION</span>
              <h2 className="text-3xl font-bold tracking-tight">{project.implementationTitle}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {project.features.map((feature: any) => (
                <div key={feature.title} className="bg-background p-10 border-l-2 border-primary transition-all hover:bg-surface-container">
                  <h3 className="text-xl font-bold mb-4 tracking-tight">{feature.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed mb-8">{feature.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {feature.tags.map((tag: string) => (
                      <span key={tag} className="bg-surface-container-high px-3 py-1 text-[9px] font-bold border border-outline-variant/30 uppercase tracking-widest">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Prototype & Specs */}
        <section className="max-w-7xl mx-auto px-8 py-32">
          <div className="flex flex-col md:flex-row gap-20">
            <div className="md:w-2/5 space-y-12">
              <div className="relative overflow-hidden group border border-outline-variant/30 rounded-xl inline-block w full">
              <img alt="Final Prototype"className="w-full h-auto brightness-90 group-hover:brightness-100 transition-all duration-500"src="/Photos/Winnie_Final.jpg"/>
                <div className="absolute bottom-6 left-6 bg-background/90 backdrop-blur-md px-6 py-4 border border-outline-variant/30 rounded-lg">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em]">Final Prototype</p>
                </div>
              </div>
              <div className="md:w-4/4 space-y-8">
              <div className="flex flex-col gap-6 w-full">
    <div className="group overflow-hidden border border-outline-variant/30 rounded-xl w-full">
      <img
        alt="Winnie Presentation 1"
        className="w-full min-h-[520px] object-cover transition-all duration-700 hover:scale-105"
        src="/Photos/winne_presentation_1.jpg"
      />
    </div>

    <div className="group overflow-hidden border border-outline-variant/30 rounded-xl w-full">
      <img
        alt="Winnie Presentation 2"
        className="w-full min-h-[520px] object-cover transition-all duration-700 hover:scale-105"
        src="/Photos/winne_presentation_2.jpg"
      />
    </div>
  </div>
  </div>
            </div>
            <div className="md:w-2/5">
              <div className="sticky top-32">
                <span className="text-[10px] font-bold text-primary mb-4 block tracking-[0.2em] uppercase">TECHNICAL SPECIFICATIONS</span>
                <h2 className="text-2xl font-bold mb-12 tracking-tight">Technical Integrity</h2>
                <div className="space-y-8">
                  {project.specs.map((spec: any) => (
                    <div key={spec.label} className="border-b border-outline-variant/30 pb-6">
                      <p className="text-[9px] font-bold text-outline mb-2 uppercase tracking-widest">{spec.label}</p>
                      <p className="text-base text-on-surface font-semibold">{spec.value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-16 p-10 bg-surface-container-low border border-primary/20 relative group overflow-hidden rounded-xl">
                  <Quote size={40} className="absolute top-4 left-4 text-primary/10 transition-transform group-hover:scale-110" />
                  <p className="text-sm md:text-base text-on-surface mb-8 italic relative z-10 leading-relaxed">
                    "{project.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center font-bold text-on-primary text-sm">JP</div>
                    <div>
                      <p className="text-[10px] font-bold text-on-surface tracking-wider uppercase">JUNHA PARK</p>
                      <p className="text-[9px] text-outline uppercase tracking-widest font-bold">Computer Systems Engineer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // ─────────────────────────────────────────────
  // SMART ENERGY MONITOR — rich layout
  // ─────────────────────────────────────────────
  function EnergyMonitorDetail() {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="pb-32"
      >
        <BackButton />
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-8 pt-8 mb-40">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
              <motion.span initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
                className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
                Case Study 01
              </motion.span>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold text-on-surface mb-8 tracking-tighter">
                Smart Energy Monitor
              </motion.h1>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
                className="text-xl text-on-surface-variant max-w-2xl mb-12 leading-relaxed">
                An end-to-end industrial IoT solution designed to combat residential and commercial energy wastage through real-time ATmega-based monitoring and predictive load analysis.
              </motion.p>
              <div className="flex flex-wrap gap-4">
                {['HARDWARE DESIGN', 'EMBEDDED SYSTEMS'].map((tag, i) => (
                  <div key={tag} className="px-4 py-2 border border-outline-variant bg-surface-container rounded-full flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-primary' : 'bg-tertiary'}`}></div>
                    <span className="text-[10px] font-black text-on-surface tracking-widest">{tag}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-[1.5] w-full h-[500px] md:h-[650px] bg-surface-container-high rounded-xl overflow-hidden relative group">
              <img
                src="/Photos/Smart_Energy.jpeg"
                alt="Smart Energy Monitor"
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
            </div>
          </div>
        </section>

        {/* Phase 1 */}
        <section className="max-w-7xl mx-auto px-8 mb-40 border-l border-outline-variant/30 pl-12 relative">
          <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-primary rounded-full"></div>
          <h2 className="text-4xl font-bold text-on-surface mb-10">Phase 1: Identification & Prototyping</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">The Challenge</h3>
              <p className="text-on-surface-variant leading-relaxed">Global energy prices are rising, yet 30% of energy consumed in commercial buildings is wasted. The project aimed to create a non-invasive current sensing device capable of identifying phantom loads and inefficient duty cycles in legacy machinery.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Initial Circuitry</h3>
              <p className="text-on-surface-variant leading-relaxed">Conceptual designs focused on signal conditioning for CT sensors. We utilized Op-Amp differential amplifiers to step down high-voltage AC signatures into readable 0-5V analog signals for the microcontroller ADC.</p>
            </div>
          </div>
          <div className="bg-surface-container rounded-xl p-12 border border-outline-variant/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { icon: Bolt, value: '98.4%', label: 'Accuracy Target' },
                { icon: Cpu, value: 'ATmega328P', label: 'Architecture' },
                { icon: History, value: 'Real-Time', label: 'Data Processing' },
              ].map(stat => (
                <div key={stat.label} className="space-y-4">
                  <stat.icon className="text-primary" size={32} />
                  <h4 className="text-3xl font-bold text-on-surface">{stat.value}</h4>
                  <p className="text-[10px] font-black text-outline uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Phase 2: Execution */}
        <section className="max-w-7xl mx-auto px-8 mb-40">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-on-surface">Phase 2: Technical Execution</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 bg-surface-container rounded-xl overflow-hidden border border-outline-variant/30 flex flex-col md:flex-row">
              <div className="p-10 md:w-1/2 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-on-surface mb-4">Advanced PCB Layout</h3>
                <p className="text-on-surface-variant mb-8 leading-relaxed">Implementing a 4-layer stackup to isolate high-frequency switching noise from the sensitive analog measurement stage. Integrated EMI shielding and ground planes ensure signal integrity in industrial environments.</p>
                <div className="flex flex-wrap gap-2">
                  {['ALTIUM DESIGNER', '4-LAYER STACK', 'SMD COMPONENTS'].map(t => (
                    <span key={t} className="bg-surface-container-highest px-3 py-1 rounded text-[10px] font-black tracking-wider uppercase">{t}</span>
                  ))}
                </div>
              </div>
              <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                <img
                src="/Photos/Smart_PCB.jpeg"
                alt="Smart Energy Monitor"
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              </div>
            </div>
            <div className="lg:col-span-4 bg-primary p-10 rounded-xl flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-on-primary">Firmware & Logic</h3>
                <p className="text-on-primary/80 leading-relaxed font-medium">Custom C++ firmware optimized for bare-metal performance. Simulated in LTspice for transient response and Proteus for logic verification.</p>
              </div>
              <div className="mt-8 border-t border-on-primary/20 pt-8">
                <ul className="space-y-4">
                  {['INTERRUPT DRIVEN ADC', 'UART DEBUGGING LAYER', 'EEPROM DATA LOGGING'].map(point => (
                    <li key={point} className="flex items-center gap-3 text-[10px] font-black tracking-[0.2em] text-on-primary uppercase">
                      <CheckCircle2 size={16} /> {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Final */}
        <section className="max-w-7xl mx-auto px-8 mb-40">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className="text-primary text-[10px] font-black uppercase tracking-widest mb-2 block">The Final Dashboard</span>
              <h2 className="text-5xl font-bold text-on-surface">Visualizing consumption in real-time via a responsive UI.</h2>
            </div>
            <a href="https://github.com/jpar483" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-on-surface text-surface px-8 py-4 rounded font-bold uppercase tracking-tight hover:bg-primary transition-all group shrink-0">
              <Terminal size={20} className="group-hover:rotate-12 transition-transform" />
              <span>View on GitHub</span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3 space-y-6">

              {/* IMAGE */}
              <div className="bg-surface-container-high rounded-xl border border-outline-variant/10 overflow-hidden group h-[450px] md:h-[600px] relative">
                <img
                  src="/Photos/Actual_SEM.jpg"
                  alt="Smart Energy Monitor"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* TEXT BELOW */}
              <div className="bg-black/60 backdrop-blur-md p-6 rounded-lg border border-white/10 max-w-2xl">
                <p className="text-primary text-[10px] font-black mb-2 uppercase tracking-[0.2em]">
                  LIVE METRICS
                </p>
                <h4 className="text-2xl font-bold text-white mb-2">
                  Predictive Energy Analytics
                </h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  The dashboard utilizes React and D3.js to render real-time waveforms from the hardware sensor nodes via a WebSocket gateway.
                </p>
              </div>

            </div>
            <div className="lg:col-span-1 bg-surface-container rounded-xl flex flex-col p-8 h-full border border-outline-variant/20">
              <div className="mb-8">
                <h4 className="text-primary text-[10px] font-black mb-1 uppercase tracking-widest">HARDWARE SPECS</h4>
                <p className="text-lg font-bold text-on-surface">Custom FR4 Enclosure</p>
              </div>
              <div className="aspect-square bg-surface-container-low rounded-lg overflow-hidden mb-8">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4EczrXkWlVpCcXb6VbclDjO8Z6OaHMAtkFKMHtaUAmrsbRUreryY8kUhNX-l2YomKcPqlGd5wtFgOvBQCZSh4r0vfmF0D2JZrPQqaD9napiC_HOGa5M_EkDmUZgDF-eymRJrmUZWCZjDgAOtZqHylcPjEl5zvR_0XOa76gMwFzP_bTcEJZMbAQ1OjtoXGppePMZMXWnTCs8kcTZMWRZ-7PI0VW3oSA_hBmSD_yppotCh9mtyl5gkfYHsIiSb9dRcxGKfxEpcr-YU"
                  alt="Enclosure" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-6 mt-auto">
                {[{ label: 'LAYER COUNT', value: '4-LAYER' }, { label: 'VOLTAGE RANGE', value: '90-260V AC' }].map(spec => (
                  <div key={spec.label} className="flex justify-between items-center text-[10px] border-t border-outline-variant/20 pt-4">
                    <span className="font-black text-outline uppercase tracking-widest">{spec.label}</span>
                    <span className="font-black text-on-surface uppercase tracking-widest">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="max-w-4xl mx-auto px-8 py-20 border-y border-outline-variant/20">
          <h2 className="text-3xl font-bold mb-8">Technical Conclusion</h2>
          <p className="text-xl text-on-surface-variant leading-relaxed italic">
            The Smart Energy Monitor represents a synthesis of precision hardware engineering and high-throughput data processing. By leveraging an interrupt-driven sampling architecture on the ATmega328P, the system achieves sub-millisecond latency in power signature detection. The integration of a 4-layer PCB design ensures minimal EMI interference, while the React-based visualization layer provides stakeholders with actionable insights into harmonic distortion and reactive power usage, ultimately delivering a scalable platform for industrial energy efficiency.
          </p>
        </section>
      </motion.div>
    );
  }

  // ─────────────────────────────────────────────
  // ROASTWORKS — rich layout
  // ─────────────────────────────────────────────
  function RoastworksDetail() {
    const gridImages = [
      '/Home.png',
      '/Sales.png',
      '/Business.png',
      '/Forecast.png',
      '/ForecastC.png',
    ];

    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="pb-32"
      >
        <BackButton />
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-8 pt-8 mb-40">
          <div className="w-full max-w-4xl">
            <motion.span initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
              className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
              Case Study: RoastWorks Coffee Dashboards
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold text-on-surface mb-8 tracking-tighter">
              Engineering Predictive Intelligence for High-Volume Roasteries.
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
              className="text-xl text-on-surface-variant max-w-2xl mb-12 leading-relaxed">
              Transforming coffee shop operations through data-driven forecasting and real-time inventory management. RoastWorks provides artisanal roasters with enterprise-grade tools to minimize waste and optimize supply chains.
            </motion.p>
            <div className="flex flex-wrap gap-4">
              {['PYTHON', 'PYQT6', 'DATA SCIENCE'].map((tag, i) => (
                <div key={tag} className="px-4 py-2 border border-outline-variant bg-surface-container rounded-full flex items-center gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-primary' : 'bg-tertiary'}`}></div>
                  <span className="text-[10px] font-black text-on-surface tracking-widest">{tag}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Phase 1 */}
        <section className="max-w-7xl mx-auto px-8 mb-40 border-l border-outline-variant/30 pl-12 relative">
          <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-primary rounded-full"></div>
          <h2 className="text-4xl font-bold text-on-surface mb-10">01. The Efficiency Deficit</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 space-y-8">
              <p className="text-lg text-on-surface-variant leading-relaxed">
                The initial objective was to eliminate manual bottlenecks in artisanal coffee shop workflows. High-growth roasteries were struggling with inventory lag and reactive ordering models that led to significant waste.
              </p>
              <div className="space-y-4">
                {[{ icon: BarChart3, label: '40% Waste Reduction Target' }, { icon: History, label: 'Predictive Forecasting Model' }].map(stat => (
                  <div key={stat.label} className="flex items-center gap-3">
                    <stat.icon size={20} className="text-primary" />
                    <span className="text-on-surface font-medium">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-7">
              <div className="p-1 aspect-video overflow-hidden rounded-xl border border-outline-variant/30">
                <img className="w-full h-full object-cover grayscale opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWe3AQRL-mQXQWTtyTUktgAJ6Btjsk8HybfXUYBW9I-9oHPPKm6h6oBKj5Khe4CdlBRCM2ca2IRWZU1YJQQuKdd3-Xlxs3QtwCCaSNJ8mRrBMaaJf9FEr207ipIkAn9vbsyGwWaJTGyv8hev_fpVvLEuEWF2IBkr5pYpOpxLxZKGU5pyFD4gsvHb6c_u3rSTT0_GvAOY-xoC-MeA03rxJE0mi5gcxBYhdq-x5YF0pYW9Cbr6BsWHfAlHIeT22cAtDQR58ebmvhUuY"
                  alt="Workflow" />
              </div>
            </div>
          </div>
        </section>

        {/* Phase 2 */}
        <section className="bg-surface-container-low -mx-0 px-8 py-32 rounded-3xl mb-40">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col gap-4 items-start text-left max-w-4xl mx-auto mb-16">
              <span className="text-primary text-[10px] font-black uppercase tracking-widest">DEVELOPMENT STACK</span>
              <h2 className="text-5xl font-bold text-on-surface">Python + PyQt6 Engineering</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-7xl mx-auto">
              <div className="space-y-12">
                <p className="text-xl text-on-surface-variant leading-relaxed">
                  Building the core engine required a robust desktop architecture. We utilized PyQt6 for the GUI to ensure enterprise-grade responsiveness, while the backend leveraged Python's analytical libraries for real-time forecasting.
                </p>
                <div className="space-y-8">
                  <div className="p-8 bg-surface-container rounded-xl border border-outline-variant/20 flex flex-col gap-2">
                    <span className="text-primary text-[10px] font-black uppercase tracking-widest">IMPLEMENTATION</span>
                    <h3 className="text-2xl font-bold">Forecasting Models</h3>
                    <p className="text-on-surface-variant">Time-series analysis using seasonal decomposition to predict demand spikes during holiday cycles and urban events.</p>
                  </div>
                  <div className="p-8 bg-surface-container rounded-xl border border-outline-variant/20 flex flex-col gap-2">
                    <span className="text-primary text-[10px] font-black uppercase tracking-widest">INTEGRATION</span>
                    <h3 className="text-2xl font-bold">AI Chatbot Interface</h3>
                    <p className="text-on-surface-variant">A natural language processing layer that allows shop managers to query inventory health and sales trends via simple text commands.</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="sticky top-40 space-y-8">
                  <div className="p-1 aspect-square bg-surface-container-lowest overflow-hidden rounded-xl border border-outline-variant/30">
                    <img className="w-full h-full object-cover grayscale opacity-40 brightness-50"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDmpH7OfrgKe23GADNxlopy2vHEe5nLI94CNH20zUJHIJTrbbSfkIK9hILnV1AGOYYEImGGRnzP0b1xwVH6ej2fAJJ-DtqghhFddYGs9BjvGcp1MMhh7r4iCTCymlwb-Uw12IDpSZqH_tIkpFX5NNirJCm7ZKFbWcxZsEcJNA5TKPjO3yG0zBxpFBENU3tR26oSXmCH-ZVk9-3RcxoTH88CV6pMkX474jbYtPtG2njOB8OMmuLa1aC59AYQlb3J-B6GCfME5zO8lk"
                      alt="Logic" />
                  </div>
                  <div className="flex gap-4">
                    <div className="h-1 bg-primary w-full"></div>
                    <div className="h-1 bg-outline/20 w-full"></div>
                    <div className="h-1 bg-outline/20 w-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final */}
        <section className="max-w-7xl mx-auto px-8 mb-40">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className="text-primary text-[10px] font-black uppercase tracking-widest mb-2 block">The Final Outcome</span>
              <h2 className="text-5xl font-bold text-on-surface">RoastWorks V1.0 Dashboard</h2>
            </div>
            <a href="https://github.com/jpar483" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-on-surface text-surface px-8 py-4 rounded font-bold uppercase tracking-tight hover:bg-primary transition-all group shrink-0">
              <Terminal size={20} className="group-hover:rotate-12 transition-transform" />
              <span>View on GitHub</span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 space-y-8">
              <div className="p-1 aspect-video overflow-hidden rounded-xl border border-outline-variant/20">
                <img className="w-full h-full object-cover" src={gridImages[0]} alt="Full Dashboard" />
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="p-1 h-80 overflow-hidden rounded-xl border border-outline-variant/20">
                  <img className="w-full h-full object-cover" src={gridImages[3]} alt="Analytics" />
                </div>
                <div className="p-1 h-80 overflow-hidden rounded-xl border border-outline-variant/20">
                  <img className="w-full h-full object-cover" src={gridImages[4]} alt="Predictions" />
                </div>
              </div>
            </div>
            <div className="md:col-span-4 space-y-8">
              <div className="p-1 overflow-hidden h-60 rounded-xl border border-outline-variant/20">
                <img className="w-full h-full object-cover" src={gridImages[1]} alt="Metrics" />
              </div>
              <div className="p-1 overflow-hidden h-60 rounded-xl border border-outline-variant/20">
                <img className="w-full h-full object-cover" src={gridImages[2]} alt="Resources" />
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    );
  }

  // ─────────────────────────────────────────────
  // JAVA NAV — rich layout
  // ─────────────────────────────────────────────
  function JavaNavDetail() {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="pb-32"
      >
        <BackButton />
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-8 pt-8 mb-40">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
              <motion.span initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
                className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
                Case Study: Android Engineering{' '}
                <span className="ml-4 inline-flex items-center gap-2 border border-outline-variant/30 px-2 py-0.5 rounded-full text-[12px] text-on-surface/60">WORK IN PROGRESS</span>
              </motion.span>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold text-on-surface mb-8 tracking-tighter">
                Java Navigation & Search
              </motion.h1>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
                className="text-xl text-on-surface-variant max-w-2xl mb-12 leading-relaxed">
                Developing a robust, high-performance search engine and navigation framework for complex Android ecosystems, leveraging Breadth-First Search (BFS) for optimal path discovery.
              </motion.p>
              <div className="flex flex-wrap gap-4">
                {['ANDROID XML', 'JAVA'].map((tag, i) => (
                  <div key={tag} className="px-4 py-2 border border-outline-variant bg-surface-container rounded-full flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-primary' : 'bg-tertiary'}`}></div>
                    <span className="text-[10px] font-black text-on-surface tracking-widest">{tag}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full aspect-video bg-surface-container-high rounded-xl overflow-hidden relative group">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2VeaoygOUapGiSgbRC4ypkKjBmB1oTDTVuawbjNmFScR80lghJyQASxCj4sF2eG-juu1ZgJK0nyIXjTS9PnaSh7JwXRqUXL1l6ZLaTUvyt97TsFl8V2JoBQaWK5zvTiZrpzYHMfaKcv0Vi7wxxld9umlY7kyDSlB3tMD0TSzabPKWOVz-3CRwZVY1s53AWndAipnpY7mwbdZoH6izdD8SqW5DHdfwAR6HO9Zj1uoMJWt8Kqi7T_oVpDzeTk6o_ZTerDAKSjtkr5k"
                alt="Java Navigation" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
            </div>
          </div>
        </section>

        {/* Phase 1 */}
        <section className="max-w-7xl mx-auto px-8 mb-40 border-l border-outline-variant/30 pl-12 relative">
          <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-primary rounded-full"></div>
          <h2 className="text-4xl font-bold text-on-surface mb-10">PHASE 01: DEFINITION</h2>
          <div className="bg-surface-container rounded-xl p-12 border border-outline-variant/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <p className="text-on-surface-variant leading-relaxed mb-8">
                  The project began with a rigorous analysis of data retrieval latencies within complex mobile environments. We identified a critical need for a non-linear search architecture that could navigate hierarchical data structures without blocking the UI thread.
                </p>
                {[{ value: 'Sub-200ms', label: 'Query Latency' }, { value: 'O(V+E)', label: 'Search Complexity' }].map(stat => (
                  <div key={stat.label} className="flex items-start gap-4">
                    <CheckCircle2 className="text-primary shrink-0 mt-1" size={24} />
                    <div>
                      <div className="font-bold text-on-surface text-sm uppercase mb-1">{stat.value}</div>
                      <div className="text-sm text-on-surface-variant">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-1 aspect-video relative flex items-center justify-center overflow-hidden rounded-xl border border-outline-variant/30">
                <img className="absolute inset-0 w-full h-full object-cover opacity-20"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2VeaoygOUapGiSgbRC4ypkKjBmB1oTDTVuawbjNmFScR80lghJyQASxCj4sF2eG-juu1ZgJK0nyIXjTS9PnaSh7JwXRqUXL1l6ZLaTUvyt97TsFl8V2JoBQaWK5zvTiZrpzYHMfaKcv0Vi7wxxld9umlY7kyDSlB3tMD0TSzabPKWOVz-3CRwZVY1s53AWndAipnpY7mwbdZoH6izdD8SqW5DHdfwAR6HO9Zj1uoMJWt8Kqi7T_oVpDzeTk6o_ZTerDAKSjtkr5k"
                  alt="Architecture" />
                <div className="relative text-center">
                  <Layers className="text-primary w-12 h-12 mx-auto mb-2" />
                  <div className="text-2xl font-bold tracking-tight">Blueprint Architecture</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Phase 2 */}
        <section className="max-w-7xl mx-auto px-8 mb-40">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-on-surface">PHASE 02: EXECUTION</h2>
          </div>
          <p className="text-xl text-on-surface-variant text-center max-w-3xl mx-auto mb-12">
            Bridging back-end algorithms with a fluid, responsive front-end experience.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Code2, title: 'XML Layouts', description: 'Custom view groups and fragments handle multi-state navigation flows without performance hits.' },
              { icon: Route, title: 'BFS Algorithm', description: 'Level-order traversal optimized for memory to find the absolute shortest navigation path.' },
              { icon: Cpu, title: 'Concurrency', description: 'Background workers process the graph, keeping the UI thread fluid and responsive.' },
            ].map(item => (
              <div key={item.title} className="p-8 bg-surface-container rounded-xl border border-outline-variant/20 border-l-4 border-l-primary/30">
                <item.icon className="text-primary mb-6" size={32} />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final */}
        <section className="max-w-7xl mx-auto px-8 mb-40">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className="text-primary text-[10px] font-black uppercase tracking-widest mb-2 block">FINAL PRODUCT</span>
              <h2 className="text-5xl font-bold text-on-surface">Performance & Metrics</h2>
              <p className="text-lg text-on-surface-variant mt-4">The result is a production-ready navigation engine that outperforms standard linear search by 45% in complex nested environments.</p>
            </div>
            <a href="https://github.com/jpar483" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-on-surface text-surface px-8 py-4 rounded font-bold uppercase tracking-tight hover:bg-primary transition-all group shrink-0">
              <Terminal size={20} className="group-hover:rotate-12 transition-transform" />
              <span>View on GitHub</span>
            </a>
          </div>
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative flex justify-center py-20">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-[120px] opacity-40"></div>
              <div className="relative w-full max-w-[300px] aspect-[9/18] rounded-[2.5rem] p-3 bg-surface-container-lowest/80 backdrop-blur-xl border border-outline-variant/50 shadow-2xl overflow-hidden">
                <div className="bg-[#0a0a0a] w-full h-full rounded-[1.8rem] flex flex-col items-stretch overflow-hidden">
                  <div className="p-4 border-b border-outline-variant/10 flex justify-between items-center bg-[#0e0e0e]">
                    <span className="font-bold text-[9px] tracking-widest text-on-surface opacity-60">NAV AI V1.2</span>
                    <div className="flex gap-1">
                      <div className="w-1 h-2 bg-on-surface-variant/30 rounded-full"></div>
                      <div className="w-1 h-3 bg-primary rounded-full"></div>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="h-6 w-3/4 bg-surface-container rounded-sm"></div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="h-20 bg-surface-container rounded-sm"></div>
                      <div className="h-20 bg-surface-container rounded-sm"></div>
                    </div>
                    <div className="aspect-square bg-primary/5 rounded-2xl border border-primary/20 flex items-center justify-center">
                      <Route className="text-primary w-12 h-12" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-12">
              <div className="grid grid-cols-2 gap-12">
                {[{ label: '99.9%', value: 'Accuracy Rate' }, { label: '12ms', value: 'Avg. Discovery' }].map(spec => (
                  <div key={spec.label}>
                    <div className="text-6xl font-black text-primary tracking-tighter mb-2">{spec.label}</div>
                    <div className="text-[10px] font-black text-on-surface opacity-40 uppercase tracking-widest">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    );
  }

  // ─────────────────────────────────────────────
  // ROUTER — picks the right layout by :id
  // ─────────────────────────────────────────────
  export default function ProjectDetail() {
    const { id } = useParams<{ id: string }>();

    if (id === 'smart-energy-monitor') return <EnergyMonitorDetail />;
    if (id === 'roastworks') return <RoastworksDetail />;
    if (id === 'java-nav') return <JavaNavDetail />;

    // Default: winnie-the-boht (and any future projects using the original layout)
    return <WinnieDetail />;
  }