<template>
    <nav>
        <h1>Vue Router</h1>
        <ul class="nav-link">
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/products">Product</router-link>
            </li>
            <li>
                <router-link to="/about">About</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'NavbarItem'
}
</script>

<style scoped>
    nav {
        background: #333;
        color: #fff;
        text-align: center;
        padding: 10px;
    }
    
    nav ul.nav-link {
        display: flex;
        justify-content: space-around;
        align-items: center;
        list-style: none;
    }

    nav ul.nav-link a {
        color: white;
        text-decoration: none;
    }

    nav ul.nav-link a:hover {
        color: rgb(83, 203, 250);
    }

</style>