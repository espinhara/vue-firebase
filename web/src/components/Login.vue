<template>
  <div class="bg-img">
    <div class="card">
    <div class="card-header">Login</div>
    <div class="card-body">
        <div v-if="error" class="alert alert-danger">{{ error }}</div>
        <form action="#" @submit.prevent="submit">
        <div class="form-group row">
            <label for="email" class="col-md-4 col-form-label text-md-right"
            >Email</label
            >

            <div class="col-md-6">
            <input
                id="email"
                type="email"
                class="form-control"
                name="email"
                value
                required
                autofocus
                v-model="form.email"
            />
            </div>
        </div>

        <div class="form-group row">
            <label
            for="password"
            class="col-md-4 col-form-label text-md-right"
            >Password</label
            >

            <div class="col-md-6">
            <input
                id="password"
                type="password"
                class="form-control"
                name="password"
                required
                v-model="form.password"
            />
            </div>
        </div>

        <div class="form-group row mb-0">
            <div class="col-md-8 offset-md-4">
            <button type="submit" class="btn btn-primary">Login</button>
            </div>
        </div>
        </form>
    </div>
    </div>
    <!-- <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      error: null,
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(() => {
          this.$router.replace({ name: "Dashboard" });
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
  },
};
</script>

<style scoped>
body,
html {
  height: 100%;
}

* {
  box-sizing: border-box;
}
.bg-img {
  /* The image used */
  background-image: url("../assets/pexels-rok-romih-3848158.jpg");

  /* Control the height of the image */
  min-height: 380px;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.card {
  position: absolute;
  right: 0;
  margin: 20px;
  max-width: 350px;
  padding: 16px;
  background-color: white;
}
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  border: none;
  background: #f1f1f1;
}
input[type="text"]:focus,
input[type="password"]:focus {
  background-color: #ddd;
  outline: none;
}

.btn {
  background-color: #04aa6d;
  color: white;
  padding: 16px 20px;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}
.btn:hover {
  opacity: 1;
}
</style>