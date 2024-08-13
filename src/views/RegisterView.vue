<template>
	<div class="container d-flex justify-content-center align-items-center vh-100">
	  <div class="card border-success" style="max-width: 600px; width: 100%;">
		<div class="card-header bg-success text-white">
		  <h5 class="card-title mb-0">REGISTRACIJA</h5>
		</div>
		<div class="card-body">
		  <h6 class="card-subtitle mb-3 text-muted">Registrirajte se u jednom kliku</h6>
		  <form @submit.prevent="registerUser">
			<div class="mb-3">
			  <label for="firstName" class="form-label">Ime</label>
			  <input 
				type="text" 
				class="form-control" 
				id="firstName" 
				v-model="firstName"
				required
			  >
			</div>
			<div class="mb-3">
			  <label for="lastName" class="form-label">Prezime</label>
			  <input 
				type="text" 
				class="form-control" 
				id="lastName" 
				v-model="lastName"
				required
			  >
			</div>
			<div class="mb-3">
			  <label for="email" class="form-label">Email</label>
			  <input 
				type="text" 
				class="form-control" 
				id="email" 
				v-model="email"
				:class="{ 'is-invalid': email && !validEmail(email) }"
				required
			  >
			  <div class="invalid-feedback">
				E-mail mora biti važeći
			  </div>
			</div>
			<div class="mb-3">
			  <label for="password" class="form-label">Zaporka</label>
			  <div class="input-group">
				<input 
				  :type="showIcon ? 'text' : 'password'" 
				  class="form-control" 
				  id="password" 
				  v-model="password"
				  :class="{ 'is-invalid': password && password.length < 6 }"
				  required
				>
				<button class="btn btn-outline-secondary" type="button" @click="toggleShowIcon">
				  <i :class="showIcon ? 'bi-eye' : 'bi-eye-slash'"></i>
				</button>
			  </div>
			  <div class="invalid-feedback">
				Minimalno 6 znakova
			  </div>
			</div>
			<div class="d-grid gap-2 d-md-flex justify-content-md-end">
			  <button type="button" class="btn btn-danger me-md-2" @click="clearFormData">CLEAR</button>
			  <button type="submit" class="btn btn-outline-success" :disabled="isButtonDisabled">OK</button>
			</div>
		  </form>
		</div>
	  </div>
	</div>
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
		const email = this.email;
		const password = this.password;
		createUserWithEmailAndPassword(auth, email, password)
		  .then((userCredential) => {
			const user = userCredential.user;
			const firstName = this.firstName;
			const lastName = this.lastName;
			this.saveAdditionalData(user, email, firstName, lastName);
			this.postActionMoveToView();
		  })
		  .catch((error) => {
			console.log(error.message);
		  });
	  },
	  toggleShowIcon() {
		this.showIcon = !this.showIcon;
	  },
	  validEmail(email) {
		return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
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
  