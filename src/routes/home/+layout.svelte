<script lang="ts">
    import Nav from "$lib/Components/Navbar/Nav.svelte";
	import NavItem from "$lib/Components/Navbar/NavItem.svelte";
	import NavList from "$lib/Components/Navbar/NavList.svelte";
</script>

<header class="w-11/12 lg:w-4/6 mx-auto">
    <Nav>
        <NavList>
            <svelte:fragment>
                <NavItem href="/">
                    Home
                </NavItem>
                <NavItem href="/home/news">
                    News
                </NavItem>
                <NavItem href="/home/flashcards">
                    Flashcards
                </NavItem>
            </svelte:fragment>
        </NavList>
            
    </Nav>
</header>


<main class="w-11/12 lg:w-4/6 mx-auto">
    <slot />
</main>