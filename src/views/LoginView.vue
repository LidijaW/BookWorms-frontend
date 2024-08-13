<template>
    <div class="container d-flex justify-content-center align-items-center vh-100">
        <div class="card border-success" style="max-width: 600px; width: 100%;">
            <div class="card-header bg-success text-white">
                <h5 class="card-title mb-0">PRIJAVA</h5>
            </div>
            <div class="card-body">
                <h6 class="card-subtitle mb-3 text-muted">Prijavite se kako biste postavljali oglase</h6>
                <form @submit.prevent="login">
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
                    <div class="mb-3 text-end">
                        <button type="button" class="btn btn-link p-0" @click="openDialog">Zaboravili ste lozinku?</button>
                    </div>
                    <div class="d-grid">
                        <button type="submit" class="btn btn-outline-success" :disabled="isButtonDisabled">OK</button>
                    </div>
                </form>
            </div>
        </div>

        <!-- Modal for Password Reset -->
        <div class="modal fade" id="passwordResetModal" tabindex="-1" aria-labelledby="passwordResetModalLabel" aria-hidden="true" ref="passwordResetModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="passwordResetModalLabel">E-mail</h5>
                        <button type="button" class="btn-close" @click="closeDialog"></button>
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
                        <button type="button" class="btn btn-secondary" @click="closeDialog">CLOSE</button>
                        <button type="button" class="btn btn-primary" @click="resetPassword(emailForPassword)">SEND</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
