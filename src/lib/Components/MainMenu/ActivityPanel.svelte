<script lang="ts">
    export let title: string;
    export let bg = "bg-rose-400";
    export let href: string;
</script>

<a {href} class="{bg} rounded-md p-6 hover:cursor-pointer hover:shadow-2xl transition-shadow w-11/12 lg:w-1/4">
    <h2 class="text-3xl pb-20">{title}</h2>
    <p class="text-lg">
        <slot />
    </p>
</a>