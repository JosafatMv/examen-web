<template>
	<div>
		<b-container class="mt-2">
			<b-breadcrumb :items="items"></b-breadcrumb>

			<b-card title="Formulario de registro">
				<b-form
					@submit.prevent="onSubmit"
					action="https://vuejs.org/"
					method="post"
					novalidate
				>
					<b-container class="m-0 p-0">
						<b-alert
							variant="danger"
							dismissible
							:show="errors.length > 0"
						>
							<b>{{
								errors.length > 1
									? 'Por favor, corrige los siguientes errores:'
									: 'Por favor, corrige el siguiente error:'
							}}</b>
							<ul>
								<li v-for="error in errors" :key="error">
									{{ error }}
								</li>
							</ul>
						</b-alert>

						<b-row>
							<b-col>
								<b-form-group
									id="brand-group"
									label="Marca"
									label-for="brand"
									:state="brand ? null : false"
								>
									<b-form-input
										id="brand"
										v-model="brand"
										type="text"
										name="brand"
										required
									></b-form-input>
								</b-form-group>

								<b-form-group
									id="model-group"
									label="Modelo"
									label-for="model"
									:state="model ? null : false"
								>
									<b-form-input
										id="model"
										v-model="model"
										type="text"
										name="model"
										required
									></b-form-input>
								</b-form-group>
							</b-col>

							<b-col>
								<b-form-group
									id="year-group"
									label="Año de fabricación"
									label-for="year"
									:state="year ? null : false"
								>
									<b-form-input
										id="year"
										v-model="year"
										type="text"
										name="year"
										required
									></b-form-input>
								</b-form-group>

								<b-form-group
									id="serie-group"
									label="Número de serie"
									label-for="serie"
									:state="serie ? null : false"
								>
									<b-form-input
										id="serie"
										v-model="serie"
										type="text"
										name="serie"
										required
									></b-form-input>
								</b-form-group>
							</b-col>
						</b-row>
					</b-container>

					<b-button type="submit" variant="primary" class="mt-3"
						>Registrar</b-button
					>
				</b-form>
			</b-card>
		</b-container>
	</div>
</template>

<script>
import Vue from 'vue';
import carroService from '../services/Carros';

export default Vue.extend({
	data() {
		return {
			brand: '',
			model: '',
			year: 0,
			serie: '',
			errors: [],
			items: [
				{
					text: 'Inicio',
					to: 'index',
					name: 'index',
				},
				{
					text: 'formulario',
					to: 'formulario',
					name: 'formulario',
				},
			],
		};
	},
	methods: {
		async onSubmit(e) {
			console.log(this.marca);

			this.errors = [];

			const actualYear = new Date().getFullYear();
			if (this.year > actualYear) {
				this.errors.push('El año no puede ser mayor al actual');
			}

			if (isNaN(this.year)) {
				this.errors.push('El año debe ser un número');
			}

			if (!/^[a-zA-Z0-9]*$/.test(this.brand)) {
				this.errors.push('La marca debe ser alfanumérica');
			}

			if (!/^[a-zA-Z]{4}[0-9]{3}-[0-9]{2}[a-zA-Z]{2}$/.test(this.serie)) {
				this.errors.push('El número de serie no es válido');
			}

			if (this.errors.length > 0) {
				e.preventDefault();
				return;
			}

			try {
				const data = await carroService.registrarCarro({
					brand: this.brand,
					model: this.model,
					year: this.year,
					serie: this.serie,
				});

				this.brand = '';
				this.model = '';
				this.year = 0;
				this.serie = '';

				console.log(data);
			} catch (error) {
				console.error(error);
			}

			e.preventDefault();
		},
	},
});
</script>

<style></style>
