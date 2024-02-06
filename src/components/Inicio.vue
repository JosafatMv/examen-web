<template>
	<div>
		<div>
			<b-row>
				<header>
					<div>
						<b-navbar type="dark" variant="dark">
							<b-navbar-nav>
								<b-nav-item href="#">
									<b-link :to="{ path: '/' }">Landing</b-link>
								</b-nav-item>
							</b-navbar-nav>
						</b-navbar>
					</div>
				</header>

				<b-col
					md="3"
					style="background-color: rgb(0, 0, 0)"
					class="sidebar"
				>
					<b-nav vertical class="pt-5">
						<b-nav-item
							><b-link :to="{ name: 'formulario' }">
								Formulario de registro
							</b-link>
						</b-nav-item>

						<b-nav-item
							><b-link :to="{ name: 'tabla' }"
								>Tabla de carros</b-link
							>
						</b-nav-item>
					</b-nav>
				</b-col>

				<b-col>
					<router-view />
				</b-col>
			</b-row>
		</div>
	</div>
</template>

<style scoped>
.sidebar {
	height: calc(100vh - 56px);
}
</style>
