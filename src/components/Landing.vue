<template>
	<div>
		<b-container>
			<div>
				<b-jumbotron>
					<template #header>Bienvenido al registro de autos</template>

					<template #lead>
						El registro de autos es una aplicación que te permite
						llevar un control de los autos que tienes. Puedes
						agregar los autos que desees.
					</template>

					<hr class="my-4" />

					<p>Examen de desarrollo web, unidad 1</p>

					<!-- redirect button -->
					<b-link variant="primary" :to="{ name: 'index' }">
						Ir a registro de autos
					</b-link>
				</b-jumbotron>
			</div>
		</b-container>

		<div class="footer">
			<b-container>
				<b-row>
					<b-col>
						<p>© 2024 Josafat</p>
					</b-col>
					<b-col class="text-right">
						<p>Contacto: 20213tn124@utez.edu.mx</p>
					</b-col>
				</b-row>
			</b-container>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
	position: fixed;
	bottom: 0;
	width: 100%;
}
</style>
