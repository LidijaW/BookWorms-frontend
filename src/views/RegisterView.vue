<template>
	<v-container fill-height fluid class="background">
		<v-row align="center" justify="center">
			<v-col align="center" justify="center" cols="12">
				<v-card class="card-border" color="#E7FFEE" width="600px" outlined>
					<v-card-title align="left">REGISTRACIJA</v-card-title>
					<v-card-subtitle align="left">
						Registrirajte se u jednom kliku
					</v-card-subtitle>
					<v-card-text>
						<v-form v-model="valid">
							<v-text-field
								v-model="firstName"
								dense
								label="Ime"
								clearble
								type="text"
								outlined></v-text-field>
							<v-text-field
								v-model="lastName"
								dense
								label="Prezime"
								clearble
								type="text"
								outlined></v-text-field>
							<v-text-field
								v-model="email"
								dense
								label="Email"
								clearble
								type="text"
								:rules="[rules.required, rules.email]"
								outlined></v-text-field>
							<v-text-field
								v-model="password"
								dense
								label="Zaporka"
								clearble
								:append-icon="
									showIcon ? 'mdi-eye' : 'mdi-eye-off'
								"
								:rules="[rules.required, rules.min]"
								:type="showIcon ? 'text' : 'password'"
								outlined></v-text-field>
						</v-form>
					</v-card-text>
					<v-card-actions class="card-actions">
						<v-btn
							class="btn-right-margin"
							@click="clearFormData"
							color="red darken-3"
							outlined>
							CLEAR
						</v-btn>
						<v-btn
							:disabled="isButtonDisabled"
							outlined
							@click="registerUser">
							OK
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import {
	doc,
	auth,
	db,
	setDoc,
	createUserWithEmailAndPassword,
} from "../../firebase.js";
export default {
	name: "RegistrationView",
	components: {},
	watch: {
		valid: function (isValid) {
			this.isButtonDisabled = isValid != true;
		},
	},
	data() {
		return {
			isButtonDisabled: false,
			valid: true,
			firstName: null,
			lastName: null,
			email: null,
			password: null,
			showIcon: false,
			rules: {
				required: (value) => !!value || "Obavezno",
				min: (v) => v?.length >= 6 || "Minimalno 6 znakova",
				email: (v) =>
					!v ||
					/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
					"E-mail mora biti važeći",
			},
		};
	},
	created() {},
	mounted() {},
	destroyed() {},
	methods: {
		clearFormData() {
			this.firstName = null;
			this.lastName = null;
			this.email = null;
			this.password = null;
		},
		postActionMoveToView() {
			this.$router.push({ path: "/oglasi" });
		},
		async saveAdditionalData(user, email, firstName, lastName) {
			await setDoc(doc(db, "users", email), {
				Email: email,
				FirstName: firstName,
				LastName: lastName,
				AuthorisationType: "USER",
			});
		},
		registerUser() {
			debugger;
			const email = this.email;
			const password = this.password;
			createUserWithEmailAndPassword(auth, email, password)
				.then((userCredential) => {
					debugger;
					// Signed in
					const user = userCredential.user;
					const firstName = this.firstName;
					const lastName = this.lastName;
					this.saveAdditionalData(user, email, firstName, lastName);
					this.postActionMoveToView();
				})
				.catch((error) => {
					debugger;
					const errorCode = error.code;
					const errorMessage = error.message;
					console.log(error, errorCode, errorMessage);
				});
		},
	},
};
</script>

<style>
.card-border {
	padding: 2%;
}

.card-text-border {
	padding: 2.5%;
}

.card-actions {
	display: flex;
	align-items: center;
	justify-content: flex-end;
}

.btn-right-margin {
	margin-right: 2%;
}
</style>
