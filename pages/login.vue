<template>
    <div class="login-container">
      <div class="login-form">
        <h2>Iniciar Sesión</h2>
        <form>
          <div class="form-group">
            <label for="username">Nombre de Usuario</label>
            <input type="text" id="username" placeholder="Ingresa tu nombre de usuario" autocomplete="off"/>
          </div>
          <div class="form-group">
            <label for="password">Contraseña</label>
            <input type="password" id="password" placeholder="Ingresa tu contraseña" autocomplete="new-password"/>
          </div>
          <button class="login-button" type="submit">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  </template>
  
  <style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .login-container h2{
    text-align: center;
    margin-bottom: 24px;
  }
  

  .login-form {
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 100%;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 8px;
  }
  
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    transition: border-color 0.3s;
  }
  
  input:focus {
    border-color: #007bff;
    outline: none;
  }
  
  .login-button {
    background-color: #007bff;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
    transition: background-color 0.3s;
  }
  
  .login-button:hover {
    background-color: #0056b3;
  }
  
  @media screen and (max-width: 600px) {
    .login-form {
      padding: 10px;
    }
  
    .form-group {
      margin-bottom: 15px;
    }
  }
  </style>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                email: '',
                password: '',
                error: null
            }
        },
        methods: {
            async login() {
                try {
                    await this.$fire.auth.signInWithEmailAndPassword(this.email, this.password)
                    this.$router.push('/')
                } catch (err) {
                    this.error = err.message
                }
            }
        }
    }
    definePageMeta({
        layout: "blank",
    });
</script>