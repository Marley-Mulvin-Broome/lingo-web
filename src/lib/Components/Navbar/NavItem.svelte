<script lang="ts">
    export let href: string;
</script>

<li class="p-6 hover:bg-rose-300">
    <a class="text-xl" {href}>
        <slot />
    </a>    
</li>
