import { successResponse } from '../utils/apiResponse.js';

const servicesData = [
  {
    num: '01',
    id: 'web-application-development',
    title: 'Web Application Development',
    tagline: 'Enterprise-grade reactive web platforms',
    desc: 'Custom, scalable web applications built with modern frameworks for enterprise-grade performance, rock-solid security, and seamless workflows.',
    tags: ['React', 'Next.js', 'Node.js', 'MongoDB'],
  },
  {
    num: '02',
    id: 'mobile-application-development',
    title: 'Mobile App Development',
    tagline: 'High-performance native & cross-platform apps',
    desc: 'High-performance native and cross-platform apps for every device and every user, engineered for fluid 60fps animations and high retention.',
    tags: ['Flutter', 'React Native', 'iOS & Android'],
  },
  {
    num: '03',
    id: 'game-development',
    title: 'Game Development',
    tagline: 'Engaging 2D & 3D cross-platform games',
    desc: 'Engaging 2D/3D games built for mobile, web and cross-platform publishing with captivating visuals, fluid physics, and multiplayer capabilities.',
    tags: ['Unity', '2D & 3D', 'Multiplayer'],
  },
  {
    num: '04',
    id: 'e-commerce-development',
    title: 'E-Commerce Development',
    tagline: 'Secure, high-converting digital storefronts',
    desc: 'Secure and scalable stores with powerful checkout, payment gateway integrations, real-time inventory management, and tailored admin control.',
    tags: ['Shopify', 'WooCommerce', 'Custom Headless'],
  },
  {
    num: '05',
    id: 'web-erp-development',
    title: 'Web ERP Development',
    tagline: 'Connected operational systems for growing teams',
    desc: 'End-to-end ERP systems connecting finance, HR, inventory, procurement, and operations into a single cohesive management portal.',
    tags: ['ERP Modules', 'Analytics', 'Automation'],
  },
  {
    num: '06',
    id: 'api-development',
    title: 'API Development & Microservices',
    tagline: 'High-throughput, secure distributed APIs',
    desc: 'Secure RESTful and GraphQL APIs built for modern web, mobile and cloud infrastructure with comprehensive documentation and token security.',
    tags: ['REST APIs', 'GraphQL', 'Microservices'],
  },
  {
    num: '07',
    id: 'crm-development',
    title: 'CRM Development',
    tagline: 'Custom CRM platforms with automated workflows',
    desc: 'Custom CRM platforms with automation and integration designed to turn leads into long-term loyal clients while empowering your sales reps.',
    tags: ['Lead Mgmt', 'Pipeline', 'Automation'],
  },
  {
    num: '08',
    id: 'seo-digital-marketing',
    title: 'SEO & Digital Marketing',
    tagline: 'Data-driven growth marketing & search rankings',
    desc: 'Data-driven SEO and growth marketing that boosts organic search rankings, generates targeted buyer traffic, and scales conversion rates.',
    tags: ['SEO', 'Google Ads', 'Analytics'],
  },
  {
    num: '09',
    id: 'internship-training',
    title: 'Internship & Training Programs',
    tagline: 'Hands-on live project training & mentorship',
    desc: 'Hands-on internships and practical software engineering training on live client projects with 1-on-1 mentorship and official industry certifications.',
    tags: ['Live Projects', 'Mentorship', 'Certification'],
  },
];

export const getServices = (req, res) => {
  return successResponse(res, 200, 'Services list fetched', servicesData);
};

export const getServiceBySlug = (req, res) => {
  const { slug } = req.params;
  const service = servicesData.find((s) => s.id === slug);

  if (!service) {
    return res.status(404).json({
      success: false,
      message: `Service with slug '${slug}' not found`,
    });
  }

  return successResponse(res, 200, 'Service details fetched', service);
};
