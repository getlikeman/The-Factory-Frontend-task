<script setup></script>

<template>
  <header>
    <img src="../assets/logo.svg" class="logo" width="112" height="44">
    <nav>
      <ul>
        <li>
          <router-link to="/favorite"><img src="../assets/Like.svg" width="25" height="23"> <span> Избранное</span>
          </router-link>
        </li>
        <li>
          <router-link to="/" ><img src="../assets/Search.svg" width="23"
                                                         height="23"><span>Поиск</span></router-link>
        </li>

      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100dvw;
  height: 80px;
  background: black;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
}

.logo {
  margin-left: 20vw;
}

nav {
  margin-right: 20vw;

}

ul {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  gap: 35px;
}

li {
  list-style: none;
  vertical-align: center;

}

span {
  vertical-align: top;
  margin: 0 0 5px 5px;
}

li > img {
  margin-left: 10px;
}

a {
  text-decoration: none;
  color: white;

}

@media (max-width: 650px ) {
  a > span {
    display: none;

  }

  .logo {
    margin-left: 10vw;
  }

  nav {
    margin-right: 10vw;

  }

}
</style>
