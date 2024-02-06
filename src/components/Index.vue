<template>
	<div>
		<b-container class="mt-4">
			<b-card>
				<b-breadcrumb :items="items"></b-breadcrumb>

				<h1>Pantalla inicial</h1>

				<div class="container p-0">
					<div class="row">
						<div class="col-6">
							<b-card
								title="Registro de carros"
								tag="article"
								style="max-width: 20rem"
								class="mb-2"
							>
								<b-card-text>
									El registro de autos es una aplicación que
									te permite llevar un control de los autos
									que tienes
								</b-card-text>

								<b-link :to="{ name: 'formulario' }">
									Ir a tabla de carros
								</b-link>
							</b-card>
						</div>

						<div class="col-6">
							<b-card
								title="Consulta de carros"
								tag="article"
								style="max-width: 20rem"
								class="mb-2"
							>
								<b-card-text>
									Consulta todos los carros que hayas
									registrado
								</b-card-text>

								<b-link :to="{ name: 'tabla' }">
									Ir a tabla de carros
								</b-link>
							</b-card>
						</div>
					</div>
				</div>
			</b-card>
		</b-container>
	</div>
</template>

<script>
export default {
	data() {
		return {
			items: [
				{
					text: 'Inicio',
					href: '#',
				},
			],
		};
	},
};
</script>
