/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @typedef PortafolioData
 * @property {string} imgSrc Url de la imagen
 * @property {string} title Titulo de la tarjeta
 * @property {string[]} skills Array con tus habilidades ej: ['React', 'CSS', 'JavaScript']
 * @property {string} descripcion La descripcion de la tarjeta
 * @property {string} demoURL Url de una pagina de demostración
 * @property {string} repoURL Url del repositorio, ej: https://github.com/usuario/repo
 * @property {string} anim La animación que se ejecutará cuando se cargue la tarjeta, ej: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Cuanto brillo tendrá el color de fondo de la tarjeta, ej: 0.1
 */

/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @type {PortafolioData[]}
 */
export const portafolioData = [
	{
		imgSrc: 'https://abctlax.com/wp-content/uploads/2023/09/Flujo-de-ingresos-De-donde-van-a-llegar-las-ganancias-para-mi-empresa.jpg',
		title: 'Flujo de Ingresos',
		skills: ['Power BI', 'Excel'],
		descripcion:
			'Informe de Flujo de Ingresos',
		demoURL: '',
		anim: 'fade-right',
	},
	{
		imgSrc: 'https://inarqformacion.com/wp-content/uploads/2023/07/presupuesto-operativo.jpg',
		title: 'Presupuesto',
		skills: ['Power BI', 'Excel'],
		descripcion:
			'Informe del Presupuesto',
		demoURL: '',
		anim: 'fade-up',
	},
	{
		imgSrc: 'https://www.sergestec.com/wp-content/uploads/2024/05/cobranza.jpg',
		title: 'Cobranzas',
		skills: ['Power BI', 'SQL'],
		descripcion:
			'Informe de Cobranzas',
		demoURL: '',
		anim: 'fade-left',
	},
	{
		imgSrc: 'https://www.cesuma.mx/blog/wp-content/uploads/2023/05/b2ap3_large_Las-3-principales-funciones-de-las-finanzas.jpeg',
		title: 'Finanzas',
		skills: ['Power BI', 'Excel'],
		descripcion:
			'Informe de Finanzas',
		demoURL: 'https://app.powerbi.com/view?r=eyJrIjoiY2FiZjIyMDQtZDFhMi00ODcxLWFkMDctYzkyOTU5MzYwOTRjIiwidCI6Ijk4MjAxZmVmLWQ5ZjYtNGU2OC04NGY1LWMyNzA1MDc0ZTM0MiIsImMiOjR9',
		anim: 'fade-left',
	},
	{
		imgSrc: 'https://delapazcostemalle.com.mx/wp-content/uploads/2023/06/recursos-humanos-de-la-paz-cosstemalle-copia-1024x683-1.webp',
		title: 'Recursos Humanos',
		skills: ['Power BI', 'Excel'],
		descripcion:
			'Informe de Recursos Humanos',
		demoURL: '',
		anim: 'fade-right',
	}
];

const skillIcons = {
	JavaScript: 'skill-icons:javascript',
	React: 'skill-icons:react-dark',
	Astro: 'skill-icons:astro',
	CSS: 'skill-icons:css',
	Sass: 'skill-icons:sass',
	StyledComponents: 'skill-icons:styledcomponents',
	Bootstrap: 'skill-icons:bootstrap',
	Tailwind: 'skill-icons:tailwindcss-dark',
};

/**
 * @description Se mapea el portafolioData para que tenga los iconos de las habilidades
 * 	Puedes ver Array.map en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const getPortafolioData = portafolioData.map((item) => {
	return {
		// Se coloca todo el contenido previo del item
		...item,
		// Se cambian las skills por los iconos correspondientes
		skills: item.skills.map((skill) => skillIcons[skill]),
	};
});
