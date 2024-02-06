import axios from 'axios';

const API_URL = 'http://localhost:8080/api/vehiculos';

const obtenerCarrosPaginadas = async (page, size, filter) => {
	try {
		const response = await axios.post(`${API_URL}/page`, {
			params: { page, size, filter },
		});
		console.log(response);

		return response.data;
	} catch (error) {
		throw error;
	}
};

const registrarCarro = async (carro) => {
	try {
		const response = await axios.post(API_URL, carro);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export default {
	obtenerCarrosPaginadas,
	registrarCarro,
};
