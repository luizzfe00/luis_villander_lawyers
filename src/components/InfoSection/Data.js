import PartnersSection from '../PartnersSection'

export const homeObjOne = {
  id: 'about',
  whiteBg: false,
  lightText: true,
  lightTextDesc: true,
  lightTopText: true,
  topLine: 'Quem Somos',
  headline: 'Nossas Informações',
  description: `Munidos do melhor interesse em congregar diversas soft skills dos nossos colaboradores montamos um escritório moderno, disruptivo, atual, ágil e humano, acima de tudo.
  Trabalharemos especialmente na área do direito empresarial consultivo, com especialistas em consultoria tributária e compliance trabalhista.
  Na pasta voltada á pessoa física colocamos ao alvedrio dos nossos clientes as expertises nas áreas cível, previdenciária, criminal e trabalhista.
  Objetivamos ser, antes de tudo, um centro de apoio e confiança para nossos parceiros e clientes.`,
  buttonLabel: 'Contate-nos',
  imgStart: false,
  img: require('../../assets/team.jpeg'),
  alt: 'Contact',
  dark: true,
  primary: true,
  darkText: false,
}

export const Partners = {
  id: 'partners',
  whiteBg: true,
  lightText: false,
  lightTextDesc: false,
  lightTopText: false,
  topLine: 'Sócios',
  headline: 'Nossas Informações',
  description: <PartnersSection />,
  buttonLabel: 'Contate-nos',
  imgStart: false,
  img: require('../../assets/svg/Connected.svg'),
  alt: 'Contact',
  dark: true,
  primary: true,
  darkText: false,
}

export const Areas = {
  id: 'areas',
  whiteBg: false,
  lightText: true,
  lightTextDesc: true,
  lightTopText: true,
  topLine: 'Áreas de Atuação',
  headline: 'Nossas Informações',
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`,
  buttonLabel: 'Contate-nos',
  imgStart: false,
  img: require('../../assets/svg/Pitching.svg'),
  alt: 'Contact',
  dark: true,
  primary: true,
  darkText: false,
}