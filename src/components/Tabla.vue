<template>
	<div>
		<b-container class="mt-3">
			<b-breadcrumb :items="items"></b-breadcrumb>

			<b-card class="mt-3" title="Carros">
				<b-table
					id="my-table"
					:items="obtenerCarros"
					:per-page="perPage"
					:current-page="currentPage"
					ref="table"
					bordered
					small
				></b-table>

				<b-pagination
					v-model="currentPage"
					:total-rows="totalRows"
					:per-page="perPage"
					aria-controls="my-table"
				></b-pagination>

				<p class="mt-3">Current Page: {{ currentPage }}</p>
			</b-card>
		</b-container>
	</div>
</template>

<script>
import carroServicio from '../services/Carros';

export default {
	data() {
		return {
			perPage: 5,
			currentPage: 1,
			filtro: '',
			carros: [],
			totalRows: 1,
			fields: [
				{ key: 'brand', label: 'Marca', sortable: true },
				{ key: 'model', label: 'Modelo', sortable: true },
				{ key: 'year', label: 'Año', sortable: true },
				{ key: 'serie', label: 'Serie', sortable: true },
			],
			items: [
				{
					text: 'Inicio',
					to: 'index',
					name: 'index',
				},
				{
					text: 'tabla',
					to: 'tabla',
					name: 'tabla',
				},
			],
		};
	},
	methods: {
		async obtenerCarros(ctx) {
			try {
				const data = await carroServicio.obtenerCarrosPaginadas(
					parseInt(ctx.currentPage),
					parseInt(ctx.perPage),
					ctx.filtro
				);
				this.carros = data.content;
				this.totalRows = data.totalElements;
				return this.carros;
			} catch (error) {
				console.error(error);
			}
		},
	},
};
</script>
