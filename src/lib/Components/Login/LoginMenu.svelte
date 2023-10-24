<script lang="ts">
	import { goto } from "$app/navigation";


</script>



<form on:submit|preventDefault class="text-lg flex flex-col rounded shadow-lg p-6 bg-gradient-to-b from-rose-400 to-rose-500">
    <h2 class="text-center text-4xl mb-4">
        ログイン
    </h2>

    <label class="py-2 focus:outline-none focus:border-none" for="">ユーザー名</label>
    <input type="text" name="username" id="username">
    <label class="py-2" for="">パスワード</label>
    <input type="password" name="password" id="password">
    <button on:click={() => { goto('/'); }} class="bg-white rounded-lg mt-4 hover:cursor-pointer" type="submit">ログイン</button>
</form>