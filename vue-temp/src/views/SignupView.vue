<template>
    <div class="signup-page">
        <main>
            <h2>Create an account</h2>

            <form @submit.prevent="handleSubmit">
              <div class="login-fields">
                <div class="field-row">
                  <label for="email">Email</label>
                  <input type="email" id="email" v-model="email" placeholder="Email" required>
                </div>
                
                <div class="field-row">
                  <label for="password">Password</label>
                  <input type="password" id="password" v-model="password" placeholder="Password" required>
                </div>

                <div class="button-container">
                  <button class="submit-button" type="submit">Sign up</button>
                </div>

                <div v-if="errors.length > 0" class="error-container">
                  <p class="error-title">The password is not valid: </p>
                  <ul>
                    <li v-for="error in errors">
                      {{ error }}
                    </li>
                  </ul>
                </div>
              </div>
            </form>
        </main>
    </div>
</template>


//=========
<script>
export default {
    name: 'SignupView',
    data() {
        return {
            email: '',
            password: '',
            errors: []
        }
    },
    methods: {
        handleSubmit() {
            this.errors = [];

            if(this.password.length < 8 || this.password.length >= 15) {
                this.errors.push('The password should be of a specific length (at least 8 characters and less than 15 characters).')
            }

            if(!/[A-Z]/.test(this.password)) {
                this.errors.push('The password should include at least one uppercase alphabet character.')
            }

            const lowercase = this.password.match(/[a-z]/g);
            if(!lowercase && lowercase.length < 2) {
                this.errors.push('The password should include at least two lowercase alphabet characters.')
            }

            if(!/[0-9]/.test(this.password)) {
                this.errors.push('The password should include at least one numeric value.')
            }

            if(!/^[A-Z]/.test(this.password)) {
                this.errors.push('The password should start with an uppercase letter.')
            }

            if(!/_/.test(this.password)) {
                this.errors.push('The password should include the character “_”')
            }
        }
    }
}
</script>


//===========
<style scoped>
.signup-page {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
}

.login-fields {
  background-color: lightgray; 
  padding: 30px;
  border-radius: 12px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

h2 {
  text-align: center;
  margin-bottom: 30px;
  color: #333;
}

.field-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-group {
  margin-bottom: 200px;
  display: flex;
  flex-direction: column;
}

label {
  font-weight: bold;
  color: #373636;
  width: 100px;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  font-size: 14px;
  background-color: #fff;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.submit-button {
  width: 130px;
  padding: 10px;
  background-color: #a6b4c5;
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 10px;
}

.submit-button:hover {
  background-color: #8aa2be;
}

.error-title {
  font-weight: bold;
  margin-bottom: 5px;
}

ul {
  margin: 0;
  padding-left: 30px;
}
</style>