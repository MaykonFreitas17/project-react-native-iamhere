export default function getCurrentDate() {
	const weekdays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

	const mouths = [
		'Janeiro', 'Fevereiro', 'Março',
		'Abril', 'Maio', 'Junho',
		'Julho', 'Agosto', 'Setembro',
		'Outubro', 'Novembro', 'Dezembro',
	];

	const date = new Date(); // Pegando a data atual

	const weekday = date.getDay();
	const day = date.getDate();
	const mouth = date.getMonth();
	const year = date.getFullYear();

	// Modelo de saida -> segunda, 6 de Janeiro 2023
	return `${weekdays[weekday]}, ${day} de ${mouths[mouth]} ${year}`;
}