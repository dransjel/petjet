export const breakpoints = {
	mobile: "320px",
	tablet: "768px",
	desktop: "1024px",
	largeDesktop: "1440px",
};

export const devices = {
	mobile: `@media (max-width: ${breakpoints.tablet})`,
	tablet: `@media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop})`,
	desktop: `@media (min-width: ${breakpoints.desktop}) and (max-width: ${breakpoints.largeDesktop})`,
	largeDesktop: `@media (min-width: ${breakpoints.largeDesktop})`,
};
