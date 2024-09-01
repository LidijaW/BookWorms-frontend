<template>
    <div class="container d-flex justify-content-center align-items-center vh-100">
        <!-- Login Form Card -->
        <div class="card border-success" style="max-width: 600px; width: 100%;">
            <div class="card-header bg-success text-white">
                <h5 class="card-title mb-0">PRIJAVA</h5>
            </div>
            <div class="card-body">
                <h6 class="card-subtitle mb-3 text-muted">Prijavite se kako biste postavljali oglase</h6>
                <form @submit.prevent="login">
                    <!-- Email Input -->
                    <div class="mb-3">
                        <label for="email" class="form-label">E-mail</label>
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
                    <!-- Password Input -->
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
                    <!-- Forgot Password Link -->
                    <div class="mb-3 text-end">
                        <button type="button" class="btn btn-link p-0" @click="openDialog">Zaboravili ste lozinku?</button>
                    </div>
                    <!-- Submit Button -->
                    <div class="d-grid">
                        <button type="submit" class="btn btn-outline-success" :disabled="isButtonDisabled">OK</button>
                    </div>
                </form>
            </div>
        </div>

        <!-- Password Reset Modal -->
        <div v-if="showPasswordResetModal" class="modal fade show d-block" tabindex="-1" aria-labelledby="passwordResetModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="passwordResetModalLabel">E-mail</h5>
                        <button type="button" class="btn-close" @click="closePasswordResetModal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <label for="emailForPassword" class="form-label">Email</label>
                            <input 
                                type="text" 
                                class="form-control" 
                                id="emailForPassword" 
                                v-model="emailForPassword"
                                :class="{ 'is-invalid': emailForPassword && !validEmail(emailForPassword) }"
                                required
                            >
                            <div class="invalid-feedback">
                                E-mail mora biti važeći
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary green-btn" @click="resetPassword(emailForPassword)">POŠALJI</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "LoginView",
    data() {
        return {
            isButtonDisabled: false,
            email: null,
            password: null,
            showIcon: false,
            emailForPassword: null,
            showPasswordResetModal: false, 
        };
    },
    methods: {
        clearFormData() {
            this.email = null;
            this.password = null;
        },
        async login() {
            if (!this.email || !this.password) {
                console.error("Please fill in all fields");
                return;
            }

            if (!this.validEmail(this.email)) {
                console.error("Invalid email format");
                return;
            }

            const loginData = {
                email: this.email,
                password: this.password,
            };

            try {
                await axios.post('http://localhost:3000/bookworms/auth/login', loginData);
                alert("Login successful! Redirecting to the ads page...");
                this.$router.push({ path: "/oglasi" });
            } catch (error) {
                console.error("Login error:", error.response?.data?.error || error.message);
                alert("Login failed: " + (error.response?.data?.error || error.message));
            }
        },
        toggleShowIcon() {
            this.showIcon = !this.showIcon;
        },
        validEmail(email) {
            return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
        },
        openDialog() {
            this.showPasswordResetModal = true;
        },
        closePasswordResetModal() {
            this.showPasswordResetModal = false;
        },
        async resetPassword(email) {
            if (!this.validEmail(email)) {
                console.error("Invalid email format for password reset");
                return;
            }
            console.log("Reset password for:", email);
            this.closePasswordResetModal();
        }
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

.modal.fade.show.d-block {
    display: block;
}

.green-btn {
    background-color: #2E8B57 !important; 
    border-color: #2E8B57 !important; 
    color: #fff !important; 
}

.green-btn:hover {
    background-color: #236b43 !important; 
    border-color: #236b43 !important; 
}
</style>
