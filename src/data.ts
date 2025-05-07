const services = [
  {
    id: 1,
    value: 'Chip Tuning and ECU Mapping',
    myimgs: 'chip-tuning.jpg',
    info: "We optimize your vehicle's ECU for increased power, improved fuel efficiency, and enhanced driving dynamics using industry-leading tuning software.",
  },
  {
    id: 2,
    value: 'Stainless Steel Exhaust Systems',
    myimgs: 'swift3.jpg',
    info: 'Our high-quality stainless steel exhausts improve performance, resist corrosion, and deliver a deeper, more aggressive sound.',
  },
  {
    id: 3,
    value: 'Service and Maintenance',
    myimgs: 'service-maintenance.jpg',
    info: 'We provide expert maintenance, diagnostics, and performance-oriented services to keep your vehicle in peak condition.',
  },
  {
    id: 4,
    value: 'Dyno Tuning',
    myimgs: 'dyno-tuning.jpg',
    info: 'Our advanced dynamometer fine-tunes your engine for maximum power, efficiency, and customized performance.',
  },
  {
    id: 5,
    value: 'Turbocharger Conversions & Upgrades',
    myimgs: 'turbocharger.jpg',
    info: 'We install and upgrade turbochargers for significant power gains, improved throttle response, and optimized efficiency.',
  },
  {
    id: 6,
    value: 'Supercharger Conversions',
    myimgs: 'supercharger.jpg',
    info: 'Our supercharger conversions deliver instant power, improved acceleration, and a linear boost for ultimate performance.',
  },
]

function getServices() {
  return services
}

export default { getServices }
